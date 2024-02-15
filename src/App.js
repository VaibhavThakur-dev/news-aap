import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Header from './component/Header'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
// import Top from './component/Top'



function App() {
  return (
    <>
    <BrowserRouter>    
    <Header/>
    <Navbar/>
      <Routes>
        <Route path='/' element=<Home/> />
        <Route path='/contactus' element=<ContactUs/> />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App