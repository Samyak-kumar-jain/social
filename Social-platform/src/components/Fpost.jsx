import React from 'react'
import './fpost.css'
// import post3 from '../image/post3.jpg';
import Comment from '../image/comment.png';
import Heart from '../image/like.png'
import Share from '../image/share.png'
import NotLike from '../image/notlike.png'


function Fpost({ data, id }) {
  return (
    <>
      <div className="fpost">

        <div className='post-box'>

          <img src={data.img}></img>

          <div className="post-box-2">
          <div className="postReact">

            <img src={data.liked ? Heart : NotLike} alt="" />


            <img src={Comment} alt="" />


            <img src={Share} alt="" />

          </div>
          <span style={{ color: "black", fontSize: '1vw' }}>{data.likes} likes</span>

          <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
          </div>
        </div>
        </div>

      </div>

    </>

  )
}

export default Fpost