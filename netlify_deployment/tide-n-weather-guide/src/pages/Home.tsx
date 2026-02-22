// src/pages/Home.tsx
// Home page — explains the three problems this project solves and the
// single solution: rate-limited API calls with a DB cache.

import React from 'react';

const Home: React.FC = () => (
  <main className="page home-page">
    <h1>Tide &amp; Weather Guide</h1>
    <p className="home-subtitle">Viana do Castelo, Portugal</p>

    <section className="home-section">
      <h2>Three Problems</h2>

      {/* Problem 1 */}
      <div className="problem-card">
        <h3>🌐 Hosting a website for free</h3>
        <p>
          Running a server around the clock costs money.  This project uses{' '}
          <strong>Netlify's free tier</strong> — the React frontend is served
          as a static site and all backend logic lives in serverless functions
          that are only invoked on demand, so there is no idle server cost.
        </p>
      </div>

      {/* Problem 2 */}
      <div className="problem-card">
        <h3>📡 Making API calls for free</h3>
        <p>
          The Stormglass marine API is generous but limited — the free tier
          allows only a small number of calls per day.  Calling the API on
          every page load would exhaust the quota within hours.  Instead, API
          calls are <strong>manual and rate-limited</strong>: a button must be
          pressed to refresh the data, and the results are stored in a
          database so every subsequent visit is served from the cache at zero
          API cost.
        </p>
      </div>

      {/* Problem 3 */}
      <div className="problem-card">
        <h3>🛠️ Showcasing full-stack skills for free</h3>
        <p>
          Building and maintaining a personal portfolio site usually requires
          paying for a domain, hosting, and services.  This project demonstrates
          full-stack skills — <strong>React, TypeScript, Drizzle ORM,
          PostgreSQL, and Netlify serverless functions</strong> — entirely within
          free-tier limits, so the portfolio stays live without any running cost.
        </p>
      </div>
    </section>

    <section className="home-section">
      <h2>One Solution</h2>
      <div className="solution-card">
        <p>
          This site implements a simple <strong>cache-then-serve</strong> pattern:
        </p>
        <ol>
          <li>
            <strong>Fetch on demand</strong> — a button on the Tides or Weather
            page triggers a Netlify serverless function that calls the
            Stormglass API, staying within the free daily quota.
          </li>
          <li>
            <strong>Persist to the database</strong> — results are stored in a
            Neon PostgreSQL database (also free tier), replacing the previous
            forecast with the latest data.
          </li>
          <li>
            <strong>Serve from cache</strong> — when the page loads, a single
            DB query fetches all cached data.  Switching between the Tides and
            Weather tabs is instant because no further network requests are
            needed.
          </li>
        </ol>
      </div>
    </section>
  </main>
);

export default Home;
