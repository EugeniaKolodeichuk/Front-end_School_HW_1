import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import TrendingFeed from './TrendingFeed';

describe('#TrendingFeed.js', () =>
  it('render TrendingFeed', () => {
    const feed = {
      video: {
        downloadAddr: 'test',
      },
      author: {
        signature: 'signature-test',
        avatarThumb: 'avatarThumb-test',
        nickname: 'nickname-test',
        uniqueId: 'id-test',
      },
      stats: {
        commentCount: 0,
        diggCount: 0,
      },
    };
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <TrendingFeed feed={feed} />
      </Router>,
    );
  }));
