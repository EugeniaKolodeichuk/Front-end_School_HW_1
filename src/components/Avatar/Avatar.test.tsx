import React from 'react';
import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

describe('#Avatar.js', () =>
  it('render avatar on feed page', () => {
    render(<Avatar avatarThumb={'string'} nickname={'string'} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  }));
