import { bigint, numeric, pgEnum, pgTable, pgView, text, varchar } from 'drizzle-orm/pg-core';
import { eq } from 'drizzle-orm'; // eq() is used in the weatherSolarView LEFT JOIN condition

// ---------------------------------------------------------------------------
// Enums
// ---------------------------------------------------------------------------

/**
 * Tide type: tidal extremes are either a high or low water event.
 */
export const tideTypeEnum = pgEnum('tide_type', ['high', 'low']);

/**
 * Metadata source type: records which API endpoint produced the meta row.
 */
export const metaSourceEnum = pgEnum('meta_source', ['tides', 'weather', 'solar']);

// ---------------------------------------------------------------------------
// tides
// ---------------------------------------------------------------------------

/**
 * Stores tidal extreme events from the Stormglass
 * /v2/tide/extremes/point endpoint.
 *
 * • time (Unix seconds, PK) — avoids duplicate insertion for the same event.
 * • height accepts negative values (low-water below MSL datum).
 * • type is constrained to the tide_type enum ('high' | 'low').
 *
 * The table is periodically flushed and re-populated on each API poll cycle.
 */
export const tides = pgTable('tides', {
    time:   bigint({ mode: 'number' }).primaryKey(),            // Unix epoch seconds – source: data[].time
    height: numeric({ precision: 18, scale: 15 }).notNull(),      // metres, negative for low water – source: data[].height
    type:   tideTypeEnum().notNull()                            // 'high' | 'low' – source: data[].type
});

// ---------------------------------------------------------------------------
// weather
// ---------------------------------------------------------------------------

/**
 * Hourly combined weather + solar data from two Stormglass endpoints:
 *   /v2/weather/point  (gust, pressure, waterTemperature, waveHeight,
 *                       windDirection, windSpeed)
 *   /v2/solar/point    (uvIndex)
 *
 * Column naming convention: <parameter>_<source>
 *   Sources present in the API: ecmwf, ecmwf_aifs, noaa, sg, dwd, meto, meteo
 *   (ecmwf:aifs is stored as ecmwf_aifs – colons are not valid in identifiers)
 *
 * All measurement columns are nullable because not every source provides
 * every parameter for every hour.
 *
 * The table is periodically flushed and re-populated on each API poll cycle.
 */
export const weather = pgTable('weather', {
    time:                    bigint({ mode: 'number' }).primaryKey(), // Unix epoch seconds – source: hours[].time

    // --- gust (m/s) --------------------------------------------------------
    gust_ecmwf:              numeric({ precision: 5, scale: 2 }),    // source: hours[].gust.ecmwf
    gust_noaa:               numeric({ precision: 5, scale: 2 }),    // source: hours[].gust.noaa
    gust_sg:                 numeric({ precision: 5, scale: 2 }),    // source: hours[].gust.sg

    // --- pressure (hPa) ----------------------------------------------------
    pressure_ecmwf:          numeric({ precision: 6, scale: 2 }),    // source: hours[].pressure.ecmwf
    pressure_ecmwf_aifs:     numeric({ precision: 6, scale: 2 }),    // source: hours[].pressure['ecmwf:aifs']
    pressure_noaa:           numeric({ precision: 6, scale: 2 }),    // source: hours[].pressure.noaa
    pressure_sg:             numeric({ precision: 6, scale: 2 }),    // source: hours[].pressure.sg

    // --- waterTemperature (°C) ---------------------------------------------
    water_temp_meto:         numeric({ precision: 5, scale: 2 }),    // source: hours[].waterTemperature.meto
    water_temp_noaa:         numeric({ precision: 5, scale: 2 }),    // source: hours[].waterTemperature.noaa
    water_temp_sg:           numeric({ precision: 5, scale: 2 }),    // source: hours[].waterTemperature.sg

    // --- waveHeight (m) ----------------------------------------------------
    wave_height_dwd:         numeric({ precision: 5, scale: 2 }),    // source: hours[].waveHeight.dwd
    wave_height_ecmwf:       numeric({ precision: 5, scale: 2 }),    // source: hours[].waveHeight.ecmwf
    wave_height_meteo:       numeric({ precision: 5, scale: 2 }),    // source: hours[].waveHeight.meteo
    wave_height_noaa:        numeric({ precision: 5, scale: 2 }),    // source: hours[].waveHeight.noaa
    wave_height_sg:          numeric({ precision: 5, scale: 2 }),    // source: hours[].waveHeight.sg

    // --- windDirection (degrees true) --------------------------------------
    wind_dir_dwd:            numeric({ precision: 5, scale: 2 }),    // source: hours[].windDirection.dwd
    wind_dir_ecmwf:          numeric({ precision: 5, scale: 2 }),    // source: hours[].windDirection.ecmwf
    wind_dir_ecmwf_aifs:     numeric({ precision: 5, scale: 2 }),    // source: hours[].windDirection['ecmwf:aifs']
    wind_dir_noaa:           numeric({ precision: 5, scale: 2 }),    // source: hours[].windDirection.noaa
    wind_dir_sg:             numeric({ precision: 5, scale: 2 }),    // source: hours[].windDirection.sg

    // --- windSpeed (m/s) ---------------------------------------------------
    wind_speed_dwd:          numeric({ precision: 5, scale: 2 }),    // source: hours[].windSpeed.dwd
    wind_speed_ecmwf:        numeric({ precision: 5, scale: 2 }),    // source: hours[].windSpeed.ecmwf
    wind_speed_ecmwf_aifs:   numeric({ precision: 5, scale: 2 }),    // source: hours[].windSpeed['ecmwf:aifs']
    wind_speed_noaa:         numeric({ precision: 5, scale: 2 }),    // source: hours[].windSpeed.noaa
    wind_speed_sg:           numeric({ precision: 5, scale: 2 }),    // source: hours[].windSpeed.sg

    // NOTE: uvIndex columns have been moved to the dedicated `solar` table.
    // Use the `weatherSolarView` DB view to query weather + UV together.
});

