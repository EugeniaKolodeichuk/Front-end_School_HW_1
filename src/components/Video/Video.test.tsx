import Video from './Video';
import { render, screen } from '@testing-library/react';

describe('#Video.js', () =>
  it('render video', () => {
    const videoUrl = 'testUrl';
    render(<Video downloadAddr={videoUrl} />);

    expect(screen.queryByTestId('video')).toBeInTheDocument();
  }));
