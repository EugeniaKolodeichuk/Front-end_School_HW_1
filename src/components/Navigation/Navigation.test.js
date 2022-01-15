import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';
import App from '../../App';

test('render App', () => {
  render(<App />);
  screen.debug();
});

/* describe('Navigation', () => {
  it('renders title of app', () => {
    render(<Navigation />);
    /* screen.debug(); */
/* screen.getByText('Trends'); */
/*  screen.getByRole(''); */
/*  });
}); */

/* describe('Navigation', () => {
  it('renders title of app', () => {
    render(<Navigation />);

    expect(screen.getByText('Trends')).toBeInTheDocument();
  });
}); */
