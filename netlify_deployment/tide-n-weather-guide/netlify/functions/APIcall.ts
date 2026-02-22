// APIcall.ts
// Shared Stormglass API fetch module — imported by tides-button.ts and
// weather-button.ts.
//
// Responsibilities:
//   • Holds the API key (read once from process.env via dotenv)
//   • Holds the hard-coded GPS co-ordinates (same for every call)
//   • Exposes a single callAPI() function that callers invoke with a fully-
//     built URL string — the only thing that differs between endpoints
//   • Owns the USE_MOCK_DATA developer flag; when true, callAPI() returns
//     the matching JSON file from model/ instead of hitting the network.
//     This centralises mock-vs-live switching so neither button file needs
//     to know about model/ files at all.
//   • Exports the shared response types (WeatherHour, SolarHour, …) so
//     both button files can import them from one place (DRY)

import 'dotenv/config';

// ---------------------------------------------------------------------------
// Developer toggle — set to true to use local JSON mock files instead of
// making a real network request to the Stormglass API.
//
// WHY this lives here (not in .env):
//   • It is a source-code decision, not a deployment secret.
//   • Changing it requires a deliberate code change + redeploy, which is
//     intentional — it should never be accidentally left in mock mode in
//     production without a visible code diff.
// ---------------------------------------------------------------------------
export const USE_MOCK_DATA = true;

// ---------------------------------------------------------------------------
// Hard-coded GPS co-ordinates for station "Viana do Castelo", Portugal.
// These are the same for every Stormglass call in this project.
// Exporting them so callers can build their URL strings without duplicating
// the values.
// ---------------------------------------------------------------------------
export const LAT = '41.683';
export const LNG = '-8.833';

// ---------------------------------------------------------------------------
// Stormglass base URL — the common prefix for all endpoints.
// Callers append the path segment and query-string on top of this.
// ---------------------------------------------------------------------------
export const STORMGLASS_BASE = 'https://api.stormglass.io/v2';

// ---------------------------------------------------------------------------
// API key — read from the server-side environment variable set in .env (local)
// or the Netlify environment dashboard (production).
// The non-null assertion (!) is intentional: a missing key is a
// configuration error that should fail loudly rather than silently.
// ---------------------------------------------------------------------------
const API_KEY = process.env.API_KEY!;

// ---------------------------------------------------------------------------
// Mock JSON imports — loaded at module evaluation time.
// ES module `import` statements must be at the top level; they cannot be
// placed inside an `if` block.  The imports are always parsed by the bundler,
// but the objects are only used at runtime when USE_MOCK_DATA is true.
// In a production build the bundler (esbuild / webpack) will tree-shake the
// unused mock objects away automatically.
//
// resolveJsonModule: true is already set in tsconfig.json, which makes
// TypeScript treat .json imports like typed ES modules.
// ---------------------------------------------------------------------------
import tidesJson   from '../../model/tides.json';
import weatherJson from '../../model/weather.json';
import solarJson   from '../../model/solar.json';


// ---------------------------------------------------------------------------
// Shared response type definitions
// Exported so tides-button.ts and weather-button.ts can import them from
// this one location rather than each defining their own copies (DRY).
// ---------------------------------------------------------------------------

// A single tide extreme event from /v2/tide/extremes/point.
export type TideEvent = {
  height: number;
  time:   string;          // ISO 8601 UTC
  type:   'high' | 'low';
};

// The meta block returned by /v2/tide/extremes/point.
export type TidesMeta = {
  cost:         number;
  dailyQuota:   number;
  datum:        string;
  end:          string;    // 'YYYY-MM-DD HH:MM'
  lat:          number;
  lng:          number;
  offset:       number;
  requestCount: number;
  start:        string;    // 'YYYY-MM-DD HH:MM'
  station: {
    distance: number;
    lat:      number;
    lng:      number;
    name:     string;
    source:   string;
  };
};

// The full shape of a /v2/tide/extremes/point response.
export type TidesResponse = { data: TideEvent[]; meta: TidesMeta };

// A single hour entry from /v2/weather/point — all source sub-keys are
// optional because not every model provides every parameter for every hour.
export type WeatherHour = {
  time:               string;  // ISO 8601 UTC
  gust?:             { ecmwf?: number; noaa?: number; sg?: number };
  pressure?:         { ecmwf?: number; 'ecmwf:aifs'?: number; noaa?: number; sg?: number };
  waterTemperature?: { meto?: number;  noaa?: number; sg?: number };
  waveHeight?:       { dwd?: number;   ecmwf?: number; meteo?: number; noaa?: number; sg?: number };
  windDirection?:    { dwd?: number;   ecmwf?: number; 'ecmwf:aifs'?: number; noaa?: number; sg?: number };
  windSpeed?:        { dwd?: number;   ecmwf?: number; 'ecmwf:aifs'?: number; noaa?: number; sg?: number };
};

