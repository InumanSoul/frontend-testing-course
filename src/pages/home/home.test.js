import { render, screen } from '@testing-library/react';
import App from '../../router/routes';

it('Home buttons load correctly', () => {
  render(<App />);
  const linkToProducts = screen.getByText(/Explore Pokémons/i)
  expect(linkToProducts).toBeInTheDocument();
});
