import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='px-4 text-center h-screen flex flex-col items-center justify-center'>
      <header>
        <h1 className='text-4xl'>Testing App</h1>
        <p className='mb-4'>Testing practice project with testing library and jest</p>
      </header>
      <Link
        to={'/products'} 
        className='appearance-none drop-shadow-md hover:drop-shadow-lg transition-all duration-200 bg-amber-400 hover:bg-amber-300 px-3 py-2 rounded'
      >
        Explore Pokémons
      </Link>
    </div>
  );
}

export default Home;
