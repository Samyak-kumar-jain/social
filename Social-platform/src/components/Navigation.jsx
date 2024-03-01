import React from 'react'
import './Navigation.css'
import { IoSettingsOutline } from "react-icons/io5";
import Home from '../image/home.png'
import Noti from '../image/noti.png'



function Navigation() {
  return (
   <>
   <div className="nav">
   <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="" />
        <IoSettingsOutline />
        <img src={Noti} alt="" />
        
      </div>


   </div>
   </div>
   
   </>
  )
}

export default Navigation