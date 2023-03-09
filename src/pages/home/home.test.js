import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Home from '.';

it('Home buttons load correctly', () => {
  render(<MemoryRouter><Home /></MemoryRouter>);
  const linkToProducts = screen.getByRole('link', { name: /Explore Pokémons/i })
  expect(linkToProducts).toBeInTheDocument();
});
