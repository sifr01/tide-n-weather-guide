// Netlify serverless function — Tides button
// Triggered when the user clicks the "Tides" button in the React UI.
// Calls the Stormglass /v2/tide/extremes/point endpoint via the shared
// APIcall module.  Whether a real network call or mock JSON is used is
// controlled by the USE_MOCK_DATA flag in APIcall.ts.
//
// On each invocation:
//   1. TRUNCATE the `tides` table   (stale forecasts are replaced entirely)
//   2. Bulk-INSERT all tide events  (ISO 8601 time → Unix epoch seconds)
//   3. Append one row to `metadata` (append-only audit log)

// Minimal inline type for a Netlify serverless handler response/event.
// This avoids a hard dependency on @netlify/functions at type-check time
// while remaining fully compatible with the real Netlify runtime.
// The object that every Netlify function must return to the caller.
// • statusCode — HTTP status code sent back to the browser (e.g. 200, 500)
// • headers    — optional HTTP response headers; the '?' makes it optional
//                Record<string, string> means an object whose keys and values
//                are both plain strings, e.g. { 'Content-Type': 'application/json' }
// • body       — the response body as a plain string (we JSON.stringify into it)
type HandlerResponse = {
  statusCode: number;
  headers?: Record<string, string>;
  body: string;
};

// The incoming HTTP request object supplied by Netlify at invocation time.
// Record<string, unknown> means an object with string keys and values of any
// type — a safe, loose shape used here because we do not need to read any
// request fields in this function.
type HandlerEvent = Record<string, unknown>;

// Netlify also passes a context object containing metadata about the execution
// environment (identity, deployment info, etc.).  Again typed loosely because
// this function does not use any context fields.
type HandlerContext = Record<string, unknown>;

// The function signature Netlify expects for every serverless handler.
// It receives the event and context objects described above and must return
// a Promise that resolves to a HandlerResponse.
type Handler = (event: HandlerEvent, context: HandlerContext) => Promise<HandlerResponse>;

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { sql as drizzleSql } from 'drizzle-orm';
import { tides, metadata } from '../../src/db/schema';

// ---------------------------------------------------------------------------
// Shared API module — owns the fetch logic, API key, GPS constants,
// USE_MOCK_DATA flag, and all response type definitions.
// ---------------------------------------------------------------------------
import { callAPI, STORMGLASS_BASE, LAT, LNG, TidesResponse, toUnixSeconds } from './APIcall';

// ---------------------------------------------------------------------------
// Tides endpoint URL
// /v2/tide/extremes/point does not take a &params= query-string; it returns
// all extreme events (highs and lows) for the given co-ordinates and window.
// The start/end timestamps would be added here in production; omitted in the
// mock path because callAPI() ignores the query-string in mock mode.
// ---------------------------------------------------------------------------
const TIDES_URL = `${STORMGLASS_BASE}/tide/extremes/point?lat=${LAT}&lng=${LNG}`;

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
    // callAPI resolves to mock JSON or a live Stormglass response depending
    // on the USE_MOCK_DATA flag inside APIcall.ts.
    const { data, meta } = await callAPI<TidesResponse>(TIDES_URL);

    // --- 1. Flush stale tides -----------------------------------------------
    await db.execute(drizzleSql`TRUNCATE TABLE tides`);

    // --- 2. Map JSON → DB rows and bulk-insert ------------------------------
    // data[i].time is ISO 8601; convert to Unix epoch seconds (bigint column).
    const tideRows = data.map((event) => ({
      time:   Math.floor(new Date(event.time).getTime() / 1000),
      height: event.height.toFixed(4),   // numeric(7,4) — pass as string
      type:   event.type,
    }));

    await db.insert(tides).values(tideRows).onConflictDoNothing();

    // --- 3. Append metadata audit row --------------------------------------
    // meta.start / meta.end arrive as 'YYYY-MM-DD HH:MM' — toUnixSeconds()
    // (imported from APIcall.ts) converts them to Unix epoch seconds for the
    // bigint columns.
    await db.insert(metadata).values({
      source:        'tides',
      cost:          String(meta.cost),
      request_start: toUnixSeconds(meta.start),
      daily_quota:   String(meta.dailyQuota),
      datum:         meta.datum,
      request_end:   toUnixSeconds(meta.end),
      offset:        String(meta.offset),
      request_count: String(meta.requestCount),
      station_lat:   String(meta.station.lat),
      station_lon:   String(meta.station.lng),
      station_name:  meta.station.name,
      station_source: meta.station.source,
      // parameters is null for the tides endpoint (no query-string params)
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success:      true,
        rowsInserted: tideRows.length,
        meta: {
          datum:        meta.datum,
          station:      meta.station.name,
          start:        meta.start,
          end:          meta.end,
        },
      }),
    };
  } catch (error) {
    console.error('Tides function error:', error);

    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: false,
        error:   error instanceof Error ? error.message : 'Failed to populate tides table',
      }),
    };
  }
};
