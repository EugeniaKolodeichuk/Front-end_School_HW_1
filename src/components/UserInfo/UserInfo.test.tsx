import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import UserInfo from './UserInfo';

describe('#UserInfo.js', () =>
  it('render info about user', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <UserInfo uniqueId={'string'} avatarMedium={'string'} nickname={'string'} signature={'string'} />
      </Router>,
    );

    expect(container.firstChild).toHaveClass('profile');
  }));
