import React, { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProduct } from '../../api/api'
import Card from '../../components/Card/Card'

const ProductDetail = () => {
  const [product, setProduct] = useState('')
  const { slug } = useParams()

  const loadDetail = useCallback(async () =>{
    let data = await getProduct(slug)
    setProduct(data)
  }, [slug])

  useEffect(() => {
    loadDetail()
  }, [loadDetail])

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
        <Link 
          to={'/products'}
          className='appearance-none transition-all duration-200 text-sky-600 hover:text-sky-500 capitalize'
        >
          products
        </Link>
        <span>/</span>
        <p>Detail</p>
      </div>
      
      { 
        !product ? <p className='text-center'>Loading...</p> :
        (
          <Card item={product}/>
        )
      }
    </div>
  )
}

export default ProductDetail