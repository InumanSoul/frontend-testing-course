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
  
  const TYPE_BACKGROUND = {
    'water': 'bg-sky-100',
    'fire': 'bg-orange-100',
    'bug': 'bg-teal-100',
    'grass': 'bg-green-100',
    'normal': 'bg-slate-100'
  }

  const assignTypeBg = type => {
    return TYPE_BACKGROUND[type]
  }

  useEffect(() => {
    loadDetail()
  }, [loadDetail])

  return (
    <div className='px-10 py-2'>
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
          <div className={`rounded-2xl flex flex-col content-center items-center mt-8 p-6 md:max-w-lg md:mx-auto ${assignTypeBg(product?.types[0]?.type?.name)}`}>
            <div className='w-full flex justify-between items-center mb-3'>
              <h1 className='text-4xl capitalize'>{product?.name}</h1>
              <h2 className='text-xl'>XP {product?.base_experience}</h2>
            </div>
            <div className='bg-black/[.05] w-full rounded-lg'>
              <img src={product?.sprites?.other?.home?.front_default} alt={product.name} className='w-56 h-56 object-contain mx-auto my-4' loading='lazy'/>
            </div>
            <div className='font-bold flex gap-3 my-2 uppercase'>
              <p># {product?.id}</p>
              <p>Weight: {product?.weight}</p>
              <p>Height: {product?.height}</p>
            </div>
            <div className='text-left w-full'>
              {product?.stats.map((item, idx) => (
                <div key={idx} className='py-1 uppercase'>{item?.stat?.name}: {item?.base_stat}</div>
              ))}
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ProductDetail