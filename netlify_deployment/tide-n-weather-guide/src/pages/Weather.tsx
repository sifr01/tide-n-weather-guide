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
// Component
// ---------------------------------------------------------------------------

const WeatherPage: React.FC<WeatherPageProps> = ({ weatherSolar }) => {
  // Button state for the "Refresh Weather" API call.
  const [status,  setStatus]  = useState<ButtonStatus>('idle');
  const [message, setMessage] = useState<string | null>(null);

  // -------------------------------------------------------------------------
  // Calls the weather-button Netlify function to refresh the DB cache from
  // the Stormglass weather + solar endpoints.
  // -------------------------------------------------------------------------
  const handleRefresh = async () => {
    setStatus('loading');
    setMessage(null);
    try {
      const response = await fetch('/.netlify/functions/weather-button', { method: 'POST' });
      const data = await response.json();
      if (response.ok && data.success) {
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
        <p className={`status-message ${status === 'error' ? 'error' : 'success'}`}>
          {message}
        </p>
      )}

      {renderTable()}
    </main>
  );
};

export default WeatherPage;
