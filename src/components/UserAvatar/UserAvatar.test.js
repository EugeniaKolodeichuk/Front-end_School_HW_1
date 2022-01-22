import React from 'react';
import { render, screen } from '@testing-library/react';
import UserAvatar from './UserAvatar';

describe('#UserAvatar.js', () =>
  it('render user avatar', () => {
    render(<UserAvatar />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  }));

/* it('render comments and likes with custom props', () => {
    const commentCout = 5;
    const likesCount = 6;
    render(<Stats commentCount={commentCout} diggCount={likesCount} />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(/comments:/i)).toHaveTextContent(`${commentCout}`);
    expect(screen.getByText(/likes:/i)).toHaveTextContent(`${likesCount}`);
  }), */
