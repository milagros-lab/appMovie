import React from 'react';
import { screen, render } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('should display the user access button with the text', () => {
    render(<Navbar />);
    expect(
      screen.getByRole('button', { name: /SINGIN/i }),
    ).toBeInTheDocument();
  });
});
