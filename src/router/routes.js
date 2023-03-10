import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from '../pages/contact/contact'
import Home from '../pages/home'
import Products from '../pages/products'
import ProductDetail from '../pages/products/ProductDetail'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:slug' element={<ProductDetail/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;