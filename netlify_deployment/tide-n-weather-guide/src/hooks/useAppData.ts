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
  /**
   * Re-fetches only the tides data from get-data and updates state.
   * Called by TidesPage after a successful tides-button POST so the table
   * updates in-place without a full page reload.
   */
  refetchTides: () => Promise<void>;
  /**
   * Re-fetches only the weatherSolar data from get-data and updates state.
   * Called by WeatherPage after a successful weather-button POST so the table
   * updates in-place without a full page reload.
   */
  refetchWeatherSolar: () => Promise<void>;
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useAppData(): AppData {
  const [tides,        setTides]        = useState<TideRow[]>([]);
  const [weatherSolar, setWeatherSolar] = useState<WeatherSolarRow[]>([]);
  const [loading,      setLoading]      = useState<boolean>(true);
  const [error,        setError]        = useState<string | null>(null);

  // ---------------------------------------------------------------------------
  // fetchData — called on mount to populate all state from get-data.
  // Extracted into a named async function so refetchTides() can also call it
  // (or a subset of it) without duplicating the fetch logic.
  // ---------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------
  // refetchTides — re-calls get-data and updates only the tides state.
  // Called by TidesPage after a successful tides-button POST so the table
  // refreshes in-place without a full page reload.
  // weatherSolar state is left untouched because only tides were updated.
  // ---------------------------------------------------------------------------
  const refetchTides = async (): Promise<void> => {
    try {
      const response = await fetch('/.netlify/functions/get-data');
      const json = await response.json();

      if (!response.ok) {
        // Surface but don't overwrite the main error banner — the initial
        // load was fine; this is a post-refresh failure.
        console.error('refetchTides: get-data error', json.error);
        return;
      }

      // Replace tides state with the freshly loaded rows.
      setTides(json.tides ?? []);
    } catch (err) {
      // Log but don't update the global error state — the table will simply
      // remain showing the pre-refresh data until the user tries again.
      console.error('refetchTides: network error', err);
    }
  };

  // ---------------------------------------------------------------------------
  // refetchWeatherSolar — re-calls get-data and updates only the weatherSolar
  // state.  Called by WeatherPage after a successful weather-button POST so
  // the table refreshes in-place without a full page reload.
  // tides state is left untouched because only weather/solar were updated.
  // ---------------------------------------------------------------------------
  const refetchWeatherSolar = async (): Promise<void> => {
    try {
      const response = await fetch('/.netlify/functions/get-data');
      const json = await response.json();

      if (!response.ok) {
        // Surface but don't overwrite the main error banner — the initial
        // load was fine; this is a post-refresh failure.
        console.error('refetchWeatherSolar: get-data error', json.error);
        return;
      }

      // Replace weatherSolar state with the freshly loaded rows.
      setWeatherSolar(json.weatherSolar ?? []);
    } catch (err) {
      // Log but don't update the global error state — the table will simply
      // remain showing the pre-refresh data until the user tries again.
      console.error('refetchWeatherSolar: network error', err);
    }
  };

  return { tides, weatherSolar, loading, error, refetchTides, refetchWeatherSolar };
}
