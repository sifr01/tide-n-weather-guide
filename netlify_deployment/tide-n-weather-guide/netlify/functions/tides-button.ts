// Netlify serverless function — Tides button
// Triggered when the user clicks the "Tides" button in the React UI.
// Uses mock data (tides.json) instead of a live API call.
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
// Mock API response — read from the model file instead of being inlined here.
// model/tides.json mirrors the real shape of /v2/tide/extremes/point.
// Keeping mock data in a dedicated file makes it easy to update without
// touching function logic, and avoids inflating the function source.
// ---------------------------------------------------------------------------
import tidesJson from '../../model/tides.json';

// Cast the imported JSON to the narrower type the handler needs.
// 'as const' inference from JSON import widens 'type' to string, so we
// assert the expected union explicitly.
const MOCK_TIDES_RESPONSE = tidesJson as {
  data: { height: number; time: string; type: 'high' | 'low' }[];
  meta: {
    cost: number; dailyQuota: number; datum: string; end: string;
    lat: number; lng: number; offset: number; requestCount: number;
    start: string; station: { distance: number; lat: number; lng: number;
    name: string; source: string };
  };
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
    const { data, meta } = MOCK_TIDES_RESPONSE;

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
    // meta.start / meta.end arrive as 'YYYY-MM-DD HH:MM' (no T separator,
    // no timezone indicator).  Appending 'T' and 'Z' makes them valid
    // ISO 8601 UTC strings so that Date.parse() gives a reliable result.
    // The result is then converted to Unix epoch seconds (integer) to match
    // the bigint column type that request_start / request_end now use.
    const toUnixSeconds = (stormglassTimestamp: string): number =>
      Math.floor(new Date(stormglassTimestamp.replace(' ', 'T') + 'Z').getTime() / 1000);

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
