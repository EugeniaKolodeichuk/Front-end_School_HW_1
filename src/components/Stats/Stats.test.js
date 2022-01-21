import Stats from './Stats';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe(
  '#Stats.js',
  () =>
    it('render comments and likes with default props', () => {
      render(<Stats />);

      expect(screen.getByRole('list')).toBeInTheDocument();
      expect(screen.getByText(/Comments:/i)).toHaveTextContent('0');
      expect(screen.getByText(/Likes:/i)).toHaveTextContent('0');
    }),

  it('render comments and likes with custom props', () => {
    const commentCout = 5;
    const likesCount = 6;
    render(<Stats commentCount={commentCout} diggCount={likesCount} />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(/Comments:/i)).toHaveTextContent(`${commentCout}`);
    expect(screen.getByText(/Likes:/i)).toHaveTextContent(`${likesCount}`);
  }),
);
