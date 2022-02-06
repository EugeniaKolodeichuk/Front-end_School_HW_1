import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import AppBar from './AppBar';

describe('#AppBar.tsx', () =>
  it('render AppBar', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <AppBar />
      </Router>,
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
  }));
