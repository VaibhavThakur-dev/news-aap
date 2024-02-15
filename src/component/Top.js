import React from 'react'

import { GoMoveToTop } from "react-icons/go";

function Top() {
  return (
    <div  className='fixed z-20 right-0 bottom-16 flex justify-center items-center  rounded-full text-white font-extrabold text-4xl bg-zinc-600 h-14 w-14 p-2 mr-5'>
        <a href='#top'> <GoMoveToTop/></a>
    </div>
  )
}

export default Top