// A single hour entry from /v2/solar/point.
export type SolarHour = {
  time:      string;           // ISO 8601 UTC
  uvIndex?: { noaa?: number; sg?: number };
};

// The meta object returned by weather and solar endpoints (identical shape).
export type WeatherMeta = {
  cost:         number;
  dailyQuota:   number;
  end:          string;        // 'YYYY-MM-DD HH:MM'
  lat:          number;
  lng:          number;
  params:       string[];
  requestCount: number;
  start:        string;        // 'YYYY-MM-DD HH:MM'
};

// The solar meta is the same shape as weather meta.
export type SolarMeta = WeatherMeta;

// Full response shapes for weather and solar endpoints.
export type WeatherResponse = { hours: WeatherHour[]; meta: WeatherMeta };
export type SolarResponse   = { hours: SolarHour[];   meta: SolarMeta   };

// ---------------------------------------------------------------------------
// Shared timestamp helper — exported so both button files can import it
// rather than each defining their own copy (DRY).
//
// Converts a Stormglass 'YYYY-MM-DD HH:MM' string to Unix epoch seconds.
// The format lacks the ISO 8601 'T' separator and a timezone designator.
// Without explicit UTC anchoring, new Date() would interpret the string as
// local time — producing different results depending on the runtime timezone.
// Replacing the space with 'T' and appending 'Z' forces UTC parsing.
// ---------------------------------------------------------------------------
export const toUnixSeconds = (stormglassTimestamp: string): number =>
  Math.floor(new Date(stormglassTimestamp.replace(' ', 'T') + 'Z').getTime() / 1000);

// ---------------------------------------------------------------------------
// Mock data — cast the raw JSON imports to the typed shapes above.
// JSON imports arrive as wide TypeScript types; we narrow them here once so
// callers never need to cast themselves.
// ---------------------------------------------------------------------------
const MOCK_TIDES:   TidesResponse   = tidesJson   as TidesResponse;
const MOCK_WEATHER: WeatherResponse = weatherJson as WeatherResponse;
const MOCK_SOLAR:   SolarResponse   = solarJson   as SolarResponse;

// ---------------------------------------------------------------------------
// Endpoint → mock data mapping
//
// callAPI() inspects the URL path to decide which mock file to return when
// USE_MOCK_DATA is true.  The three Stormglass path segments are:
//   /v2/tide/extremes/point
//   /v2/weather/point
//   /v2/solar/point
//
// We use a simple substring check on the URL — robust enough for this small
// fixed set of endpoints without introducing a complex routing layer.
// ---------------------------------------------------------------------------
type MockKey = 'tides' | 'weather' | 'solar';

// Maps a URL path keyword to the pre-loaded mock object.
const MOCK_MAP: Record<MockKey, TidesResponse | WeatherResponse | SolarResponse> = {
  tides:   MOCK_TIDES,
  weather: MOCK_WEATHER,
  solar:   MOCK_SOLAR,
};

// Derive which mock file to use from the URL string.
// Returns null if no known path segment is found.
const resolveMockKey = (url: string): MockKey | null => {
  if (url.includes('/tide/'))    return 'tides';
  if (url.includes('/weather/')) return 'weather';
  if (url.includes('/solar/'))   return 'solar';
  return null;
};

// ---------------------------------------------------------------------------
// callAPI<T>()
//
// The single exported fetch function.  Callers pass the complete URL
// (including endpoint path and query-string); this function handles
// authentication, mock toggling, and error propagation.
//
// Generic parameter T lets callers declare the expected response shape so
// the return type is typed at the call site, e.g.:
//   const data = await callAPI<TidesResponse>(url);
//
// When USE_MOCK_DATA is true the network call is skipped entirely and the
// matching pre-loaded JSON object is returned, cast to T.
// ---------------------------------------------------------------------------
export async function callAPI<T>(url: string): Promise<T> {

  // --- Mock mode -----------------------------------------------------------
  if (USE_MOCK_DATA) {
    const key = resolveMockKey(url);
    if (key === null) {
      throw new Error(`callAPI: USE_MOCK_DATA is true but no mock data found for URL: ${url}`);
    }
    console.log(`callAPI [MOCK]: returning mock data for key="${key}"`);
    // Cast is safe — callers are expected to pass a URL that matches the
    // generic T they declared.  A mismatch would be a programming error.
    return MOCK_MAP[key] as T;
  }

  // --- Live mode -----------------------------------------------------------
  console.log(`callAPI [LIVE]: fetching ${url}`);
  const response = await fetch(url, {
    headers: { Authorization: API_KEY },
  });

  if (!response.ok) {
    throw new Error(`Stormglass API error: HTTP ${response.status} for ${url}`);
  }

  return response.json() as Promise<T>;
}
