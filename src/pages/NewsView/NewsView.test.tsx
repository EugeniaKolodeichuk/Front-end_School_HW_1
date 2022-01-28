import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import NewsView from './NewsView';
import axios from 'axios';
import TrendingFeed from '../../components/TrendingFeed/TrendingFeed';

describe('#NewsView.tsx', () =>
  it('render info about user', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <NewsView />
      </Router>,
    );
  }));

export {};
