import { bigint, numeric, pgEnum, pgTable, real, text, varchar } from 'drizzle-orm/pg-core';

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
    height: numeric({ precision: 7, scale: 4 }).notNull(),      // metres, negative for low water – source: data[].height
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
    gust_ecmwf:              real(),    // source: hours[].gust.ecmwf
    gust_noaa:               real(),    // source: hours[].gust.noaa
    gust_sg:                 real(),    // source: hours[].gust.sg

    // --- pressure (hPa) ----------------------------------------------------
    pressure_ecmwf:          real(),    // source: hours[].pressure.ecmwf
    pressure_ecmwf_aifs:     real(),    // source: hours[].pressure['ecmwf:aifs']
    pressure_noaa:           real(),    // source: hours[].pressure.noaa
    pressure_sg:             real(),    // source: hours[].pressure.sg

    // --- waterTemperature (°C) ---------------------------------------------
    water_temp_meto:         real(),    // source: hours[].waterTemperature.meto
    water_temp_noaa:         real(),    // source: hours[].waterTemperature.noaa
    water_temp_sg:           real(),    // source: hours[].waterTemperature.sg

    // --- waveHeight (m) ----------------------------------------------------
    wave_height_dwd:         real(),    // source: hours[].waveHeight.dwd
    wave_height_ecmwf:       real(),    // source: hours[].waveHeight.ecmwf
    wave_height_meteo:       real(),    // source: hours[].waveHeight.meteo
    wave_height_noaa:        real(),    // source: hours[].waveHeight.noaa
    wave_height_sg:          real(),    // source: hours[].waveHeight.sg

    // --- windDirection (degrees true) --------------------------------------
    wind_dir_dwd:            real(),    // source: hours[].windDirection.dwd
    wind_dir_ecmwf:          real(),    // source: hours[].windDirection.ecmwf
    wind_dir_ecmwf_aifs:     real(),    // source: hours[].windDirection['ecmwf:aifs']
    wind_dir_noaa:           real(),    // source: hours[].windDirection.noaa
    wind_dir_sg:             real(),    // source: hours[].windDirection.sg

    // --- windSpeed (m/s) ---------------------------------------------------
    wind_speed_dwd:          real(),    // source: hours[].windSpeed.dwd
    wind_speed_ecmwf:        real(),    // source: hours[].windSpeed.ecmwf
    wind_speed_ecmwf_aifs:   real(),    // source: hours[].windSpeed['ecmwf:aifs']
    wind_speed_noaa:         real(),    // source: hours[].windSpeed.noaa
    wind_speed_sg:           real(),    // source: hours[].windSpeed.sg

    // --- uvIndex (dimensionless) -------------------------------------------
    uv_index_noaa:           real(),    // source: hours[].uvIndex.noaa  (solar endpoint)
    uv_index_sg:             real()     // source: hours[].uvIndex.sg    (solar endpoint)
});

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

    // --- common fields (present in all three endpoints) --------------------
    cost:             numeric({ precision: 10, scale: 4 }),    // source: meta.cost
    request_start:    varchar({ length: 50 }),                 // source: meta.start  (ISO-like string "YYYY-MM-DD HH:MM")

    // --- tides-only fields -------------------------------------------------
    daily_quota:      numeric({ precision: 10, scale: 0 }),    // source: meta.dailyQuota
    datum:            varchar({ length: 50 }),                 // source: meta.datum  (e.g. "MSL")
    request_end:      varchar({ length: 50 }),                 // source: meta.end
    offset:           numeric({ precision: 5, scale: 0 }),     // source: meta.offset (UTC offset hours)
    request_count:    numeric({ precision: 10, scale: 0 }),    // source: meta.requestCount

    // station sub-object – flattened, distance omitted (always 0)
    station_lat:      numeric({ precision: 9, scale: 6 }),     // source: meta.station.lat
    station_lon:      numeric({ precision: 9, scale: 6 }),     // source: meta.station.lng
    station_name:     varchar({ length: 255 }),                // source: meta.station.name
    station_source:   varchar({ length: 100 }),                // source: meta.station.source

    // --- weather / solar field --------------------------------------------
    parameters:       text()                                   // source: query-string "params" value (comma-separated list)
});
