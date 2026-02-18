# Database Schema — Tide & Weather Guide

> **Stack:** PostgreSQL (Neon) · Drizzle ORM · Netlify

---

## Table of Contents

1. [Overview](#overview)
2. [Design Decisions](#design-decisions)
3. [ERD Diagram](#erd-diagram)
4. [Table Reference](#table-reference)
   - [tides](#tides)
   - [weather](#weather)
   - [metadata](#metadata)
5. [Data Mapping Tables](#data-mapping-tables)
   - [tides — JSON → DB](#tides--json--db)
   - [weather — JSON → DB](#weather--json--db)
   - [solar → weather — JSON → DB](#solar--weather--json--db)
   - [metadata — JSON → DB (all endpoints)](#metadata--json--db-all-endpoints)
6. [Enums](#enums)
7. [API Poll Cycle](#api-poll-cycle)

---

## Overview

Three Stormglass API endpoints feed the database:

| Endpoint | Stormglass path | Target table(s) |
|---|---|---|
| Tidal extremes | `/v2/tide/extremes/point` | `tides`, `metadata` |
| Hourly weather | `/v2/weather/point` | `weather`, `metadata` |
| Hourly solar / UV | `/v2/solar/point` | `weather` (merged), `metadata` |

Solar data is **merged into the `weather` table** on the `time` primary key, because both endpoints produce one row per UTC hour and share the same time-series granularity.

---

## Design Decisions

| Decision | Rationale |
|---|---|
| **Unix epoch (bigint) as PKs for `tides` and `weather`** | Natural deduplication key: re-inserting the same API window is idempotent with `ON CONFLICT DO NOTHING`. No synthetic surrogate needed. |
| **`tides` and `weather` are flushed on each poll** | The API returns a rolling forecast window; stale forecasts are replaced entirely. A truncate + bulk insert is simpler and faster than row-level upserts. |
| **`metadata` is append-only** | Provides an audit trail of every API call (cost, quota usage, timestamps). Rows are never deleted. |
| **`tide_type` enum ('high' \| 'low')** | Enforces data integrity at the DB level; avoids silent insertion of invalid strings. |
| **`meta_source` enum ('tides' \| 'weather' \| 'solar')** | Allows a single `metadata` table to record meta from all three endpoints while still being queryable by source. |
| **`real` (float4) for weather/solar measurements** | Single-precision is sufficient for the decimal precision returned by the API (2–4 significant figures) and uses half the storage of `double precision`. |
| **`numeric(7,4)` for tide height** | Tide heights in the sample range from ~−1.4 m to ~+1.5 m with 4 decimal places; `numeric` avoids float rounding for a value that may drive business logic. |
| **All weather measurement columns nullable** | Not every source model supplies every parameter for every hour (evidenced in the API samples). `NOT NULL` would cause insertions to fail for sparse rows. |
| **`ecmwf:aifs` stored as `ecmwf_aifs`** | Colons are not valid in SQL identifiers; `_` is the conventional replacement. |
| **`station.distance` omitted from metadata** | Per spec — the API always returns `0` for a point query. |
| **`meta.lat` / `meta.lng` omitted from metadata** | Per spec — these always equal `station_lat` / `station_lon`; storing them would be redundant. |
| **`parameters` column (text) in metadata** | The weather and solar endpoints accept a `params` query-string; storing the actual list used makes the audit row self-describing. `null` for tides (no params key in its meta). |

---

## ERD Diagram

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                          tide-n-weather-guide DB                                │
│                                                                                 │
│  ┌──────────────────────┐    ┌──────────────────────────────────────────────┐   │
│  │        tides         │    │                   weather                    │   │
│  ├──────────────────────┤    ├──────────────────────────────────────────────┤   │
│  │ time  BIGINT  PK     │    │ time              BIGINT  PK                 │   │
│  │ height NUMERIC(7,4)  │    │ gust_ecmwf        REAL                      │   │
│  │ type  tide_type ENUM │    │ gust_noaa         REAL                      │   │
│  └──────────────────────┘    │ gust_sg           REAL                      │   │
│                              │ pressure_ecmwf    REAL                      │   │
│                              │ pressure_ecmwf_aifs REAL                    │   │
│                              │ pressure_noaa     REAL                      │   │
│  ┌──────────────────────────────────────────────────────────────────────┐   │   │
│  │                         metadata                                     │   │   │
│  ├──────────────────────────────────────────────────────────────────────┤   │   │
│  │ id             BIGINT  PK  GENERATED ALWAYS AS IDENTITY              │   │   │
│  │ source         meta_source ENUM  ('tides'|'weather'|'solar')         │   │   │
│  │ cost           NUMERIC(10,4)                                         │   │   │
│  │ request_start  VARCHAR(50)                                           │   │   │
│  │ daily_quota    NUMERIC(10,0)   ← tides only                         │   │   │
│  │ datum          VARCHAR(50)     ← tides only                         │   │   │
│  │ request_end    VARCHAR(50)     ← tides only                         │   │   │
│  │ offset         NUMERIC(5,0)    ← tides only                         │   │   │
│  │ request_count  NUMERIC(10,0)   ← tides only                         │   │   │
│  │ station_lat    NUMERIC(9,6)    ← tides only                         │   │   │
│  │ station_lon    NUMERIC(9,6)    ← tides only                         │   │   │
│  │ station_name   VARCHAR(255)    ← tides only                         │   │   │
│  │ station_source VARCHAR(100)    ← tides only                         │   │   │
│  │ parameters     TEXT            ← weather/solar only                 │   │   │
│  └──────────────────────────────────────────────────────────────────────┘   │   │
│              │ pressure_sg      REAL                      │               │   │
│              │ water_temp_meto  REAL                      │               │   │
│              │ water_temp_noaa  REAL                      │               │   │
│              │ water_temp_sg    REAL                      │               │   │
│              │ wave_height_dwd  REAL    ─────────────────┘               │   │
│              │ wave_height_ecmwf REAL                                    │   │
│              │ wave_height_meteo REAL                                    │   │
│              │ wave_height_noaa  REAL                                    │   │
│              │ wave_height_sg    REAL                                    │   │
│              │ wind_dir_dwd      REAL                                    │   │
│              │ wind_dir_ecmwf    REAL                                    │   │
│              │ wind_dir_ecmwf_aifs REAL                                  │   │
│              │ wind_dir_noaa     REAL                                    │   │
│              │ wind_dir_sg       REAL                                    │   │
│              │ wind_speed_dwd    REAL                                    │   │
│              │ wind_speed_ecmwf  REAL                                    │   │
│              │ wind_speed_ecmwf_aifs REAL                                │   │
│              │ wind_speed_noaa   REAL                                    │   │
│              │ wind_speed_sg     REAL                                    │   │
│              │ uv_index_noaa     REAL   ← from solar endpoint            │   │
│              │ uv_index_sg       REAL   ← from solar endpoint            │   │
│              └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────┘

Note: tides and weather have no FK relationship with metadata.
      metadata is an independent audit log keyed by source enum + id.
```

---

## Table Reference

### tides

Stores discrete tidal extreme events (high water / low water).

| Column | Type | Nullable | Notes |
|---|---|---|---|
| `time` | `BIGINT` | NO — PK | Unix epoch seconds |
| `height` | `NUMERIC(7,4)` | NO | Metres above/below MSL; negative = below datum |
| `type` | `tide_type` ENUM | NO | `'high'` or `'low'` |

---

### weather

One row per UTC hour. Combines the weather-point and solar-point responses on `time`.

| Column | Type | Nullable | Source parameter |
|---|---|---|---|
| `time` | `BIGINT` | NO — PK | `hours[].time` (converted to Unix epoch) |
| `gust_ecmwf` | `REAL` | YES | `gust.ecmwf` |
| `gust_noaa` | `REAL` | YES | `gust.noaa` |
| `gust_sg` | `REAL` | YES | `gust.sg` |
| `pressure_ecmwf` | `REAL` | YES | `pressure.ecmwf` |
| `pressure_ecmwf_aifs` | `REAL` | YES | `pressure['ecmwf:aifs']` |
| `pressure_noaa` | `REAL` | YES | `pressure.noaa` |
| `pressure_sg` | `REAL` | YES | `pressure.sg` |
| `water_temp_meto` | `REAL` | YES | `waterTemperature.meto` |
| `water_temp_noaa` | `REAL` | YES | `waterTemperature.noaa` |
| `water_temp_sg` | `REAL` | YES | `waterTemperature.sg` |
| `wave_height_dwd` | `REAL` | YES | `waveHeight.dwd` |
| `wave_height_ecmwf` | `REAL` | YES | `waveHeight.ecmwf` |
| `wave_height_meteo` | `REAL` | YES | `waveHeight.meteo` |
| `wave_height_noaa` | `REAL` | YES | `waveHeight.noaa` |
| `wave_height_sg` | `REAL` | YES | `waveHeight.sg` |
| `wind_dir_dwd` | `REAL` | YES | `windDirection.dwd` |
| `wind_dir_ecmwf` | `REAL` | YES | `windDirection.ecmwf` |
| `wind_dir_ecmwf_aifs` | `REAL` | YES | `windDirection['ecmwf:aifs']` |
| `wind_dir_noaa` | `REAL` | YES | `windDirection.noaa` |
| `wind_dir_sg` | `REAL` | YES | `windDirection.sg` |
| `wind_speed_dwd` | `REAL` | YES | `windSpeed.dwd` |
| `wind_speed_ecmwf` | `REAL` | YES | `windSpeed.ecmwf` |
| `wind_speed_ecmwf_aifs` | `REAL` | YES | `windSpeed['ecmwf:aifs']` |
| `wind_speed_noaa` | `REAL` | YES | `windSpeed.noaa` |
| `wind_speed_sg` | `REAL` | YES | `windSpeed.sg` |
| `uv_index_noaa` | `REAL` | YES | `uvIndex.noaa` *(solar endpoint)* |
| `uv_index_sg` | `REAL` | YES | `uvIndex.sg` *(solar endpoint)* |

---

### metadata

Append-only audit log — one row per API call.

| Column | Type | Nullable | Notes |
|---|---|---|---|
| `id` | `BIGINT` | NO — PK | Auto-generated identity |
| `source` | `meta_source` ENUM | NO | `'tides'`, `'weather'`, or `'solar'` |
| `cost` | `NUMERIC(10,4)` | YES | API credit cost for the request |
| `request_start` | `VARCHAR(50)` | YES | `meta.start` — window start |
| `daily_quota` | `NUMERIC(10,0)` | YES | `meta.dailyQuota` — tides only |
| `datum` | `VARCHAR(50)` | YES | `meta.datum` — tides only (e.g. `"MSL"`) |
| `request_end` | `VARCHAR(50)` | YES | `meta.end` — tides only |
| `offset` | `NUMERIC(5,0)` | YES | `meta.offset` — tides only (UTC offset) |
| `request_count` | `NUMERIC(10,0)` | YES | `meta.requestCount` — tides only |
| `station_lat` | `NUMERIC(9,6)` | YES | `meta.station.lat` — tides only |
| `station_lon` | `NUMERIC(9,6)` | YES | `meta.station.lng` — tides only |
| `station_name` | `VARCHAR(255)` | YES | `meta.station.name` — tides only |
| `station_source` | `VARCHAR(100)` | YES | `meta.station.source` — tides only |
| `parameters` | `TEXT` | YES | Comma-separated params query string — weather/solar only |

---

## Data Mapping Tables

### tides — JSON → DB

Source: `data[]` array from `/v2/tide/extremes/point`

| JSON key path | DB column | Type conversion |
|---|---|---|
| `data[i].time` | `time` | ISO 8601 → Unix epoch (seconds) |
| `data[i].height` | `height` | float → `NUMERIC(7,4)` |
| `data[i].type` | `type` | string → `tide_type` enum |

---

### weather — JSON → DB

Source: `hours[]` array from `/v2/weather/point`

| JSON key path | DB column | Notes |
|---|---|---|
| `hours[i].time` | `time` | ISO 8601 → Unix epoch (seconds) |
| `hours[i].gust.ecmwf` | `gust_ecmwf` | m/s |
| `hours[i].gust.noaa` | `gust_noaa` | m/s |
| `hours[i].gust.sg` | `gust_sg` | m/s |
| `hours[i].pressure.ecmwf` | `pressure_ecmwf` | hPa |
| `hours[i].pressure['ecmwf:aifs']` | `pressure_ecmwf_aifs` | hPa |
| `hours[i].pressure.noaa` | `pressure_noaa` | hPa |
| `hours[i].pressure.sg` | `pressure_sg` | hPa |
| `hours[i].waterTemperature.meto` | `water_temp_meto` | °C |
| `hours[i].waterTemperature.noaa` | `water_temp_noaa` | °C |
| `hours[i].waterTemperature.sg` | `water_temp_sg` | °C |
| `hours[i].waveHeight.dwd` | `wave_height_dwd` | m |
| `hours[i].waveHeight.ecmwf` | `wave_height_ecmwf` | m |
| `hours[i].waveHeight.meteo` | `wave_height_meteo` | m |
| `hours[i].waveHeight.noaa` | `wave_height_noaa` | m |
| `hours[i].waveHeight.sg` | `wave_height_sg` | m |
| `hours[i].windDirection.dwd` | `wind_dir_dwd` | degrees true |
| `hours[i].windDirection.ecmwf` | `wind_dir_ecmwf` | degrees true |
| `hours[i].windDirection['ecmwf:aifs']` | `wind_dir_ecmwf_aifs` | degrees true |
| `hours[i].windDirection.noaa` | `wind_dir_noaa` | degrees true |
| `hours[i].windDirection.sg` | `wind_dir_sg` | degrees true |
| `hours[i].windSpeed.dwd` | `wind_speed_dwd` | m/s |
| `hours[i].windSpeed.ecmwf` | `wind_speed_ecmwf` | m/s |
| `hours[i].windSpeed['ecmwf:aifs']` | `wind_speed_ecmwf_aifs` | m/s |
| `hours[i].windSpeed.noaa` | `wind_speed_noaa` | m/s |
| `hours[i].windSpeed.sg` | `wind_speed_sg` | m/s |

---

### solar → weather — JSON → DB

Source: `hours[]` array from `/v2/solar/point`  
Merged into `weather` by matching on `time` (Unix epoch seconds).

| JSON key path | DB column | Notes |
|---|---|---|
| `hours[i].time` | `time` | ISO 8601 → Unix epoch — join key |
| `hours[i].uvIndex.noaa` | `uv_index_noaa` | dimensionless |
| `hours[i].uvIndex.sg` | `uv_index_sg` | dimensionless |

---

### metadata — JSON → DB (all endpoints)

| JSON key path | DB column | Endpoint(s) | Notes |
|---|---|---|---|
| *(application-set)* | `source` | all | `'tides'` \| `'weather'` \| `'solar'` |
| `meta.cost` | `cost` | all | API credit cost |
| `meta.start` | `request_start` | all | Window start string |
| `meta.dailyQuota` | `daily_quota` | tides | — |
| `meta.datum` | `datum` | tides | e.g. `"MSL"` |
| `meta.end` | `request_end` | tides | Window end string |
| `meta.offset` | `offset` | tides | UTC offset (hours) |
| `meta.requestCount` | `request_count` | tides | Cumulative requests today |
| `meta.station.lat` | `station_lat` | tides | Same as query lat |
| `meta.station.lng` | `station_lon` | tides | Same as query lng |
| `meta.station.name` | `station_name` | tides | e.g. `"viana"` |
| `meta.station.source` | `station_source` | tides | e.g. `"sg"` |
| `meta.station.distance` | *(omitted)* | tides | Always `0` for a point query |
| `meta.lat` | *(omitted)* | tides | Duplicate of `station_lat` |
| `meta.lng` | *(omitted)* | tides | Duplicate of `station_lon` |
| *(query-string `params`)* | `parameters` | weather, solar | Comma-separated param list |

---

## Enums

### `tide_type`

| Value | Meaning |
|---|---|
| `high` | High-water tidal extreme |
| `low` | Low-water tidal extreme |

### `meta_source`

| Value | Meaning |
|---|---|
| `tides` | Row originated from `/v2/tide/extremes/point` |
| `weather` | Row originated from `/v2/weather/point` |
| `solar` | Row originated from `/v2/solar/point` |

---

## API Poll Cycle

```
┌─────────────────────────────────────────────────────┐
│  Poll trigger (scheduled / on-demand)               │
└────────────────────────┬────────────────────────────┘
                         │
            ┌────────────▼────────────┐
            │  Call all 3 endpoints   │
            │  in parallel            │
            └────────────┬────────────┘
                         │
         ┌───────────────┼───────────────┐
         ▼               ▼               ▼
   tides API        weather API      solar API
         │               │               │
         ▼               ▼               ▼
  TRUNCATE tides   TRUNCATE weather  merge into
  INSERT tides     INSERT weather    weather rows
         │               │               │
         ▼               ▼               ▼
  INSERT metadata  INSERT metadata  INSERT metadata
  (source='tides') (source='weather')(source='solar')
```

- `tides` and `weather` are **flushed** (TRUNCATE) before each repopulation.  
- `metadata` is **never truncated** — rows accumulate as an audit trail.
