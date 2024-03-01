import React, { useState } from 'react'
import './Sharepost.css'
import { FaRegImage } from "react-icons/fa6";
import { useRef } from 'react';
import { RxCross2 } from "react-icons/rx";



function Sharepost() {
  const [image, setImage] = useState("");
  const imageRef = useRef();
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),

      })
    }


  }
  
  return (
    <>
      <div className="sharepost">
        <div className='share-in'>

        <img src="https://plus.unsplash.com/premium_photo-1708274927154-db28fd6adaa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
        <div>
          <input type="text" placeholder="What's happening" />
        </div>
        <div className="image" onClick={() => imageRef.current.click()}>
          <FaRegImage style={{ fill: "white" }} />
        </div>
        <div className='share-button'>
          <button type="button" >Share</button>
        </div>
        </div>
        <div className='ant-div' >
        <div style={{ display: "none" }}>
          <input type='file' name='myImage' ref={imageRef} onChange={onImageChange}></input>
        </div>
        {
          image && (
            <div className="prof-img" >

              <RxCross2 onClick={()=>setImage(null)}  
              style={{ 
                      marginLeft:"39vw",
                      position: "relative",
                      fontSize: "2.5vw",
                      top:"2.8vw",
                      left:"0.6vw",
                      // backgroundColor:"orange",
                      cursor:"pointer",
                      fill:"white",
                      
                      padding:"0.2vw",
                      borderTopRightRadius:"1vw",
                      borderBottomLeftRadius:"1vw"
                      
             }} />
              <div>
              <img className='selected-img' src={image.image}></img>
              </div>
            </div>
            

          )
        }
      </div>
      </div>







    </>
  )
}

export default Sharepost