import React from 'react'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import News from '../component/News'


function Home() {
  return (
    <>
        {/* <Header/>
        <Navbar/> 
        <main className='flex h-screen justify-center items-center py-10 px-3 flex-row flex-wrap'>
              <News/>
        </main> */}

        <div className='relative bg-zinc-800 h-screen w-full  '>
              <div className='fixed z-0 w-full h-screen'><h1 className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 font-semibold text-9xl leading-none tracking-tighter'>Fast<span className='text-[#caca33]'>News.</span>com</h1></div>
            <div className='fixed  top-0 left-0 z-[2] w-full h-screen '>
                <Header/>
                <Navbar/>
                <News/>
            </div>
        </div> 
        
    </>
  )
}

export default Home