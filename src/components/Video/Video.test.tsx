import Video from './Video';
import { render, screen } from '@testing-library/react';

describe('#Video.tsx', () =>
  it('render video', () => {
    const videoUrl = 'testUrl';
    render(<Video downloadAddr={videoUrl} />);

    expect(screen.queryByTestId('video')).toBeInTheDocument();
  }));
