import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
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
