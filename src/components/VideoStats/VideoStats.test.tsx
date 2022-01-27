import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoStats from './VideoStats';

describe('#VideoStats.js', () => {
  it('render comments and likes with default props', () => {
    render(<VideoStats playCount={0} diggCount={0} commentCount={0} />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(/comments/i)).toHaveTextContent('0');
    expect(screen.getByText(/likes/i)).toHaveTextContent('0');
    expect(screen.getByText(/views/i)).toHaveTextContent('0');
  }),
    it('render comments and likes with custom props', () => {
      const commentCout = 5;
      const likesCount = 6;
      const viewsCount = 7;
      render(
        <VideoStats
          commentCount={commentCout}
          diggCount={likesCount}
          playCount={viewsCount}
        />,
      );

      expect(screen.getByRole('list')).toBeInTheDocument();
      expect(screen.getByText(/comments/i)).toHaveTextContent(`${commentCout}`);
      expect(screen.getByText(/likes/i)).toHaveTextContent(`${likesCount}`);
      expect(screen.getByText(/views/i)).toHaveTextContent(`${viewsCount}`);
    });
});
