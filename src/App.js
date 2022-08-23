import React, { useState, useEffect } from 'react';
import './style.css';
import 'grapesjs/dist/css/grapes.min.css';

import { Home, Dashboard, Newsletter, NewsMgml } from './pages/index';
import { Link, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
export default function App() {
  return (
    <div>
      <Navigation />
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Build Website</Link>
        <Link to="/newsletters">Build Newsletters</Link>
        <Link to="/mgml">Build Newsletters Mobile Support</Link>
      </nav> */}
      <Routes>
        <Route path="" exact element={<Dashboard />}></Route>
        <Route path="dashboard" exact element={<Home />}></Route>
        <Route path="newsletters" exact element={<Newsletter />}></Route>
        <Route path="mgml" exact element={<NewsMgml />}></Route>
      </Routes>
    </div>
  );
}
