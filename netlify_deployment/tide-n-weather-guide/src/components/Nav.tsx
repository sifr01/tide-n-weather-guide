// src/components/Nav.tsx
// Top navigation bar with three tabs: Home, Tides, Weather.
// Uses react-router-dom's <NavLink> so the active tab is automatically
// styled via the `active` CSS class that NavLink adds.

import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav: React.FC = () => (
  <nav className="app-nav">
    {/* NavLink applies the class "active" when its `to` path matches the
        current URL — no manual active-state tracking required.
        The callback form of `className` receives an object with `isActive`
        (boolean) so we can conditionally apply the "active" style class. */}
    <NavLink to="/"        end className={({ isActive }: { isActive: boolean }) => isActive ? 'nav-link active' : 'nav-link'}>
      Home
    </NavLink>
    <NavLink to="/tides"       className={({ isActive }: { isActive: boolean }) => isActive ? 'nav-link active' : 'nav-link'}>
      Tides
    </NavLink>
    <NavLink to="/weather"     className={({ isActive }: { isActive: boolean }) => isActive ? 'nav-link active' : 'nav-link'}>
      Weather
    </NavLink>
  </nav>
);

export default Nav;
