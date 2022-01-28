import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Container from './Container';

describe('#Container.tsx', () =>
  it('render Container', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <Container children={undefined} />
      </Router>,
    );

    expect(container.firstChild).toHaveClass('container');
  }));
