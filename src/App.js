import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalFonts from './fonts/fonts';
// eslint-disable-next-line import/no-cycle
import Home from './index';
import Search from './Search';

function App() {
  return (
    <div>
      <GlobalFonts />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      App Placeholder
    </div>
  );
}

export default App;
