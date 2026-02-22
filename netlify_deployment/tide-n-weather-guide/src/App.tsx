// src/App.tsx
// Root application component.
//
// Responsibilities:
//   • Fetches all DB data once on mount via the useAppData hook.
//   • Sets up the react-router-dom BrowserRouter with three routes:
//       /         → Home page
//       /tides    → Tides page (receives tides data as a prop)
//       /weather  → Weather page (receives weatherSolar data as a prop)
//   • Renders the persistent Nav bar above all routes.
//   • Shows a loading banner and error banner while data is in flight.

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useAppData } from './hooks/useAppData';
import Nav            from './components/Nav';
import Home           from './pages/Home';
import TidesPage      from './pages/Tides';
import WeatherPage    from './pages/Weather';

import './App.css';

function App() {
  // Fetch tides + weatherSolar once on mount; pass the results down as props
  // so child pages never need to make their own DB calls.
  const { tides, weatherSolar, loading, error, refetchTides } = useAppData();

  return (
    <BrowserRouter>
      {/* Nav renders outside <Routes> so it is always visible on every page. */}
      <Nav />

      {/* Global loading / error banners — shown above page content. */}
      {loading && (
        <div className="status-banner loading-banner" role="status">
          Loading data…
        </div>
      )}
      {error && (
        <div className="status-banner error-banner" role="alert">
          Failed to load data: {error}
        </div>
      )}

      {/* Page content — React Router renders only the matching route. */}
      <Routes>
        <Route path="/"        element={<Home />} />
        {/* Tides and Weather receive pre-loaded data via props — no additional
            fetch is triggered when the user switches between tabs. */}
        <Route path="/tides"   element={<TidesPage   tides={tides}  refetchTides={refetchTides}  />} />
        <Route path="/weather" element={<WeatherPage  weatherSolar={weatherSolar} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
