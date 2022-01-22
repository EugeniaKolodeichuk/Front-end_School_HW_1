import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import ProfileView from './pages/ProfileView/ProfileView';
import NewsView from './pages/NewsView/NewsView';

test('render App', () => {
  render(<App />);
  screen.debug();
});

/* describe('React Router', () => {
  it('should render the trends page', () => {
    const history = createMemoryHistory();
    const { container, getByTestId } = render(
      <Router history={history}>
        <RouterComponent />
      </Router>,
    );
    const navbar = getByTestId('navbar');
    const link = getByTestId('link');
    expect(container.innerHTML).toMatch('Trends');
    expect(navbar).toContainElement(link);
  });
}); */

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

describe('ProfileView', () => {
  test('render ProfileView', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <ProfileView />
      </Router>,
      container,
    );
    expect(container).toMatchSnapshot();
  });

  test('check for a home link', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <ProfileView />
      </Router>,
    );

    expect(screen.getByText(/other posts created by/i)).toBeInTheDocument();
  });
});

describe('NewsView', () => {
  test('render NewsView', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <NewsView />
      </Router>,
      container,
    );
    expect(container).toMatchSnapshot();
  });

  test('check for a home link', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <NewsView />
      </Router>,
    );

    /* expect(screen.getByText(/Trends/i)).toBeInTheDocument(); */
  });
});
