import Loader from './Loader';
import { render, screen } from '@testing-library/react';

describe('#Loader.tsx', () =>
  it('render correctly Spinner component', () => {
    const { container } = render(<Loader />);
    expect(container.firstChild).toHaveClass('loader');
  }));
