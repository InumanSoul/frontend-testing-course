import { render, screen } from '@testing-library/react';
import App from '../../router/routes';

it('Home buttons load correctly', () => {
  render(<App />);
  const linkToProducts = screen.getByRole('link', /Explore Pokémons/i)
  expect(linkToProducts).toBeInTheDocument();
});
