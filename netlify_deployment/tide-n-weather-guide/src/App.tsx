import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Status union for any button that triggers an async Netlify function call.
type ButtonStatus = 'idle' | 'loading' | 'success' | 'error';

// Shape of the JSON body returned by the tides-button function.
interface TidesResult {
  rowsInserted?: number;
  meta?: { datum: string; station: string; start: string; end: string };
  error?: string;
}

// Shape of the JSON body returned by the weather-button function.
interface WeatherResult {
  rowsInserted?: number;
  meta?: { start: string; end: string };
  error?: string;
}

function App() {
  // --- Tides button state ---------------------------------------------------
  const [tidesStatus, setTidesStatus] = useState<ButtonStatus>('idle');
  const [tidesResult, setTidesResult] = useState<TidesResult | null>(null);

  // --- Weather button state -------------------------------------------------
  const [weatherStatus, setWeatherStatus] = useState<ButtonStatus>('idle');
  const [weatherResult, setWeatherResult] = useState<WeatherResult | null>(null);

  // -------------------------------------------------------------------------
  // Calls the tides-button Netlify function and updates tides state.
  // -------------------------------------------------------------------------
  const handleTidesClick = async () => {
    setTidesStatus('loading');
    setTidesResult(null);
    try {
      const response = await fetch('/.netlify/functions/tides-button', {
        method: 'POST',
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setTidesStatus('success');
        setTidesResult(data);
      } else {
        setTidesStatus('error');
        setTidesResult({ error: data.error ?? 'Unknown error' });
      }
    } catch (err) {
      setTidesStatus('error');
      setTidesResult({ error: err instanceof Error ? err.message : 'Network error' });
    }
  };

  // -------------------------------------------------------------------------
  // Calls the weather-button Netlify function and updates weather state.
  // Merges weather + solar mock data server-side; inserts into `weather` table.
  // -------------------------------------------------------------------------
  const handleWeatherClick = async () => {
    setWeatherStatus('loading');
    setWeatherResult(null);
    try {
      const response = await fetch('/.netlify/functions/weather-button', {
        method: 'POST',
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setWeatherStatus('success');
        setWeatherResult(data);
      } else {
        setWeatherStatus('error');
        setWeatherResult({ error: data.error ?? 'Unknown error' });
      }
    } catch (err) {
      setWeatherStatus('error');
      setWeatherResult({ error: err instanceof Error ? err.message : 'Network error' });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Tide &amp; Weather Guide</p>

        {/* ---- Tides button ---- */}
        <button
          onClick={handleTidesClick}
          disabled={tidesStatus === 'loading'}
          style={{
            marginTop: '1.5rem',
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            borderRadius: '6px',
            border: 'none',
            cursor: tidesStatus === 'loading' ? 'wait' : 'pointer',
            backgroundColor: '#61dafb',
            color: '#282c34',
          }}
        >
          {tidesStatus === 'loading' ? 'Loading…' : 'Tides'}
        </button>

        {tidesStatus === 'success' && tidesResult && (
          <p style={{ color: '#4caf50', marginTop: '1rem' }}>
            ✓ Inserted {tidesResult.rowsInserted} tide events
            {tidesResult.meta && (
              <> · Station: {tidesResult.meta.station} ({tidesResult.meta.datum})</>
            )}
          </p>
        )}

        {tidesStatus === 'error' && tidesResult && (
          <p style={{ color: '#f44336', marginTop: '1rem' }}>
            ✗ {tidesResult.error}
          </p>
        )}

        {/* ---- Weather button ---- */}
        <button
          onClick={handleWeatherClick}
          disabled={weatherStatus === 'loading'}
          style={{
            marginTop: '1rem',
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            borderRadius: '6px',
            border: 'none',
            cursor: weatherStatus === 'loading' ? 'wait' : 'pointer',
            backgroundColor: '#f0a500',
            color: '#282c34',
          }}
        >
          {weatherStatus === 'loading' ? 'Loading…' : 'Weather'}
        </button>

        {weatherStatus === 'success' && weatherResult && (
          <p style={{ color: '#4caf50', marginTop: '1rem' }}>
            ✓ Inserted {weatherResult.rowsInserted} weather hours
            {weatherResult.meta && (
              <> · {weatherResult.meta.start} → {weatherResult.meta.end}</>
            )}
          </p>
        )}

        {weatherStatus === 'error' && weatherResult && (
          <p style={{ color: '#f44336', marginTop: '1rem' }}>
            ✗ {weatherResult.error}
          </p>
        )}
      </header>
    </div>
  );
}

export default App;
