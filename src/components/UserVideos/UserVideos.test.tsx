import React, { FC, ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { IUserVideos } from '../../types/userTypes';
import UserVideos from './UserVideos';

describe('#UserVideos.js', () =>
  it('render users info', () => {
    const user: IUserVideos['user'] = {
      video: {
        id: 123,
        originCover: 'test',
      },
      desc: 'test',
      stats: {
        commentCount: 0,
        diggCount: 0,
        playCount: 0,
      },
    };
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <UserVideos user={user} />
      </Router>,
    );
  }));
