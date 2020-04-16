import * as React from 'react';
import { render } from '@testing-library/react';
import HomePage from './';

describe('Home', () => {
  it('should render home page', () => {
    const elem = render(<HomePage />).container;
    expect(elem).toMatchSnapshot();
  });
});
