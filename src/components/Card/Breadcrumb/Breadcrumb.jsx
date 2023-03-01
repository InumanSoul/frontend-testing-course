import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({elements}) => {
  return (
     <div className='flex gap-2 mt-4'>
        <Link 
          to={'/'}
          className='appearance-none transition-all duration-200 text-sky-600 hover:text-sky-500 capitalize'
        >
          Home
        </Link>
        {
          elements.map((element, idx) => (
            <div className='flex gap-2' key={idx}>
              <span>/</span>
              <Link 
                to={`/${element}`}
                className='appearance-none transition-all duration-200 text-sky-600 hover:text-sky-500 capitalize'
              >
                {element}
              </Link>
            </div>
          ))
        }
      </div>
  )
}

export default Breadcrumb