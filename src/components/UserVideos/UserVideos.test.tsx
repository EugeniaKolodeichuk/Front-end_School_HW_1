import React, { FC, ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { IUserVideos } from '../../types/userTypes';
import UserVideos from './UserVideos';

/* let container: { a: string } | null = null

interface Props {
  id: number
}

type ID = number
type Props2 = {
  children: ReactNode
}
type FunctConp = (a: Props2) => ReactElement

const Header: FC = ({ children }) => <p>{children}</p>;

function Footer(props: Props2): ReactElement | string {
  if (!props.children) {
    return "sdfhsl"
  }
  return <p>{ props.children}</p>
}


<Header><p>Tesse</p></Header> */

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
