import React from 'react'
import './Home.css'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSideBar />
      <div className='welcome'>
        <h1>Welcome to React Js World</h1>
      </div>
    </div>
  )
}

export default Home
