import { render } from '@testing-library/react';
import Loader from './Loader';

describe('#Loader.tsx', () =>
  it('render correctly Spinner component', () => {
    const { container } = render(<Loader />);
    expect(container.firstChild).toHaveClass('loader');
  }));
