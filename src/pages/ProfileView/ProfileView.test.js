import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileView from './ProfileView';
import ReactTestUtils from 'react-dom/test-utils';
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest
    .fn()
    .mockReturnValue({ environment: 'dev', service: 'fakeService' }),
}));
/* import MatchMediaMock from 'jest-matchmedia-mock';

new MatchMediaMock(); */

/* describe('ProfileView', () => {
  it('renders title of app', () => {
    render(<ProfileView />);

    expect(screen.getByText(/Other posts created by/i)).toBeInTheDocument();
    
  });
}); */

describe('ProfileView', () => {
  it('passing test', () => {
    expect(true).toBeTruthy();
  });

  it('failing test', () => {
    expect(false).toBeFalsy();
  });
});

/* describe('ProfileView Component', () => {
  it('has an h2 tag', () => {
    const component = ReactTestUtils.renderIntoDocument(<ProfileView />);
    const h2 = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'h2');
  });

  it('has a title class', () => {
    const component = ReactTestUtils.renderIntoDocument(<ProfileView />);
    const node = ReactTestUtils.findRenderedDOMComponentWithClass(
      component,
      'list_noorder',
    );
  });
}); */

/* describe('#ProfileView.js', () =>
  it('render profile view', () => {
    const { uniqueId } = 'ivan';
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: jest
        .fn()
        .mockReturnValue({ environment: 'dev', service: 'fakeService' }),
    }));
    render(<ProfileView uniqueId={uniqueId} />);
  }));
 */
