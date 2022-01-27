import React from 'react';
import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

describe('#Avatar.js', () =>
  it('render avatar on feed page', () => {
    render(<Avatar />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  }));
