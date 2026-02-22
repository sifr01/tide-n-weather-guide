// src/pages/Weather.tsx
// Weather page — displays a table of combined weather + solar data from the
// DB cache and provides a button to refresh from the Stormglass API.
//
// Table design mirrors glitch_deployment_ARCHIVE/public/displayWeatherAndSolar.js:
//   • Rows grouped by date with a sticky date-header row
//   • Today's rows highlighted in light blue
//   • Columns: Time | Wind Speed | Gust | Pressure | Water Temp (METO) |
//              Water Temp (NOAA) | Wave Height | UV Index
//   • Footer row showing data sources (all NOAA except water temp METO)

import React, { useState } from 'react';
import type { WeatherSolarRow, ButtonStatus } from '../types/data';

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface WeatherPageProps {
  /** Rows from the `weather_solar` DB view — passed from App on first load
   *  so no additional DB call is needed when navigating to this page. */
  weatherSolar: WeatherSolarRow[];
  /**
   * Callback that re-fetches the weatherSolar rows from get-data and updates
   * the weatherSolar state in App.  Called after a successful weather-button
   * POST so the table updates in-place without requiring a page reload.
   */
  refetchWeatherSolar: () => Promise<void>;
}

// ---------------------------------------------------------------------------
// Date helpers (duplicated from Tides.tsx to keep pages self-contained)
// ---------------------------------------------------------------------------

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function formatUnixTime(unixSeconds: number): {
  displayDate: string;
  displayTime: string;
  dayOfWeek:   string;
  isToday:     boolean;
} {
  const date  = new Date(unixSeconds * 1000);
  const today = new Date();

  const dd   = String(date.getDate()).padStart(2, '0');
  const mm   = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  const hh   = String(date.getHours()).padStart(2, '0');
  const min  = String(date.getMinutes()).padStart(2, '0');

  const isToday =
    date.getDate()     === today.getDate()     &&
    date.getMonth()    === today.getMonth()    &&
    date.getFullYear() === today.getFullYear();

  return {
    displayDate: `${dd}/${mm}/${yyyy}`,
    displayTime: `${hh}:${min}`,
    dayOfWeek:   DAY_NAMES[date.getDay()],
    isToday,
  };
}

// ---------------------------------------------------------------------------
// Helper — display a nullable numeric string, falling back to "–"
// ---------------------------------------------------------------------------

/** Formats a nullable DB numeric string for display.
 *  Returns an em-dash ("–") when the value is null or unavailable. */
const fmt = (value: string | null, decimals = 2): string =>
  value == null ? '–' : parseFloat(value).toFixed(decimals);

