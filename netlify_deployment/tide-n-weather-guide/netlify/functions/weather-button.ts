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
//   2. Merge the two hour arrays on the `time` key (Unix epoch seconds) and
//      bulk-INSERT the combined rows into `weather`
//   3. Append one row to `metadata` per source — source='weather' and
//      source='solar' — as an append-only audit log

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
import { weather, metadata } from '../../src/db/schema';

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
// Mock API response — mirrors /v2/weather/point
// Only the first 3 hours of weather.json are included here for brevity;
// in the full file all hours are present.
// ---------------------------------------------------------------------------
const MOCK_WEATHER_RESPONSE: { hours: WeatherHour[]; meta: WeatherMeta } = {
  hours: [
    { time: '2026-02-15T00:00:00+00:00', gust: { ecmwf: 3.75, noaa: 4.14, sg: 3.75 }, pressure: { ecmwf: 1010.84, 'ecmwf:aifs': 1011.82, noaa: 1029.5, sg: 1010.84 }, waterTemperature: { meto: 13.06, noaa: 13.0, sg: 13.06 }, waveHeight: { dwd: 2.91, ecmwf: 2.87, meteo: 2.47, noaa: 2.34, sg: 2.87 }, windDirection: { dwd: 268.67, ecmwf: 249.99, 'ecmwf:aifs': 249.64, noaa: 269.38, sg: 249.99 }, windSpeed: { dwd: 4.17, ecmwf: 1.28, 'ecmwf:aifs': 1.59, noaa: 3.51, sg: 1.28 } },
    { time: '2026-02-15T01:00:00+00:00', gust: { ecmwf: 5.91, noaa: 4.87, sg: 5.91 }, pressure: { ecmwf: 1010.49, 'ecmwf:aifs': 1011.52, noaa: 1029.15, sg: 1010.49 }, waterTemperature: { meto: 13.05, noaa: 12.99, sg: 13.05 }, waveHeight: { dwd: 2.83, ecmwf: 2.78, meteo: 2.41, noaa: 2.29, sg: 2.78 }, windDirection: { dwd: 263.86, ecmwf: 246.22, 'ecmwf:aifs': 245.86, noaa: 263.17, sg: 246.22 }, windSpeed: { dwd: 4.38, ecmwf: 1.65, 'ecmwf:aifs': 1.87, noaa: 4.22, sg: 1.65 } },
    { time: '2026-02-15T02:00:00+00:00', gust: { ecmwf: 5.91, noaa: 5.59, sg: 5.91 }, pressure: { ecmwf: 1010.14, 'ecmwf:aifs': 1011.23, noaa: 1028.81, sg: 1010.14 }, waterTemperature: { meto: 13.06, noaa: 12.98, sg: 13.06 }, waveHeight: { dwd: 2.74, ecmwf: 2.69, meteo: 2.35, noaa: 2.24, sg: 2.69 }, windDirection: { dwd: 259.06, ecmwf: 242.46, 'ecmwf:aifs': 242.09, noaa: 256.95, sg: 242.46 }, windSpeed: { dwd: 4.58, ecmwf: 2.03, 'ecmwf:aifs': 2.15, noaa: 4.92, sg: 2.03 } },
  ],
  meta: {
    cost:         1,
    dailyQuota:   10,
    end:          '2026-02-24 23:00',
    lat:          41.683,
    lng:          -8.833,
    params:       ['waveHeight', 'windSpeed', 'gust', 'windDirection', 'waterTemperature', 'pressure'],
    requestCount: 3,
    start:        '2026-02-15 00:00',
  },
};

