// src/types/data.ts
// Shared TypeScript types that describe the JSON returned by the
// get-data Netlify function and used throughout the React pages.
//
// Column names mirror the DB schema exactly so the API response can be
// assigned to these types without any renaming step.

// ---------------------------------------------------------------------------
// Tides
// ---------------------------------------------------------------------------

/** A single row from the `tides` DB table. */
export interface TideRow {
  time:   number;           // Unix epoch seconds
  height: string;           // numeric stored as string (preserves precision)
  type:   'high' | 'low';
}

// ---------------------------------------------------------------------------
// Weather + Solar (weather_solar view)
// ---------------------------------------------------------------------------

/**
 * A single row from the `weather_solar` DB view.
 * All measurement columns are nullable — not every source provides every
 * parameter for every hour.
 */
export interface WeatherSolarRow {
  time:                  number;
  // gust (m/s)
  gust_ecmwf:            string | null;
  gust_noaa:             string | null;
  gust_sg:               string | null;
  // pressure (hPa)
  pressure_ecmwf:        string | null;
  pressure_ecmwf_aifs:   string | null;
  pressure_noaa:         string | null;
  pressure_sg:           string | null;
  // water temperature (°C)
  water_temp_meto:       string | null;
  water_temp_noaa:       string | null;
  water_temp_sg:         string | null;
  // wave height (m)
  wave_height_dwd:       string | null;
  wave_height_ecmwf:     string | null;
  wave_height_meteo:     string | null;
  wave_height_noaa:      string | null;
  wave_height_sg:        string | null;
  // wind direction (degrees true)
  wind_dir_dwd:          string | null;
  wind_dir_ecmwf:        string | null;
  wind_dir_ecmwf_aifs:   string | null;
  wind_dir_noaa:         string | null;
  wind_dir_sg:           string | null;
  // wind speed (m/s)
  wind_speed_dwd:        string | null;
  wind_speed_ecmwf:      string | null;
  wind_speed_ecmwf_aifs: string | null;
  wind_speed_noaa:       string | null;
  wind_speed_sg:         string | null;
  // UV index (dimensionless)
  uv_index_noaa:         string | null;
  uv_index_sg:           string | null;
}

// ---------------------------------------------------------------------------
// API response
// ---------------------------------------------------------------------------

/** Shape of the JSON body returned by GET /.netlify/functions/get-data */
export interface GetDataResponse {
  tides:       TideRow[];
  weatherSolar: WeatherSolarRow[];
  error?:      string;
}

// ---------------------------------------------------------------------------
// Button status
// ---------------------------------------------------------------------------

/** Union for any button that triggers an async Netlify function call. */
export type ButtonStatus = 'idle' | 'loading' | 'success' | 'error' | 'rate_limited';
