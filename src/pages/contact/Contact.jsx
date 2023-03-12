import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import './Contact.css'

const Contact = () => {
  return (
    <div>
        <h1>Contact Details</h1>
      <LeftSideBar/>
      <div className='contact-details'>      
        <div className='details'>
          <form>
            <label htmlFor='name'>
              <h4>Name</h4>
              <input type="text" name='name' id='name' />
            </label>
            <label htmlFor='email'>
              <h4>Email</h4>
              <input type="email" name='name' id='email' />
            </label>
            <label htmlFor='ph.no'>
              <h4>Phone number</h4>
              <input type="text" name='ph.no' id='ph.no' />
            </label>
            <button type='submit' className='handle-switch-btn'>Submit</button>
          </form>
          
          

       </div>


      </div>
    </div>
    
  )
}

export default Contact
