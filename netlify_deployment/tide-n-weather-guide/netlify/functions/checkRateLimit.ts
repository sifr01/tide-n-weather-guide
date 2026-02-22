// checkRateLimit.ts
// Shared rate-limit helper for tides-button.ts and weather-button.ts.
//
// Queries the `metadata` table for the most recent fetched_at timestamp for
// a given source, then decides whether enough time has elapsed since the last
// API call.  Mirrors the logic in glitch_deployment_ARCHIVE/server/checkDays.js
// but uses the Drizzle ORM and operates on seconds rather than days.
//
// Usage (in a button function):
//   const check = await checkRateLimit(db, 'tides', TIDES_COOLDOWN_SECONDS);
//   if (!check.allowed) {
//     return { statusCode: 429, body: JSON.stringify({ ... check ... }) };
//   }

import { drizzle } from 'drizzle-orm/neon-http';
import { sql }     from 'drizzle-orm';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

// The source values that can appear in the metadata.source column.
// 'solar' is never used as the rate-limit key because weather and solar are
// always fetched together — weather-button.ts checks against 'weather' only.
export type RateLimitSource = 'tides' | 'weather';

// The object returned by checkRateLimit().
export type RateLimitResult =
  | { allowed: true }
  | {
      allowed:            false;
      // Wall-clock Unix seconds of the last successful API call.
      lastFetchedAt:      number;
      // How many seconds must elapse before the next call is permitted.
      cooldownSeconds:    number;
      // How many seconds remain until the cooldown expires.
      retryAfterSeconds:  number;
    };

// ---------------------------------------------------------------------------
// checkRateLimit()
//
// Parameters:
//   db               — a Drizzle ORM instance already connected to the DB
//   source           — which endpoint to check ('tides' | 'weather')
//   cooldownSeconds  — minimum elapsed seconds between calls
//                        tides:   24 * 60 * 60  (once per day)
//                        weather:  6 * 60 * 60  (once every 6 hours)
//
// Returns RateLimitResult:
//   { allowed: true }  — the API call may proceed
//   { allowed: false, retryAfterSeconds, ... }  — blocked; too soon
//
// When the metadata table has no rows for the given source (i.e. first ever
// call), the function always returns { allowed: true }.
// ---------------------------------------------------------------------------
export async function checkRateLimit(
  // The Drizzle NeonHttp db instance — passed in so this helper does not
  // create its own DB connection, keeping connection counts low.
  db:              ReturnType<typeof drizzle>,
  source:          RateLimitSource,
  cooldownSeconds: number,
): Promise<RateLimitResult> {

  // Query the most recent fetched_at value for this source.
  // MAX() returns NULL when there are no matching rows (first-ever call).
  const rows = await db.execute(
    sql`SELECT MAX(fetched_at) AS last_fetched FROM metadata WHERE source = ${source}`
  );

  // Drizzle's execute() returns { rows: Array<Record<string, unknown>> }.
  // We cast carefully to avoid any implicit assumptions about the shape.
  const lastFetched = (rows.rows[0] as Record<string, unknown>)?.last_fetched;

  // No previous call recorded — always allow.
  if (lastFetched == null) {
    return { allowed: true };
  }

  // lastFetched arrives as a string from the Neon driver (pg numeric types
  // are returned as strings to avoid JS precision loss).
  const lastFetchedAt     = Number(lastFetched);
  const nowSeconds        = Math.floor(Date.now() / 1000);
  const elapsedSeconds    = nowSeconds - lastFetchedAt;
  const retryAfterSeconds = cooldownSeconds - elapsedSeconds;

  if (retryAfterSeconds <= 0) {
    // Cooldown has fully elapsed — allow the call.
    return { allowed: true };
  }

  // Still within the cooldown window — block the call and tell the caller
  // exactly how many seconds remain so the UI can display a countdown.
  return {
    allowed:           false,
    lastFetchedAt,
    cooldownSeconds,
    retryAfterSeconds: Math.ceil(retryAfterSeconds),
  };
}
