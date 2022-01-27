/* import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import NewsView from './NewsView';
import axios from 'axios';
import TrendingFeed from '../../components/TrendingFeed/TrendingFeed';

jest.mock('axios');
jest.mock('../../components/TrendingFeed/TrendingFeed', () => {
  return {
    __esmodule: true,
    default: () => {
      return <p>Mocked component</p>;
    },
  };
});

let container: HTMLDivElement | null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.append(container);
});

afterEach(() => {
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
});
describe('#NewsView.js', () => {
  it('render news page', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <NewsView />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should have the correct content', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: 'result-test' }),
    );
    render(<NewsView />);
        screen.debug();
  });
}); */

export {};
