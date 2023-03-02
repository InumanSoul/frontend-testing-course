import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = ({elements}) => {
  const location = useLocation()
  let path = location.pathname.substring(1)

  return (
     <div className='flex gap-2 mt-4 bg-slate-100 px-4 py-1 rounded-full'>
        <Link 
          to={'/'}
          className='appearance-none transition-all duration-200 text-sky-600 hover:text-sky-500 capitalize'
        >
          Home
        </Link>
        {
          elements.map((element, idx) => 
            path === element ? (
              <div className='flex gap-2' key={idx}>
                <span>/</span>
                <p className='capitalize'>{element}</p>
              </div>
            )
            : 
            (<div className='flex gap-2' key={idx}>
              <span>/</span>
              <Link 
                to={`/${element}`}
                className='appearance-none transition-all duration-200 text-sky-600 hover:text-sky-500 capitalize'
              >
                {element}
              </Link>
            </div>)
          )
        }
      </div>
  )
}

export default Breadcrumb