// ---------------------------------------------------------------------------
// Rate-limit message helper
// Converts raw seconds into a human-readable "Xh Ym Zs" countdown string
// and constructs the full message shown to the user when a 429 is returned.
// ---------------------------------------------------------------------------
function formatRateLimitMessage(retryAfterSeconds: number, cooldownSeconds: number): string {
  const h = Math.floor(retryAfterSeconds / 3600);
  const m = Math.floor((retryAfterSeconds % 3600) / 60);
  const s = retryAfterSeconds % 60;

  // Build a compact "Xh Ym Zs" string, omitting zero-value components.
  const parts: string[] = [];
  if (h > 0) parts.push(`${h}h`);
  if (m > 0) parts.push(`${m}m`);
  if (s > 0 || parts.length === 0) parts.push(`${s}s`);
  const countdown = parts.join(' ');

  const cooldownHours = cooldownSeconds / 3600;
  return `⏳ Weather data was already fetched within the last ${cooldownHours}h. ` +
         `Next refresh available in ${countdown}.`;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const WeatherPage: React.FC<WeatherPageProps> = ({ weatherSolar, refetchWeatherSolar }) => {
  // Button state for the "Refresh Weather" API call.
  const [status,  setStatus]  = useState<ButtonStatus>('idle');
  const [message, setMessage] = useState<string | null>(null);

  // -------------------------------------------------------------------------
  // Calls the weather-button Netlify function to refresh the DB cache from
  // the Stormglass weather + solar endpoints, then immediately re-fetches the
  // updated rows from get-data via the refetchWeatherSolar callback so the
  // table updates in-place without requiring a page reload.
  // -------------------------------------------------------------------------
  const handleRefresh = async () => {
    setStatus('loading');
    setMessage(null);
    try {
      const response = await fetch('/.netlify/functions/weather-button', { method: 'POST' });
      const data = await response.json();

      // 429 — rate limit exceeded; the server tells us how long to wait.
      if (response.status === 429 && data.rateLimited) {
        setStatus('rate_limited');
        setMessage(formatRateLimitMessage(data.retryAfterSeconds, data.cooldownSeconds));
        return;
      }

      if (response.ok && data.success) {
        // Re-fetch the updated weatherSolar rows from the DB so the table
        // reflects the newly inserted data immediately.
        await refetchWeatherSolar();
        setStatus('success');
        setMessage(
          `✓ Inserted ${data.rowsInserted} weather hours` +
          (data.meta ? ` · ${data.meta.start} → ${data.meta.end}` : '')
        );
      } else {
        setStatus('error');
        setMessage(`✗ ${data.error ?? 'Unknown error'}`);
      }
    } catch (err) {
      setStatus('error');
      setMessage(`✗ ${err instanceof Error ? err.message : 'Network error'}`);
    }
  };

  // -------------------------------------------------------------------------
  // Table rendering — mirrors displayWeatherAndSolar.js grouping logic.
  // -------------------------------------------------------------------------
  const renderTable = () => {
    if (weatherSolar.length === 0) {
      return (
        <p className="no-data">
          No weather data in the database yet. Press <em>Refresh Weather</em> to fetch from the API.
        </p>
      );
    }

    let lastDate = '';

    return (
      <div className="table-wrapper">
        <table className="data-table weather-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Wind Speed m/s</th>
              <th>Gust m/s</th>
              <th>Pressure hPa</th>
              {/* Two water temperature columns — one per source — matching the
                  original table design from displayWeatherAndSolar.js */}
              <th>Water Temp ℃ (METO)</th>
              <th>Water Temp ℃ (NOAA)</th>
              <th>Wave Height m</th>
              <th>UV Index W/m²</th>
            </tr>
          </thead>
          <tbody>
            {weatherSolar.map((row) => {
              const { displayDate, displayTime, dayOfWeek, isToday } = formatUnixTime(row.time);
              const rowClass = isToday ? 'today-row' : undefined;

              const dateChanged = displayDate !== lastDate;
              if (dateChanged) lastDate = displayDate;

              return (
                <React.Fragment key={row.time}>
                  {dateChanged && (
                    <tr className="date-header-row">
                      {/* 8 columns: Time + 7 measurement columns */}
                      <td colSpan={8} className="date-header-cell">
                        {dayOfWeek}, {displayDate}
                      </td>
                    </tr>
                  )}
                  <tr className={rowClass}>
                    <td>{displayTime}</td>
                    {/* All NOAA source values, matching the original footer attributions */}
                    <td>{fmt(row.wind_speed_noaa)}</td>
                    <td>{fmt(row.gust_noaa)}</td>
                    <td>{fmt(row.pressure_noaa, 1)}</td>
                    <td>{fmt(row.water_temp_meto)}</td>
                    <td>{fmt(row.water_temp_noaa)}</td>
                    <td>{fmt(row.wave_height_noaa)}</td>
                    <td>{fmt(row.uv_index_noaa, 1)}</td>
                  </tr>
                </React.Fragment>
              );
            })}
            {/* Footer row — data source attribution per column. */}
            <tr className="footer-row">
              <td><strong>Data source:</strong></td>
              <td><strong>NOAA</strong></td>
              <td><strong>NOAA</strong></td>
              <td><strong>NOAA</strong></td>
              <td><strong>METO</strong></td>
              <td><strong>NOAA</strong></td>
              <td><strong>NOAA</strong></td>
              <td><strong>NOAA</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <main className="page weather-page">
      <div className="page-header">
        <h1>Marine Weather &amp; Solar Data</h1>

        {/* Refresh button — triggers live API calls to weather + solar endpoints. */}
        <button
          className={`refresh-btn ${status === 'loading' ? 'loading' : ''}`}
          onClick={handleRefresh}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Loading…' : 'Refresh Weather'}
        </button>
      </div>

      {message && (
        <p className={`status-message ${
          status === 'error'        ? 'error'        :
          status === 'rate_limited' ? 'rate-limited' :
          'success'
        }`}>
          {message}
        </p>
      )}

      {renderTable()}
    </main>
  );
};

export default WeatherPage;
