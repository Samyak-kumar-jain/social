import React from 'react'
import './Profile.css'

import Search from './Search';
import Profilecard from './Profilecard';
import Posts from './Posts';
import Follow from './Follow';
import Trendcard from './Trendcard'

function Profile() {
  return (
    <>
    <div className="profile">
      <Search></Search>
      <Profilecard></Profilecard>
      <Follow ></Follow> 
       <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
       <Trendcard></Trendcard>
      
     
     

   
    </div>
    </>
  )
}

export default Profile