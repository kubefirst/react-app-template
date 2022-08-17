import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from './index';

describe('home', () => {
  test('should render the home component', async () => {
    await render(<Home />);
    expect(screen.queryByTestId('home-component')).toBeInTheDocument();
  });
});
