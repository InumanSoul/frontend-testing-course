import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../../api/api'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Title from '../../components/Title/title'

const Products = () => {
  const [products, setProducts] = useState(null)
  const [searchInput, setSearchInput] = useState('')
  const [filtered, setFiltered] = useState(null)
  
  const listProducts = async () => {
    let data = await getProducts()
    setProducts(data)
  }

  const filterProducts = () => {
    const filtered = products?.results.filter(element => element.name.includes(searchInput))
    setFiltered(filtered)
  }

  useEffect(() => {
    listProducts()
  }, [])

  return (
    <div className='px-6 py-2'>
      <Breadcrumb elements={["products"]}/>
      <div className='md:max-w-xl md:mx-auto'>

        <Title>Products page</Title>
        <p>This is the products list page</p>
        <div className='my-6 w-full flex'>
          <input 
            name='search'
            type={'search'}
            placeholder='Search...'
            aria-label='Search'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className='w-full border rounded-l-lg px-2 py-1 border-slate-400 focus:outline-offset-2 focus:outline-2'
          />
          <button className='bg-blue-500 text-white px-2 py-2 rounded-r-lg' onClick={filterProducts}>Search</button>
        </div>
          {
            !products ? <p className='text-center tracking-wide'>Loading...</p>
            :
            (
              <ul id='productList' className='my-4'>
                {products && !filtered ? products.results.map((item, idx) => (
                    <li key={idx} className='mb-2'>
                      <Link to={`/product/${item.name}`} className='flex items-center p-2 capitalize bg-slate-200 hover:bg-slate-300 transition-all duration-200 rounded'>
                        {item.name}
                      </Link>
                    </li>
                  )) : 
                  filtered ? filtered.map((item, idx) => (
                    <li key={idx} className='mb-2'>
                      <Link to={`/product/${item.name}`} className='flex items-center p-2 capitalize bg-slate-200 hover:bg-slate-300 transition-all duration-200 rounded'>
                        {item.name}
                      </Link>
                    </li>
                  )) : <p>No results found...</p>}
              </ul>
            )
          }
      </div>
      
    </div>
  )
}

export default Products