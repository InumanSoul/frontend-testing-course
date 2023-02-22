import React, { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProduct } from '../../api/api'

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
    <div className='px-4 py-2'>
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
          <div className='flex flex-col content-center items-center'>
            <img src={product?.sprites?.other?.home?.front_default} alt={product.name} className='w-36 h-36 object-contain' loading='lazy'/>
            <h1 className='text-4xl mt-4 capitalize'>{product?.name}</h1>
            <div>
              <h4>XP: {product?.base_experience}</h4>
            </div>
            <div className='flex gap-2'>
              {product?.types.map((item, idx) => (
                <div key={idx} className='bg-gray-200 dark:bg-gray-500 px-2 py-1 rounded text-sm uppercase'>{item?.type?.name}</div>
              ))}
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ProductDetail