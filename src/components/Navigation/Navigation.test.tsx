import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Navigation from './Navigation';

describe('#Navigation.tsx', () =>
  it('render Navigation', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <Navigation />
      </Router>,
    );

    expect(container.firstChild).toHaveClass('navigation');
  }));
