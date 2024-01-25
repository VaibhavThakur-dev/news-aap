import React from 'react'

function Header() {
  return (
    <>
        <div className=' relative w-full  h-96 bg-gradient-to-r from-slate-900 via-zinc-800 to-slate-900 flex justify-center items-center '>
            <img className='h-full w-full ' src="./images/news.jpg" alt="" />
            <div className='absolute z-10'>
                <h1 className="text-7xl font-bold text-white font-heading">Now Time to Online</h1>
            </div>
        </div>
    </>
  )
}

export default Header