import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../router/routes'

describe('Products page', () => {
  it('List products', () =>{
    render(<App/>);
    const linkToProducts = screen.getByRole('link', { name: /Explore Pokémons/i })
    userEvent.click(linkToProducts)
  
    const productPage = screen.getByText(/products page/i)
    expect(productPage).toBeVisible()
  })

  // it('Search products', () => {
  //   render(<App />);
  //   screen.getByPlaceholderText(/Search/i)
  //   userEvent.type('bulb')
  //   const sendButton = screen.getByRole('button', /search/i)
  //   userEvent.click(sendButton)
  //   expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument()
  // })

  // it('See the product detail correctly', async () => {
  //   render(<App />);
  //   const listItem = await screen.findByText(/bulbasaur/i)
  //   userEvent.click(listItem)
  //   expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument()
  // })
})
