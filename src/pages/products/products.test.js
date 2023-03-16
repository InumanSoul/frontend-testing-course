import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import Products from '.'
import ProductDetail from './ProductDetail'

describe('Products page', () => {
  it('List products', () =>{
    render(<MemoryRouter><Products/></MemoryRouter>);
    const productPage = screen.getByText(/products page/i)
    expect(productPage).toBeVisible()
  })

  it('Search product', async () => {
    render(<MemoryRouter><Products/></MemoryRouter>)
    const search = screen.getByLabelText('Search')
    userEvent.type(search, 'bulb')
    const sendButton = screen.getByRole('button', /search/i)
    userEvent.click(sendButton)
    const res = await screen.findByText(/bulbasaur/i)
    expect(res).toBeInTheDocument()
  })

  it('See the product detail correctly', async () => {
    render(<MemoryRouter><Products/></MemoryRouter>)
    const listItem = await screen.findByText(/bulbasaur/i)
    userEvent.click(listItem)
    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument()
  })
})
