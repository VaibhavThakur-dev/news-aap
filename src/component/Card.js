import React from 'react'
import { NavLink } from 'react-router-dom'

function Card({data}) {
  return (
    
        <div className=' border border-solid border-zinc-600 text-white font-semibold rounded-[20px] bg-zinc-600/50 shadow-2xl shadow-zinc-600- flex flex-col justify-between w-60 h-96 leading-none  p-4 gap-1 '>

                            <img className='aspect-[1.2/1] object-cover rounded-2xl' src={`${data.urlToImage?data.urlToImage:'./images/not-found.png'}`} alt="" />
                                <h2 className='font-bold text-lg'>{data.title.length >40 ? data.title.substr(0,40)+' ...':data.title}</h2>
                                
                                <p className='text-xs '>{data.description.length > 70 ?data.description.substr(0,70)+' ...':data.description}</p>
                                <NavLink className='bg-zinc-950 w-1/2 text-center rounded-sm shadow-lg shadow-zinc-400 p-1' to={data.url}>View More</NavLink>
                        </div>
      )
}

export default Card