import React from 'react'
import { NavLink } from 'react-router-dom'
function Card({data}) {
  return (
   <>
       <div className=' leading-3 border border-solid border-zinc-600 text-white font-semibold rounded-[10px] bg-zinc-600/50 shadow-2xl shadow-zinc-600- flex flex-col justify-between items-center w-60 h-96   p-2 gap-1 '>

<img className='aspect-[1.2/1] object-cover rounded-lg' src={`${data.urlToImage?data.urlToImage:'./images/not-found.png'}`} alt="" />
    <h2 className='font-bold text-lg tracking-tighter leading-tight'>{ data.title}</h2>
    
    <p className='text-xs leading-tight overflow-hidden '>{data.description}</p>
    <NavLink className='bg-zinc-950 w-1/2 text-center text-sm rounded-sm shadow-md shadow-zinc-400 p-1' to={data.url}>View More</NavLink>
</div>
   </>
  )
}

export default Card