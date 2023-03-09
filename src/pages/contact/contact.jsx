import React, { useRef, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Title from '../../components/Title/title'

const Contact = () => {
  const [message, setMessage] = useState(null)
  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('Your message was sended')
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }
  return (
    <div className='px-6 py-2'>
      <Breadcrumb elements={["contact"]}/>
      <div className='md:max-w-xl md:mx-auto'>
        <Title>Contact</Title>
        <p>Lets talk about your ideas</p>
        {
          message && <p className='bg-emerald-100 p-4 rounded my-3'>{message}</p>
        }
        <form ref={formRef} className='mt-5'>
          <div className='flex flex-col mb-3'>
            <label htmlFor='name' className='font-bold text-sm'>Name</label>
            <input id='name' type='text' name='name' placeholder='Your name' className='border border-slate-400 rounded px-2 py-2'/>
          </div>
          <div className='flex flex-col mb-3'>
            <label htmlFor='wish' className='font-bold text-sm'>Wish</label>
            <input id='wish' type='text' name='wish' placeholder='Tell us your wish' className='border border-slate-400 rounded px-2 py-2'/>
          </div>
          <div className='flex flex-col mb-3'>
            <label htmlFor='message' className='font-bold text-sm'>Message</label>
            <textarea id='message' type='text' name='message' placeholder='Your mesage' className='border border-slate-400 rounded px-2 py-2'></textarea>
          </div>
          <button 
            onClick={e => handleSubmit(e)}
            className='appearance-none drop-shadow-md hover:drop-shadow-lg transition-all duration-200 text-white bg-blue-400 hover:bg-blue-300 px-3 py-2 rounded'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact