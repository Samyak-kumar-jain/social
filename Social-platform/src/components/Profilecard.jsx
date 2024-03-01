import React from 'react'
import './Profilecard.css'

function Profilecard() {
  return (
    <>
    <div className="Profilecard">
        <div className="profileimages">
        <img src="https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"alt="" />
        <img src="https://plus.unsplash.com/premium_photo-1708274927154-db28fd6adaa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
      </div>
      <div className="ProfileName">
        <span>Zendaya MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>
        

         
        </div>
        <hr />
        <span className='pro'>My Profile</span>
      </div>
        
    </div>
    </>
  )
}

export default Profilecard