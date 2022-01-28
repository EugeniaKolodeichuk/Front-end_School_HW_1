import React from 'react';
import { render, screen } from '@testing-library/react';
import UserAvatar from './UserAvatar';

describe('#UserAvatar.tsx', () =>
  it('render user avatar', () => {
    render(
      <UserAvatar
        nickname={'string'}
        avatarMedium={'string'}
        signature={'string'}
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  }));
