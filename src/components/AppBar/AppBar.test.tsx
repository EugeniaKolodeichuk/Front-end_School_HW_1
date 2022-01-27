import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import AppBar from './AppBar';

describe('#AppBar.js', () =>
  it('render AppBar', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <AppBar />
      </Router>,
    );

    expect(container.firstChild).toHaveClass('header');
  }));
