import Video from './Video';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe(
  '#Video.js',
  () =>
    it('render video', () => {
      const videoUrl = 'testUrl';
      render(<Video playAddress={videoUrl} />);

      expect(screen.queryByTestId('video')).toBeInTheDocument();
    }),

  it('render loader when video url is undefined', () => {
    render(<Video />);

    expect(screen.queryByTestId('video')).toBeNull();
  }),
);
