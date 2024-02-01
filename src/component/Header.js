import React from 'react'

function Header() {
  return (
    <>
        <div className=' relative h-36 w-full flex justify-between items-center bg-gray-100 p-5 '>
            <img className='min-h-full min-w-40 w-1/5' src="./images/news-logo.png" alt="" />
            <div className=''>
                <h1 className="text-sm md:text-4xl lg:text-4xl font-extrabold italic text-black ">Now Time to Online</h1>
            </div>
        </div>
    </>
  )
}

export default Header