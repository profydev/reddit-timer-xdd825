import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import App from './App';
import Search from './Search';

// eslint-disable-next-line react/jsx-filename-extension
const root = document.getElementById('root');

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  root,
);
