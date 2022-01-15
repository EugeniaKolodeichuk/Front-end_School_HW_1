import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileView from './ProfileView';
/* import MatchMediaMock from 'jest-matchmedia-mock';

new MatchMediaMock(); */

describe('ProfileView', () => {
  it('renders title of app', () => {
    render(<ProfileView />);

    expect(screen.getByText(/Other posts created by/i)).toBeInTheDocument();
    /* screen.getByRole(''); */
  });
});
