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
// Mock API response — mirrors the shape of /v2/tide/extremes/point
// ---------------------------------------------------------------------------
const MOCK_TIDES_RESPONSE = {
  data: [
    { height: -0.7275352857543383,  time: '2025-09-15T02:04:00+00:00', type: 'low'  },
    { height:  0.8347647600384484,  time: '2025-09-15T08:33:00+00:00', type: 'high' },
    { height: -0.774005966045554,   time: '2025-09-15T15:04:00+00:00', type: 'low'  },
    { height:  0.6277946974240407,  time: '2025-09-15T21:31:00+00:00', type: 'high' },
    { height: -0.616324436495641,   time: '2025-09-16T03:39:00+00:00', type: 'low'  },
    { height:  0.8163435704617125,  time: '2025-09-16T10:07:00+00:00', type: 'high' },
    { height: -0.8105960042301837,  time: '2025-09-16T16:46:00+00:00', type: 'low'  },
    { height:  0.6695587951149444,  time: '2025-09-16T23:06:00+00:00', type: 'high' },
    { height: -0.6901486090265632,  time: '2025-09-17T05:11:00+00:00', type: 'low'  },
    { height:  0.9498434002906099,  time: '2025-09-17T11:31:00+00:00', type: 'high' },
    { height: -0.9812439790007567,  time: '2025-09-17T18:03:00+00:00', type: 'low'  },
    { height:  0.8269241007794552,  time: '2025-09-18T00:18:00+00:00', type: 'high' },
    { height: -0.8667599193631231,  time: '2025-09-18T06:19:00+00:00', type: 'low'  },
    { height:  1.139931088117181,   time: '2025-09-18T12:34:00+00:00', type: 'high' },
    { height: -1.1674427151103943,  time: '2025-09-18T18:59:00+00:00', type: 'low'  },
    { height:  0.9983061041499872,  time: '2025-09-19T01:10:00+00:00', type: 'high' },
    { height: -1.052103766381753,   time: '2025-09-19T07:10:00+00:00', type: 'low'  },
    { height:  1.3073550795435167,  time: '2025-09-19T13:23:00+00:00', type: 'high' },
    { height: -1.3093088244751077,  time: '2025-09-19T19:42:00+00:00', type: 'low'  },
    { height:  1.1369272294625694,  time: '2025-09-20T01:52:00+00:00', type: 'high' },
    { height: -1.201264854467177,   time: '2025-09-20T07:51:00+00:00', type: 'low'  },
    { height:  1.4163733604390987,  time: '2025-09-20T14:04:00+00:00', type: 'high' },
    { height: -1.3886090928516854,  time: '2025-09-20T20:19:00+00:00', type: 'low'  },
    { height:  1.2285168307135699,  time: '2025-09-21T02:27:00+00:00', type: 'high' },
    { height: -1.2968084292673447,  time: '2025-09-21T08:27:00+00:00', type: 'low'  },
    { height:  1.457232240188158,   time: '2025-09-21T14:39:00+00:00', type: 'high' },
    { height: -1.4070632735765118,  time: '2025-09-21T20:51:00+00:00', type: 'low'  },
    { height:  1.2729285029867805,  time: '2025-09-22T02:59:00+00:00', type: 'high' },
    { height: -1.3349326646716009,  time: '2025-09-22T08:59:00+00:00', type: 'low'  },
    { height:  1.4343911521229555,  time: '2025-09-22T15:11:00+00:00', type: 'high' },
    { height: -1.3751713498722993,  time: '2025-09-22T21:20:00+00:00', type: 'low'  },
    { height:  1.2752400822847643,  time: '2025-09-23T03:28:00+00:00', type: 'high' },
    { height: -1.3187427848479136,  time: '2025-09-23T09:29:00+00:00', type: 'low'  },
    { height:  1.3590522760192003,  time: '2025-09-23T15:41:00+00:00', type: 'high' },
    { height: -1.3049221249718335,  time: '2025-09-23T21:47:00+00:00', type: 'low'  },
    { height:  1.2407749982638083,  time: '2025-09-24T03:56:00+00:00', type: 'high' },
    { height: -1.2542710501317267,  time: '2025-09-24T09:58:00+00:00', type: 'low'  },
    { height:  1.243623491891786,   time: '2025-09-24T16:09:00+00:00', type: 'high' },
    { height: -1.2052165884565351,  time: '2025-09-24T22:14:00+00:00', type: 'low'  },
  ] as { height: number; time: string; type: 'high' | 'low' }[],
  meta: {
    cost:         1,
    dailyQuota:   10,
    datum:        'MSL',
    end:          '2025-09-24 23:00',
    lat:          41.683,
    lng:          -8.833,
    offset:       0,
    requestCount: 1,
    start:        '2025-09-15 00:00',
    station: {
      distance: 0,
      lat:      41.683,
      lng:      -8.833,
      name:     'viana',
      source:   'sg',
    },
  },
} as const;

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
