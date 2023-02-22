import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../router/routes'

const products = [{
  results: [{
    name: "bulbasaur",
    url: "https://sample.com",
  },
  {
    name: "ivysaur",
    url: "https://sample.com",
  },
  {
    name: "venusaur",
    url: "https://sample.com",
  },]
}]

const product = [
  {
    height: 7,
    id: 1,
    name: 'bulbasaur',
    stats: [
      {base_stat: 45, stat: {name: 'hp'}},
      {base_stat: 49, stat: {name: 'attack'}},
      {base_stat: 49, stat: {name: 'defense'}},
      {base_stat: 65, stat: {name: 'special-attack'}},
      {base_stat: 65, stat: {name: 'special-defense'}},
      {base_stat: 45, stat: {name: 'speed'}},
    ],
    sprites: {
      other: {home: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
      }}
    },
    weight: 69,
  }
]

describe('Products page', () => {
  it('List products', () =>{
    render(<App/>);
    const linkToProducts = screen.getByText(/explore pokémons/i)
    userEvent.click(linkToProducts)
  
    const productPage = screen.getByText(/products page/i)
    expect(productPage).toBeVisible()
  })

  it('See the product detail correctly', async () => {
    render(<App />);
    const listItem = await screen.findByText(/bulbasaur/i)
    userEvent.click(listItem)
    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument()
  })
})