// ---------------------------------------------------------------------------
// Mock API response — mirrors /v2/solar/point
// Only the first 3 hours of solar.json are included here for brevity;
// in the full file all hours are present.
// ---------------------------------------------------------------------------
const MOCK_SOLAR_RESPONSE: { hours: SolarHour[]; meta: SolarMeta } = {
  hours: [
    { time: '2026-02-15T00:00:00+00:00', uvIndex: { noaa: 0.0, sg: 0.0 } },
    { time: '2026-02-15T01:00:00+00:00', uvIndex: { noaa: 0.0, sg: 0.0 } },
    { time: '2026-02-15T02:00:00+00:00', uvIndex: { noaa: 0.0, sg: 0.0 } },
  ],
  meta: {
    cost:         1,
    dailyQuota:   10,
    end:          '2026-02-24 23:00',
    lat:          41.683,
    lng:          -8.833,
    params:       ['uvIndex'],
    requestCount: 4,
    start:        '2026-02-15 00:00',
  },
};

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
    await db.execute(drizzleSql`TRUNCATE TABLE weather`);

    // --- 2. Build a lookup map of solar uvIndex values keyed by Unix seconds -
    // Solar hours use ISO 8601 with timezone offset (+00:00), so new Date()
    // parses them reliably without any string manipulation.
    const solarByTime = new Map<number, { noaa?: number; sg?: number }>();
    for (const hour of solarHours) {
      const unixSec = Math.floor(new Date(hour.time).getTime() / 1000);
      solarByTime.set(unixSec, hour.uvIndex ?? {});
    }

    // --- 3. Map weather hours → DB rows, merging solar uvIndex on time -------
    // Both APIs share the same UTC hourly cadence so every weather row should
    // have a matching solar entry; if one is absent the uv columns stay null.
    const weatherRows = weatherHours.map((hour) => {
      const unixSec = Math.floor(new Date(hour.time).getTime() / 1000);
      const uv = solarByTime.get(unixSec) ?? {};

      return {
        time: unixSec,

        // gust (m/s) — source: hours[i].gust.<model>
        gust_ecmwf: hour.gust?.ecmwf            ?? null,
        gust_noaa:  hour.gust?.noaa             ?? null,
        gust_sg:    hour.gust?.sg               ?? null,

        // pressure (hPa) — source: hours[i].pressure.<model>
        // 'ecmwf:aifs' key uses bracket notation; stored as ecmwf_aifs
        pressure_ecmwf:      hour.pressure?.ecmwf              ?? null,
        pressure_ecmwf_aifs: hour.pressure?.['ecmwf:aifs']     ?? null,
        pressure_noaa:       hour.pressure?.noaa               ?? null,
        pressure_sg:         hour.pressure?.sg                 ?? null,

        // waterTemperature (°C) — source: hours[i].waterTemperature.<model>
        water_temp_meto: hour.waterTemperature?.meto ?? null,
        water_temp_noaa: hour.waterTemperature?.noaa ?? null,
        water_temp_sg:   hour.waterTemperature?.sg   ?? null,

        // waveHeight (m) — source: hours[i].waveHeight.<model>
        wave_height_dwd:   hour.waveHeight?.dwd   ?? null,
        wave_height_ecmwf: hour.waveHeight?.ecmwf ?? null,
        wave_height_meteo: hour.waveHeight?.meteo ?? null,
        wave_height_noaa:  hour.waveHeight?.noaa  ?? null,
        wave_height_sg:    hour.waveHeight?.sg    ?? null,

        // windDirection (degrees true) — source: hours[i].windDirection.<model>
        wind_dir_dwd:        hour.windDirection?.dwd            ?? null,
        wind_dir_ecmwf:      hour.windDirection?.ecmwf          ?? null,
        wind_dir_ecmwf_aifs: hour.windDirection?.['ecmwf:aifs'] ?? null,
        wind_dir_noaa:       hour.windDirection?.noaa           ?? null,
        wind_dir_sg:         hour.windDirection?.sg             ?? null,

        // windSpeed (m/s) — source: hours[i].windSpeed.<model>
        wind_speed_dwd:        hour.windSpeed?.dwd            ?? null,
        wind_speed_ecmwf:      hour.windSpeed?.ecmwf          ?? null,
        wind_speed_ecmwf_aifs: hour.windSpeed?.['ecmwf:aifs'] ?? null,
        wind_speed_noaa:       hour.windSpeed?.noaa           ?? null,
        wind_speed_sg:         hour.windSpeed?.sg             ?? null,

        // uvIndex (dimensionless) — merged from solar response on matching time
        uv_index_noaa: uv.noaa ?? null,
        uv_index_sg:   uv.sg   ?? null,
      };
    });

    await db.insert(weather).values(weatherRows).onConflictDoNothing();

    // --- 4. Append metadata audit rows (one per source) ---------------------
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
        success:      true,
        rowsInserted: weatherRows.length,
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
        error:   error instanceof Error ? error.message : 'Failed to populate weather table',
      }),
    };
  }
};
