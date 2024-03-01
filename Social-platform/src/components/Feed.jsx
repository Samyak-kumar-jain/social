import React from 'react'
import './Feed.css'
import Sharepost from './Sharepost'
import Posts from './Posts'


function Feed() {
  
  return (
    <>
  
    <div className="feed">
      <Sharepost></Sharepost>
      <Posts></Posts>
      
    </div>
    
    
    </>
  )
}

export default Feed