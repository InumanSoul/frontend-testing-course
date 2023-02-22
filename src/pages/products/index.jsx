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
    <div className='px-4 py-2'>
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
      <h1 className='text-4xl mt-4'>Products page</h1>
      <p>This is the products list page</p>
      {
        !products ? <p className='text-center tracking-wide'>Loading...</p>
        :
        (
          <ul id='productList' className='my-4'>
            {products && products.results.map((item, idx) => (
              <li key={idx} className='mb-2'>
                <Link to={`/product/${item.name}`} className='flex items-center gap-2 capitalize'>
                  <div className='w-8 h-8 bg-slate-300 rounded-full'></div>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )
      }
      
      
    </div>
  )
}

export default Products