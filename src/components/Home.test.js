import React from 'react';
import { screen, render } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('should display the expect title', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { name: /NETFLIX/i }),
    ).toBeInTheDocument();
  });
});
