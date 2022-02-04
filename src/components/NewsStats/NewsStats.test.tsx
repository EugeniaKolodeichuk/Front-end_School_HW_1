/* eslint-disable jest/valid-describe */
import { render, screen } from '@testing-library/react';
import Stats from './NewsStats';

describe('#Stats.tsx', () => {
  it('render comments and likes with default props', () => {
    render(<Stats commentCount={0} diggCount={0} />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(/comments:/i)).toHaveTextContent('0');
    expect(screen.getByText(/likes:/i)).toHaveTextContent('0');
  });

  it('render comments and likes with custom props', () => {
    const commentCout = 5;
    const likesCount = 6;
    render(<Stats commentCount={commentCout} diggCount={likesCount} />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(/comments:/i)).toHaveTextContent(`${commentCout}`);
    expect(screen.getByText(/likes:/i)).toHaveTextContent(`${likesCount}`);
  });
});
