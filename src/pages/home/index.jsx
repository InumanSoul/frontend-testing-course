import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='px-4 text-center h-screen flex flex-col items-center justify-center'>
      <header>
        <h1 className='text-4xl'>Testing App</h1>
        <p className='mb-4'>Testing practice project with testing library and jest</p>
      </header>
      <div className='flex gap-2'>
        <Link
          to={'/products'} 
          className='appearance-none drop-shadow-md hover:drop-shadow-lg transition-all duration-200 bg-amber-400 hover:bg-amber-300 px-3 py-2 rounded'
        >
          Explore Pokémons
        </Link>
        <Link
          to={'/contact'}
          className='appearance-none transition-all duration-200 border border-slate-300 hover:bg-slate-100 px-3 py-2 rounded'
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Home;
