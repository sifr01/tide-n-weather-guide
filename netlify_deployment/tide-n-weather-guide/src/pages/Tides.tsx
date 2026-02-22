// src/pages/Tides.tsx
// Tides page — displays a table of tide times from the DB cache and
// provides a button to refresh the data from the Stormglass API.
//
// Table design mirrors glitch_deployment_ARCHIVE/public/displayTideTimesTable.js:
//   • Rows grouped by date with a sticky date-header row
//   • Today's rows highlighted in light blue
//   • Columns: Time | Height (m) | Type
//   • Footer row showing data sources

import React, { useState } from 'react';
import type { TideRow, ButtonStatus } from '../types/data';

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface TidesPageProps {
  /** Rows from the `tides` DB table — passed down from App so no additional
   *  DB call is needed when the user navigates to this page. */
  tides: TideRow[];
}

// ---------------------------------------------------------------------------
// Date helpers
// ---------------------------------------------------------------------------

/** Names of days of the week, indexed 0 (Sun) – 6 (Sat). */
const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/**
 * Formats a Unix epoch seconds value into two display strings:
 *   displayDate — "DD/MM/YYYY"
 *   displayTime — "HH:MM"
 *   dayOfWeek   — full day name, e.g. "Monday"
 *   isToday     — true if the date matches today's local date
 */
function formatUnixTime(unixSeconds: number): {
  displayDate: string;
  displayTime: string;
  dayOfWeek:   string;
  isToday:     boolean;
} {
  // Multiply by 1000 to convert Unix seconds → JS milliseconds.
  const date = new Date(unixSeconds * 1000);
  const today = new Date();

  const dd  = String(date.getDate()).padStart(2, '0');
  const mm  = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();

  const hh  = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');

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
// Component
// ---------------------------------------------------------------------------

const TidesPage: React.FC<TidesPageProps> = ({ tides }) => {
  // Button state for the "Refresh tides" API call.
  const [status,  setStatus]  = useState<ButtonStatus>('idle');
  const [message, setMessage] = useState<string | null>(null);

  // -------------------------------------------------------------------------
  // Calls the tides-button Netlify function to refresh the DB cache from the
  // Stormglass API.  The user must reload the page (or navigate away and
  // back) to see the updated data — consistent with the cache-then-serve
  // pattern and avoids an unexpected in-place table mutation.
  // -------------------------------------------------------------------------
  const handleRefresh = async () => {
    setStatus('loading');
    setMessage(null);
    try {
      const response = await fetch('/.netlify/functions/tides-button', { method: 'POST' });
      const data = await response.json();
      if (response.ok && data.success) {
        setStatus('success');
        // Show a summary: how many rows were inserted and which station/datum.
        setMessage(
          `✓ Inserted ${data.rowsInserted} tide events` +
          (data.meta ? ` · Station: ${data.meta.station} (${data.meta.datum})` : '')
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
  // Table rendering — groups rows by date with a spanning header row for
  // each new date, matching the glitch_deployment_ARCHIVE display logic.
  // -------------------------------------------------------------------------
  const renderTable = () => {
    if (tides.length === 0) {
      return <p className="no-data">No tide data in the database yet. Press <em>Refresh Tides</em> to fetch from the API.</p>;
    }

    // Track the last date string so we know when to insert a date-header row.
    let lastDate = '';

    return (
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Height m</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {tides.map((row) => {
              const { displayDate, displayTime, dayOfWeek, isToday } = formatUnixTime(row.time);
              const rowClass = isToday ? 'today-row' : undefined;

              // Build the optional date-header row when the date changes.
              const dateChanged = displayDate !== lastDate;
              if (dateChanged) lastDate = displayDate;

              return (
                // React requires a unique key per sibling — use the Unix
                // timestamp (PK in the DB) for tide rows and a synthetic
                // string for date-header rows.
                <React.Fragment key={row.time}>
                  {dateChanged && (
                    <tr className="date-header-row">
                      {/* colSpan spans all 3 columns so it looks like a section divider. */}
                      <td colSpan={3} className="date-header-cell">
                        {dayOfWeek}, {displayDate}
                      </td>
                    </tr>
                  )}
                  <tr className={rowClass}>
                    <td>{displayTime}</td>
                    {/* toFixed(2) mirrors the old JS implementation's display precision. */}
                    <td>{parseFloat(row.height).toFixed(2)}</td>
                    <td>{row.type}</td>
                  </tr>
                </React.Fragment>
              );
            })}
            {/* Footer row — data attribution. */}
            <tr className="footer-row">
              <td><strong>Data source:</strong></td>
              <td><strong>Viana</strong></td>
              <td><strong>SG HC</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <main className="page tides-page">
      <div className="page-header">
        <h1>Tide Times</h1>

        {/* Refresh button — triggers a live API call to repopulate the DB. */}
        <button
          className={`refresh-btn ${status === 'loading' ? 'loading' : ''}`}
          onClick={handleRefresh}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Loading…' : 'Refresh Tides'}
        </button>
      </div>

      {/* Status message shown below the button after a refresh attempt. */}
      {message && (
        <p className={`status-message ${status === 'error' ? 'error' : 'success'}`}>
          {message}
        </p>
      )}

      {renderTable()}
    </main>
  );
};

export default TidesPage;
