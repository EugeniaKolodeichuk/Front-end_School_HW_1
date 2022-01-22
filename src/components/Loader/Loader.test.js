import Loader from '.././Loader/Loader';
import { render, screen } from '@testing-library/react';

describe('#Loader.js', () =>
  it('render correctly Spinner component', () => {
    const { container } = render(<Loader />);
    expect(container.firstChild).toHaveClass('loader');
  }));
