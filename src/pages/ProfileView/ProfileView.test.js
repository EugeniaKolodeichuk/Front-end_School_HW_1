import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProfileView from './ProfileView';

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

describe('#ProfileView.js', () => {
  it('render profile page', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <ProfileView />
      </Router>,
      container,
    );
    expect(container).toMatchSnapshot();
  });

  it('check for special text at the page', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <ProfileView />
      </Router>,
    );

    expect(screen.getByText(/other posts created by/i)).toBeInTheDocument();
  });
});
