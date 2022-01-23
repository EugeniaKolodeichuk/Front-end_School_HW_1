import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NewsView from './NewsView';
import axios from 'axios';

jest.mock('axios');

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.append(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
describe('#NewsView.js', () => {
  it('render news page', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <NewsView />
      </Router>,
      container,
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
});
