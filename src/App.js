import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Services from './pages/services/services'
import Features from './pages/features/features'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Header from './component/layout/header'
import Showdata from './component/showdata'



const App = () =>  {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
 <Route path='/'  element = {<Home />} />
 <Route path='/services' element = {<Services/>} />
 <Route path='/features' element = {<Features/>} />
 <Route path='/features/:id' element = {<Showdata/>} />
 <Route path='/about'  element = {<About />} />
 <Route path='/contact'  element = {<Contact/>} />
    </Routes>
    </BrowserRouter>
    

    </>
  )
}



export default  App