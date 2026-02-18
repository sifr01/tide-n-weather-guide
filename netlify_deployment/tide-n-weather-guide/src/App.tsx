import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

type TidesStatus = 'idle' | 'loading' | 'success' | 'error';

interface TidesResult {
  rowsInserted?: number;
  meta?: { datum: string; station: string; start: string; end: string };
  error?: string;
}

function App() {
  const [tidesStatus, setTidesStatus] = useState<TidesStatus>('idle');
  const [tidesResult, setTidesResult] = useState<TidesResult | null>(null);

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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Tide &amp; Weather Guide</p>

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
      </header>
    </div>
  );
}

export default App;
