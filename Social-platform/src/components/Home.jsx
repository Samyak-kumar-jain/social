import React from 'react'
import './Home.css'




import Profile from './Profile'
import Trend from './Trend'
import Feed from './Feed'


function Home() {
  return (
    <>
    <div className="Home">
        <Profile></Profile>
     
        <Feed ></Feed>
      
        <Trend></Trend>
        
    </div>
    
    
    </>
  )
}

export default Home
