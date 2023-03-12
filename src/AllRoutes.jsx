import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/contact/Contact'
import About from './pages/About'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About />} />
    </Routes>
   
  )
}

export default AllRoutes