// ---------------------------------------------------------------------------
// solar
// ---------------------------------------------------------------------------

/**
 * Stores hourly UV index data from the Stormglass /v2/solar/point endpoint.
 * One row per UTC hour, aligned to the same time-series as `weather`.
 *
 * • time (Unix seconds, PK) — deduplication key; matches `weather.time` 1-to-1.
 * • uv_index_noaa / uv_index_sg — dimensionless UV index from two forecast models.
 *
 * The table is flushed and re-populated alongside `weather` on each poll cycle.
 */
export const solar = pgTable('solar', {
    time:          bigint({ mode: 'number' }).primaryKey(), // Unix epoch seconds – source: hours[].time
    uv_index_noaa: numeric({ precision: 4, scale: 2 }),     // dimensionless – source: hours[].uvIndex.noaa
    uv_index_sg:   numeric({ precision: 4, scale: 2 }),     // dimensionless – source: hours[].uvIndex.sg
});

// ---------------------------------------------------------------------------
// weather_solar (DB view)
// ---------------------------------------------------------------------------

/**
 * A read-only database view that joins `weather` and `solar` on `time`.
 *
 * Using a DB view rather than a JS merge shifts the join computation to the
 * database engine and away from the application layer.  The application can
 * query this view exactly like a table and receive a combined result set.
 *
 * Join type: LEFT JOIN — weather rows without a matching solar row are still
 * returned (uv columns will be NULL for those hours).
 *
 * Defined with the query-builder form (.as(qb => ...)) so that Drizzle Kit's
 * `db:generate` command will emit a `CREATE VIEW` statement in the migration
 * file.  Without this, the view would never be created in the database.
 */
