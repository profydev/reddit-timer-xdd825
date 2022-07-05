import * as React from 'react';
import { render } from 'react-dom';
// eslint-disable-next-line import/no-cycle
import App from './App';

// eslint-disable-next-line react/jsx-filename-extension
const root = document.getElementById('root');

render(
  <App />,
  root,
);
