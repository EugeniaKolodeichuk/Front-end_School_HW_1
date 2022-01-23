import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('#App.js', () => {
  it('render App page', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>,
    );
  });

  it('render App debug', () => {
    const history = createMemoryHistory();
    const { debug } = render(
      <React.Suspense fallback="test loading">
        <Router history={history}>
          <App />
        </Router>
      </React.Suspense>,
    );
    debug();
  });
});
