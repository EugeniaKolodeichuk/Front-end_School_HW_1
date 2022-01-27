import React from 'react';
import { render, screen } from '@testing-library/react';
import UserAvatar from './UserAvatar';

describe('#UserAvatar.js', () =>
  it('render user avatar', () => {
    render(<UserAvatar />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  }));
