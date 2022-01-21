import Loader from '.././Loader/Loader';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('#Loader.js', () =>
  it('render correctly Spinner component', () => {
    const { container } = render(<Loader />);
    expect(container.firstChild).toHaveClass('loader');
  }));
