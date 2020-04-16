import * as React from 'react';
import { render } from '@testing-library/react';
import ContactPage from './';

describe('Contact', () => {
  it('should render contact page', () => {
    const elem = render(<ContactPage />).container;
    expect(elem).toMatchSnapshot();
  });
});
