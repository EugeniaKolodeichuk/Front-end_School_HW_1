import { render, screen } from '@testing-library/react';
import Video from './Video';

describe('#Video.tsx', () =>
  it('render video', () => {
    const videoUrl = 'testUrl';
    render(<Video downloadAddr={videoUrl} />);

    expect(screen.queryByTestId('video')).toBeInTheDocument();
  }));
