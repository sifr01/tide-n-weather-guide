// Netlify serverless function — Weather button
// Triggered when the user clicks the "Weather" button in the React UI.
// Uses mock data (weather.json + solar.json) instead of live API calls.
//
// In production this function would call two Stormglass endpoints in parallel:
//   /v2/weather/point  → gust, pressure, waterTemperature, waveHeight,
//                        windDirection, windSpeed
//   /v2/solar/point    → uvIndex
//
// On each invocation:
//   1. TRUNCATE the `weather` table  (stale forecasts are replaced entirely)
//   2. TRUNCATE the `solar` table    (stale forecasts are replaced entirely)
//   3. Bulk-INSERT weather rows into `weather`
//   4. Bulk-INSERT solar rows into `solar`
//   5. Append one row to `metadata` per source — source='weather' and
//      source='solar' — as an append-only audit log
//
// The join between weather and solar data is now performed by the database
// via the `weather_solar` view (LEFT JOIN weather ON solar.time = weather.time).
// This removes the JS merge step and shifts computation to the DB layer.

// ---------------------------------------------------------------------------
// Minimal inline types — avoids a hard dependency on @netlify/functions at
// type-check time while remaining fully compatible with the real runtime.
// ---------------------------------------------------------------------------

// The object that every Netlify function must return to the caller.
// • statusCode — HTTP status code sent back to the browser (e.g. 200, 500)
// • headers    — optional HTTP response headers
//                Record<string, string>: object whose keys/values are strings
// • body       — the response body as a plain string (we JSON.stringify into it)
type HandlerResponse = {
  statusCode: number;
  headers?: Record<string, string>;
  body: string;
};

// The incoming HTTP request object — typed loosely because no fields are read.
type HandlerEvent = Record<string, unknown>;

// Netlify execution context — typed loosely because no fields are read.
type HandlerContext = Record<string, unknown>;

// The function signature Netlify expects for every serverless handler.
type Handler = (event: HandlerEvent, context: HandlerContext) => Promise<HandlerResponse>;

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { sql as drizzleSql } from 'drizzle-orm';
import { weather, solar, metadata } from '../../src/db/schema';

// ---------------------------------------------------------------------------
// Shared helper — convert a Stormglass 'YYYY-MM-DD HH:MM' timestamp string
// to Unix epoch seconds (integer).
//
// The format lacks both the ISO 8601 'T' separator and a timezone designator.
// Without explicit UTC anchoring, new Date() would interpret the string as
// local time — producing different results depending on the runtime timezone.
// Replacing the space with 'T' and appending 'Z' forces UTC parsing.
// ---------------------------------------------------------------------------
const toUnixSeconds = (stormglassTimestamp: string): number =>
  Math.floor(new Date(stormglassTimestamp.replace(' ', 'T') + 'Z').getTime() / 1000);

// ---------------------------------------------------------------------------
// Type aliases for one hour's worth of each response
// ---------------------------------------------------------------------------

// A single hour entry from /v2/weather/point — all source sub-keys are
// optional because not every model provides every parameter for every hour.
type WeatherHour = {
  time: string;                                        // ISO 8601 UTC
  gust?:             { ecmwf?: number; noaa?: number; sg?: number };
  pressure?:         { ecmwf?: number; 'ecmwf:aifs'?: number; noaa?: number; sg?: number };
  waterTemperature?: { meto?: number; noaa?: number; sg?: number };
  waveHeight?:       { dwd?: number; ecmwf?: number; meteo?: number; noaa?: number; sg?: number };
  windDirection?:    { dwd?: number; ecmwf?: number; 'ecmwf:aifs'?: number; noaa?: number; sg?: number };
  windSpeed?:        { dwd?: number; ecmwf?: number; 'ecmwf:aifs'?: number; noaa?: number; sg?: number };
};

// A single hour entry from /v2/solar/point.
type SolarHour = {
  time: string;                                        // ISO 8601 UTC
  uvIndex?: { noaa?: number; sg?: number };
};

