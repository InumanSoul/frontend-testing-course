import React from 'react'

const Card = ({ item }) => {
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
  
  return (
    <div className={`rounded-2xl flex flex-col content-center items-center mt-12 p-6 md:max-w-lg md:mx-auto ${assignTypeBg(item?.types[0]?.type?.name)}`}>
      <div className='w-full flex justify-between items-center mb-3'>
        <h1 className='text-4xl capitalize'>{item?.name}</h1>
        <h2 className='text-2xl font-bold'>XP {item?.base_experience}</h2>
      </div>
      <div className='bg-black/[.05] w-full rounded-lg'>
        <img src={item?.sprites?.other?.home?.front_default} alt={item.name} className='w-56 h-56 object-contain mx-auto my-4' loading='lazy'/>
      </div>
      <div className='flex justify-between gap-3 my-4 uppercase w-full bg-white rounded px-3 py-2'>
        <p className='font-bold'># {item?.id}</p>
        <p>Weight: {item?.weight}</p>
        <p>Height: {item?.height}</p>
      </div>
      <div className='text-left w-full'>
        {item?.stats.map((item, idx) => (
          <div key={idx} className='py-1 uppercase grid grid-cols-12 items-center'>
            <div className='col-span-12 md:col-span-5 text-sm'>
              {item?.stat?.name}
            </div>
            <div className='col-span-12 md:col-span-7 relative max-w-full overflow-hidden rounded-full h-4'>
              <div className='bg-black/[0.40] h-4 rounded-full absolute flex flex-col items-center justify-between' style={{ width: item?.base_stat + '%',}}>
                <span className='text-white text-xs'>{item?.base_stat}</span>
              </div>
              <div className='bg-black/[0.10] w-full h-4 rounded-full'></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card