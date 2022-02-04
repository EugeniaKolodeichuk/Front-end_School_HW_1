import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import ProfileView from './ProfileView';

describe('#ProfileView.tsx', () =>
  it('render info about user', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <ProfileView />
      </Router>,
    );
  }));
