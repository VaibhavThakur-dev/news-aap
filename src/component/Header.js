import React from 'react'

function Header() {
  return (
    <>
        <div id='top' className=' relative h-24 w-full flex justify-between items-center bg-zinc-900 py-7 px-3 z-10 '>
            <img className='min-h-full  w-1/6' src="./images/news-logo.png" alt="" />
            <div className=''>
                <h1 className="text-sm md:text-4xl lg:text-4xl font-semibold italic text-zinc-50 ">Now Time to Online</h1>
            </div>
        </div>
    </>
  )
}

export default Header