// The meta object returned by the weather endpoint.
type WeatherMeta = {
  cost:         number;
  dailyQuota:   number;
  end:          string;   // 'YYYY-MM-DD HH:MM'
  lat:          number;
  lng:          number;
  params:       string[];
  requestCount: number;
  start:        string;   // 'YYYY-MM-DD HH:MM'
};

// The meta object returned by the solar endpoint (same shape as weather meta).
type SolarMeta = WeatherMeta;

// ---------------------------------------------------------------------------
// Mock API responses — read from the model files instead of being inlined here.
// model/weather.json mirrors /v2/weather/point.
// model/solar.json   mirrors /v2/solar/point.
//
// Keeping mock data in dedicated files makes it easy to update the dataset
// without touching function logic, and avoids inflating the function source.
// ---------------------------------------------------------------------------
import weatherJson from '../../model/weather.json';
import solarJson   from '../../model/solar.json';

// Cast the imported JSON to the typed shapes the handler already uses.
// TypeScript widens object keys from JSON imports to their literal types,
// but 'params' becomes string[] automatically — no manual narrowing needed.
const MOCK_WEATHER_RESPONSE = weatherJson as { hours: WeatherHour[]; meta: WeatherMeta };
const MOCK_SOLAR_RESPONSE   = solarJson   as { hours: SolarHour[];   meta: SolarMeta   };

