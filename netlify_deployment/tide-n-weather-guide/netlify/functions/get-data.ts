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

import { neon }    from '@neondatabase/serverless';
import { drizzle }  from 'drizzle-orm/neon-http';
import { sql }      from 'drizzle-orm';
import { tides }    from '../../src/db/schema';
import type { WeatherSolarRow } from '../../src/types/data';

// ---------------------------------------------------------------------------
// DB client — DATABASE_URL is injected by Netlify at runtime.
//
// Note: we deliberately do NOT use db.select().from(weatherSolarView) here.
// weatherSolarView is a pgView whose UV columns (uv_index_noaa, uv_index_sg)
// are defined via cross-table references to the `solar` table inside the
// view's query builder.  When Drizzle generates the SELECT column list for
// the view itself, those references have no valid column name in the view's
// own scope and emit "undefined" in the SQL.
//
// The safe workaround is a raw sql`SELECT * FROM weather_solar` query, which
// tells PostgreSQL to return every column defined in the view without Drizzle
// needing to enumerate them.
// ---------------------------------------------------------------------------
const sqlClient = neon(process.env.DATABASE_URL!);
const db = drizzle(sqlClient);

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------
export const handler: Handler = async () => {
  try {
    // Query tides table and weather_solar view in parallel to minimise latency.
    const [tidesRows, weatherSolarResult] = await Promise.all([
      // Tides: use Drizzle query builder — the tides table has no cross-table
      // column references so column resolution works correctly.
      db.select().from(tides).orderBy(tides.time),

      // weather_solar: use a raw SQL query instead of db.select().from(view).
      // Drizzle cannot enumerate the view's UV columns (they are defined via
      // cross-table references to `solar`) so it emits "undefined" in the
      // SELECT list.  SELECT * lets PostgreSQL return every view column
      // directly without Drizzle needing to name them individually.
      db.execute(sql`SELECT * FROM weather_solar ORDER BY time ASC`),
    ]);

    // db.execute() returns a Drizzle NeonHttpQueryResult whose rows property
    // is typed as Record<string, unknown>[] — too wide for direct assignment.
    // The double cast (via unknown) tells TypeScript we know the shape matches
    // WeatherSolarRow because it mirrors the view's column list exactly.
    const weatherSolarRows = weatherSolarResult.rows as unknown as WeatherSolarRow[];

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
