import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'



function App() {
  return (
    <>
    <BrowserRouter>    
      <Routes>
        <Route path='/' element=<Home/> />
        <Route path='/contactus' element=<ContactUs/> />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App