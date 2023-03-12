import React from 'react'
import LeftSideBar from '../components/LeftSideBar/LeftSideBar'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div>
        <LeftSideBar/>
      </div>
      <div style={{textAlign:'center'}}>

        <p style={{color:'black', fontFamily:'sans-serif',paddingLeft:'70px',paddingTop:'5px'}}>React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.

  React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with the user interface and rendering components to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.</p>
      </div>
    </div>
  )
}

export default About