// ---------------------------------------------------------------------------
// DB setup — DATABASE_URL is server-side only (no REACT_APP_ prefix)
// ---------------------------------------------------------------------------
const sqlClient = neon(process.env.DATABASE_URL!);
const db = drizzle(sqlClient);

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------
export const handler: Handler = async () => {
  try {
    const { hours: weatherHours, meta: weatherMeta } = MOCK_WEATHER_RESPONSE;
    const { hours: solarHours,   meta: solarMeta   } = MOCK_SOLAR_RESPONSE;

    // --- 1. Flush stale weather data ----------------------------------------
    // TRUNCATE is faster than DELETE for full-table replacement and resets
    // any storage bloat from the previous poll cycle.
    await db.execute(drizzleSql`TRUNCATE TABLE weather`);

    // --- 2. Flush stale solar data ------------------------------------------
    // Solar is flushed in the same cycle as weather so both tables always
    // represent the same forecast window.
    await db.execute(drizzleSql`TRUNCATE TABLE solar`);

    // --- 3. Map weather hours → DB rows and insert into `weather` ---------
    //
    // Drizzle maps `numeric` columns to TypeScript `string` (not `number`) to
    // preserve decimal precision without floating-point rounding.  We therefore
    // convert every API number to a fixed-point string before insertion.
    // numberToString() wraps that conversion and passes null through unchanged.
    const numberToString = (APIresponseValue: number | undefined | null): string | null =>
      APIresponseValue == null ? null : String(APIresponseValue);

    const weatherRows = weatherHours.map((hour) => {
      const unixSec = Math.floor(new Date(hour.time).getTime() / 1000);

      return {
        time: unixSec,

        // gust (m/s) — source: hours[i].gust.<model>
        gust_ecmwf: numberToString(hour.gust?.ecmwf),
        gust_noaa:  numberToString(hour.gust?.noaa),
        gust_sg:    numberToString(hour.gust?.sg),

        // pressure (hPa) — source: hours[i].pressure.<model>
        // 'ecmwf:aifs' key uses bracket notation; stored as ecmwf_aifs
        pressure_ecmwf:      numberToString(hour.pressure?.ecmwf),
        pressure_ecmwf_aifs: numberToString(hour.pressure?.['ecmwf:aifs']),
        pressure_noaa:       numberToString(hour.pressure?.noaa),
        pressure_sg:         numberToString(hour.pressure?.sg),

        // waterTemperature (°C) — source: hours[i].waterTemperature.<model>
        water_temp_meto: numberToString(hour.waterTemperature?.meto),
        water_temp_noaa: numberToString(hour.waterTemperature?.noaa),
        water_temp_sg:   numberToString(hour.waterTemperature?.sg),

        // waveHeight (m) — source: hours[i].waveHeight.<model>
        wave_height_dwd:   numberToString(hour.waveHeight?.dwd),
        wave_height_ecmwf: numberToString(hour.waveHeight?.ecmwf),
        wave_height_meteo: numberToString(hour.waveHeight?.meteo),
        wave_height_noaa:  numberToString(hour.waveHeight?.noaa),
        wave_height_sg:    numberToString(hour.waveHeight?.sg),

        // windDirection (degrees true) — source: hours[i].windDirection.<model>
        wind_dir_dwd:        numberToString(hour.windDirection?.dwd),
        wind_dir_ecmwf:      numberToString(hour.windDirection?.ecmwf),
        wind_dir_ecmwf_aifs: numberToString(hour.windDirection?.['ecmwf:aifs']),
        wind_dir_noaa:       numberToString(hour.windDirection?.noaa),
        wind_dir_sg:         numberToString(hour.windDirection?.sg),

        // windSpeed (m/s) — source: hours[i].windSpeed.<model>
        wind_speed_dwd:        numberToString(hour.windSpeed?.dwd),
        wind_speed_ecmwf:      numberToString(hour.windSpeed?.ecmwf),
        wind_speed_ecmwf_aifs: numberToString(hour.windSpeed?.['ecmwf:aifs']),
        wind_speed_noaa:       numberToString(hour.windSpeed?.noaa),
        wind_speed_sg:         numberToString(hour.windSpeed?.sg),
      };
    });

    await db.insert(weather).values(weatherRows).onConflictDoNothing();

    // --- 4. Map solar hours → DB rows and insert into `solar` --------------
    // Each solar hour maps directly to one row in the `solar` table.
    // The `weather_solar` DB view will later join these rows to `weather`
    // on the `time` column, replacing the former JS-side merge.
    const solarRows = solarHours.map((hour) => {
      const unixSec = Math.floor(new Date(hour.time).getTime() / 1000);

      return {
        time:          unixSec,
        // uvIndex (dimensionless) — source: hours[i].uvIndex.<model>
        uv_index_noaa: numberToString(hour.uvIndex?.noaa),
        uv_index_sg:   numberToString(hour.uvIndex?.sg),
      };
    });

    await db.insert(solar).values(solarRows).onConflictDoNothing();

    // --- 5. Append metadata audit rows (one per source) ---------------------
    // meta.start / meta.end arrive as 'YYYY-MM-DD HH:MM' — toUnixSeconds()
    // converts them to Unix epoch seconds for the bigint columns.
    // meta.params is an array; join to a comma-separated string for `parameters`.

    await db.insert(metadata).values({
      source:        'weather',
      cost:          String(weatherMeta.cost),
      request_start: toUnixSeconds(weatherMeta.start),
      request_end:   toUnixSeconds(weatherMeta.end),
      request_count: String(weatherMeta.requestCount),
      parameters:    weatherMeta.params.join(','),
      // daily_quota, datum, offset, station_* are tides-only — left null
    });

    await db.insert(metadata).values({
      source:        'solar',
      cost:          String(solarMeta.cost),
      request_start: toUnixSeconds(solarMeta.start),
      request_end:   toUnixSeconds(solarMeta.end),
      request_count: String(solarMeta.requestCount),
      parameters:    solarMeta.params.join(','),
      // daily_quota, datum, offset, station_* are tides-only — left null
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success:             true,
        weatherRowsInserted: weatherRows.length,
        solarRowsInserted:   solarRows.length,
        meta: {
          start: weatherMeta.start,
          end:   weatherMeta.end,
        },
      }),
    };
  } catch (error) {
    console.error('Weather function error:', error);

    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: false,
        error:   error instanceof Error ? error.message : 'Failed to populate weather/solar tables',
      }),
    };
  }
};
