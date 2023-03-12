import React from 'react'
import { NavLink } from 'react-router-dom'
import './LeftSideBar.css'

const LeftSideBar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to='/' className='side-nav-links'>
                <p style={{paddingLeft:"10px"}}>Home</p>
            </NavLink>
            <NavLink to='/contact' className='side-nav-links'>
                <p style={{paddingLeft:"10px"}}>Contact</p>
            </NavLink>
            <NavLink to='/about' className='side-nav-links'>
                <p style={{paddingLeft:"10px"}}>About</p>
            </NavLink>
        </nav>
        
      
    </div>
  )
}

export default LeftSideBar
