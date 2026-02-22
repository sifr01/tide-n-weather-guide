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

    {/* Footer: link to the GitHub repository with an inline SVG icon. */}
    <footer className="home-footer" style={{ marginTop: '2rem' }}>
      <a
        href="https://github.com/sifr01/tide-n-weather-guide/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View source on GitHub"
        title="View source on GitHub"
        className="github-link"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
      >
        {/* Inline GitHub mark (keeps no extra asset dependency). */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.93 3.18 9.11 7.59 10.59.56.1.76-.24.76-.53 0-.26-.01-1.12-.02-2.02-3.09.67-3.74-1.49-3.74-1.49-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.17 1.73 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.74.39-1.23.71-1.51-2.47-.28-5.07-1.24-5.07-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.4.11-2.92 0 0 .95-.31 3.12 1.16.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.17-1.47 3.12-1.16 3.12-1.16.61 1.52.23 2.64.11 2.92.72.78 1.16 1.78 1.16 3 0 4.29-2.61 5.24-5.09 5.52.4.35.76 1.05.76 2.12 0 1.53-.01 2.77-.01 3.15 0 .29.2.64.77.53 4.41-1.48 7.58-5.66 7.58-10.59C23.25 5.48 18.27.5 12 .5z" />
        </svg>
        <span>tide-n-weather-guide</span>
      </a>
    </footer>
  </main>
);

export default Home;
