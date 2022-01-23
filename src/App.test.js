import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import ProfileView from './pages/ProfileView/ProfileView';
import NewsView from './pages/NewsView/NewsView';

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
