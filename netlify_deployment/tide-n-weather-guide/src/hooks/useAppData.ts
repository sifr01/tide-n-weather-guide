// src/hooks/useAppData.ts
// Custom React hook that fetches all cached DB data once when the app loads.
//
// Data is fetched from the get-data Netlify function and stored in local
// state.  Components that need the data receive it via props from App so
// no additional DB calls are made when the user switches tabs.

import { useState, useEffect } from 'react';
import type { TideRow, WeatherSolarRow } from '../types/data';

// ---------------------------------------------------------------------------
// Return type
// ---------------------------------------------------------------------------

export interface AppData {
  /** All rows from the `tides` table, ordered chronologically. */
  tides:        TideRow[];
  /** All rows from the `weather_solar` view, ordered chronologically. */
  weatherSolar: WeatherSolarRow[];
  /** True while the initial fetch is in progress. */
  loading:      boolean;
  /** Non-null when the fetch failed. */
  error:        string | null;
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useAppData(): AppData {
  const [tides,        setTides]        = useState<TideRow[]>([]);
  const [weatherSolar, setWeatherSolar] = useState<WeatherSolarRow[]>([]);
  const [loading,      setLoading]      = useState<boolean>(true);
  const [error,        setError]        = useState<string | null>(null);

  useEffect(() => {
    // Fetch once on mount — no dependencies means this never re-fires.
    const fetchData = async () => {
      try {
        const response = await fetch('/.netlify/functions/get-data');
        const json = await response.json();

        if (!response.ok) {
          // The function returned a non-2xx status; surface the error message.
          setError(json.error ?? 'Failed to load data');
          return;
        }

        setTides(json.tides ?? []);
        setWeatherSolar(json.weatherSolar ?? []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Network error');
      } finally {
        // Always clear the loading flag, even on error.
        setLoading(false);
      }
    };

    fetchData();
  }, []); // empty array = run once on mount

  return { tides, weatherSolar, loading, error };
}
