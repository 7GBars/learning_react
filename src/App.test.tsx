import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppWithLogger } from './App';

test('renders learn react link', () => {
  render(<AppWithLogger />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
