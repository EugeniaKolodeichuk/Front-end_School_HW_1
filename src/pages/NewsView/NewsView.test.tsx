import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { render } from '@testing-library/react';

import NewsView from './NewsView';

describe('#NewsView.tsx', () =>
  it('render info about user', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <NewsView />
      </Router>,
    );
  }));
