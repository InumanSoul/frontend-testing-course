import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../../api/api'

const Products = () => {
  const [products, setProducts] = useState('')
  
  const listProducts = async () => {
    let data = await getProducts()
    setProducts(data)
  }

  useEffect(() => {
    listProducts()
  }, [])

  return (
    <div className='px-6 py-2'>
      <div className='flex gap-2 mt-4'>
        <Link 
          to={'/'}
          className='appearance-none transition-all duration-200 text-sky-600 hover:text-sky-500 capitalize'
        >
          home
        </Link>
        <span>/</span>
        <p>Products</p>
      </div>
      <div className='md:max-w-xl md:mx-auto'>

        <h1 className='text-4xl mt-12'>Products page</h1>
        <p>This is the products list page</p>
        <div className='my-6 w-full'>
          <input 
            name='search'
            type={'search'}
            placeholder='Search...'
            className='w-full border rounded px-2 py-1 border-slate-400 focus:outline-offset-2 focus:outline-2'
          />
        </div>
          {
            !products ? <p className='text-center tracking-wide'>Loading...</p>
            :
            (
              <ul id='productList' className='my-4'>
                {products && products.results.map((item, idx) => (
                  <li key={idx} className='mb-2'>
                    <Link to={`/product/${item.name}`} className='flex items-center p-2 capitalize bg-slate-200 hover:bg-slate-300 transition-all duration-200 rounded'>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )
          }
      </div>
      
    </div>
  )
}

export default Products