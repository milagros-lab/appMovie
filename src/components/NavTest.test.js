import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';
import Signin from './Signin';

jest.mock('../firebase/setup', () => ({
  auth: {
    currentUser: {
      emailVerified: true,
    },
  },
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('firebase/auth', () => ({
  signOut: jest.fn(),
}));

test('Navbar renders correctly with logout button', () => {
  render(<Navbar />);
  const logoutButton = screen.getByText(/Logout/i);
  expect(logoutButton).toBeInTheDocument();
  fireEvent.click(logoutButton);
});

test('Navbar renders correctly the component Signin when onclick button SIGNIN',  () => {
  jest.clearAllMocks();  
  render(<Signin />); 
  const signinButton = screen.getByRole("button", {name: "Signin" });
  expect(signinButton).toBeInTheDocument();
  fireEvent.click(signinButton);  
});

