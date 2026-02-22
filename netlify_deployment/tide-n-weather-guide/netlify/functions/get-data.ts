// get-data.ts
// Netlify serverless function — serves all cached DB data to the frontend.
//
// Called once when the React app loads (GET /.netlify/functions/get-data).
// Returns the full contents of the `tides` table and the `weather_solar`
// view so the client can populate both tables without further DB calls.
//
// Why a serverless function and not a direct browser DB call?
//   DATABASE_URL is a server-side secret (no REACT_APP_ prefix) and must
//   never be exposed to the browser.  All DB access is therefore gated
//   through Netlify functions.

// ---------------------------------------------------------------------------
// Minimal inline handler types — avoids a hard dependency on
// @netlify/functions at type-check time.
// ---------------------------------------------------------------------------
type HandlerResponse = {
  statusCode: number;
  headers?: Record<string, string>;
  body: string;
};

type HandlerEvent   = Record<string, unknown>;
type HandlerContext = Record<string, unknown>;
type Handler = (event: HandlerEvent, context: HandlerContext) => Promise<HandlerResponse>;

import { neon }   from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { tides, weatherSolarView } from '../../src/db/schema';

// ---------------------------------------------------------------------------
// DB client — DATABASE_URL is injected by Netlify at runtime.
// ---------------------------------------------------------------------------
const sqlClient = neon(process.env.DATABASE_URL!);
const db = drizzle(sqlClient);

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------
export const handler: Handler = async () => {
  try {
    // Query both tables in parallel to minimise latency.
    const [tidesRows, weatherSolarRows] = await Promise.all([
      // ORDER BY time ascending so the table renders chronologically.
      db.select().from(tides).orderBy(tides.time),
      db.select().from(weatherSolarView).orderBy(weatherSolarView.time),
    ]);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tides: tidesRows, weatherSolar: weatherSolarRows }),
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: message }),
    };
  }
};
