import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Container from './Container';

describe('#Container.js', () =>
  it('render Container', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <Container />
      </Router>,
    );

    expect(container.firstChild).toHaveClass('container');
  }));