export const weatherSolarView = pgView('weather_solar').as((qb) =>
    // Explicitly select every weather column plus only the UV value columns
    // from solar — solar.time is intentionally omitted because weather.time
    // is already included and PostgreSQL forbids two columns with the same
    // name in a single view (error 42701: "column specified more than once").
    qb
        .select({
            // --- all columns from weather ------------------------------------
            time:                    weather.time,
            gust_ecmwf:              weather.gust_ecmwf,
            gust_noaa:               weather.gust_noaa,
            gust_sg:                 weather.gust_sg,
            pressure_ecmwf:          weather.pressure_ecmwf,
            pressure_ecmwf_aifs:     weather.pressure_ecmwf_aifs,
            pressure_noaa:           weather.pressure_noaa,
            pressure_sg:             weather.pressure_sg,
            water_temp_meto:         weather.water_temp_meto,
            water_temp_noaa:         weather.water_temp_noaa,
            water_temp_sg:           weather.water_temp_sg,
            wave_height_dwd:         weather.wave_height_dwd,
            wave_height_ecmwf:       weather.wave_height_ecmwf,
            wave_height_meteo:       weather.wave_height_meteo,
            wave_height_noaa:        weather.wave_height_noaa,
            wave_height_sg:          weather.wave_height_sg,
            wind_dir_dwd:            weather.wind_dir_dwd,
            wind_dir_ecmwf:          weather.wind_dir_ecmwf,
            wind_dir_ecmwf_aifs:     weather.wind_dir_ecmwf_aifs,
            wind_dir_noaa:           weather.wind_dir_noaa,
            wind_dir_sg:             weather.wind_dir_sg,
            wind_speed_dwd:          weather.wind_speed_dwd,
            wind_speed_ecmwf:        weather.wind_speed_ecmwf,
            wind_speed_ecmwf_aifs:   weather.wind_speed_ecmwf_aifs,
            wind_speed_noaa:         weather.wind_speed_noaa,
            wind_speed_sg:           weather.wind_speed_sg,
            // --- UV columns from solar (solar.time excluded — same as weather.time) ---
            uv_index_noaa:           solar.uv_index_noaa,   // NULL when no matching solar row
            uv_index_sg:             solar.uv_index_sg,     // NULL when no matching solar row
        })
        .from(weather)
        .leftJoin(solar, eq(solar.time, weather.time))
);

// ---------------------------------------------------------------------------
// metadata
// ---------------------------------------------------------------------------

/**
 * Persists the "meta" object returned by every Stormglass API response.
 * One row is appended per API call; rows are never deleted (audit trail).
 *
 * Common fields (all endpoints):
 *   cost, start
 *
 * Tides-only fields:
 *   daily_quota, datum, end, offset, request_count,
 *   station_lat, station_lon, station_name, station_source
 *
 * The source column (meta_source enum) identifies which endpoint the row
 * came from ('tides' | 'weather' | 'solar').
 *
 * parameters stores the comma-separated params string from weather/solar
 * requests (maps to the query-string "params" value; null for tides).
 */
export const metadata = pgTable('metadata', {
    id:               bigint({ mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
    source:           metaSourceEnum().notNull(),              // 'tides' | 'weather' | 'solar'

    // Wall-clock time at which this row was inserted (i.e. when the API call
    // was actually made).  Used by the rate-limit check in checkRateLimit.ts
    // to determine whether enough time has elapsed since the last call.
    // Distinct from request_start, which is the start of the forecast window.
    fetched_at:       bigint({ mode: 'number' }).notNull(),    // Unix epoch seconds – set to Date.now()/1000 at insert time

    // --- common fields (present in all three endpoints) --------------------
    cost:             numeric({ precision: 2, scale: 0 }),    // source: meta.cost
    request_start:    bigint({ mode: 'number' }),              // source: meta.start  (Unix epoch seconds, converted from "YYYY-MM-DD HH:MM" UTC)

    // --- tides-only fields -------------------------------------------------
    daily_quota:      numeric({ precision: 5, scale: 0 }),    // source: meta.dailyQuota
    datum:            varchar({ length: 50 }),                 // source: meta.datum  (e.g. "MSL")
    request_end:      bigint({ mode: 'number' }),              // source: meta.end    (Unix epoch seconds, converted from "YYYY-MM-DD HH:MM" UTC)
    offset:           numeric({ precision: 5, scale: 0 }),     // source: meta.offset (UTC offset hours)
    request_count:    numeric({ precision: 5, scale: 0 }),    // source: meta.requestCount

    // station sub-object – flattened, distance omitted (always 0)
    station_lat:      numeric({ precision: 6, scale: 3 }),     // source: meta.station.lat
    station_lon:      numeric({ precision: 6, scale: 3 }),     // source: meta.station.lng
    station_name:     varchar({ length: 255 }),                // source: meta.station.name
    station_source:   varchar({ length: 100 }),                // source: meta.station.source

    // --- weather / solar field --------------------------------------------
    parameters:       text()                                   // source: query-string "params" value (comma-separated list)
});
