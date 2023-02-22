import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../router/routes'

describe('Products related tests', () => {
  it('Products page load', () =>{
    render(<App/>);
    const linkToProducts = screen.getByText(/explore pokémons/i)
    userEvent.click(linkToProducts)
  
    const productPage = screen.getByText(/products page/i)
    expect(productPage).toBeVisible()
  
    const backAction = screen.getByText(/home/i)
    userEvent.click(backAction)
    expect(screen.getByText(/testing app/i)).toBeInTheDocument()
  })
  
  it('Go to product detail page and see loading', () => {
    render(<App/>);
    const linkToProducts = screen.getByText(/explore pokémons/i)
    userEvent.click(linkToProducts)
    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  it('See the product detail correctly', async () => {
    render(<App />);
    const listItem = await screen.findByText(/bulbasaur/i)
    userEvent.click(listItem)
    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument()
  })
})
