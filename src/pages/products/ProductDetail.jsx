import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getProduct } from '../../api/api'
import Breadcrumb from '../../components/Card/Breadcrumb/Breadcrumb'
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
      <Breadcrumb elements={["products", "detail"]}/>

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