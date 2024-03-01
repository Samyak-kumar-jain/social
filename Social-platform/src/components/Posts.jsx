import React from 'react'
import './Post.css'
import { PostsData } from '../data/postdata'
import Fpost from './Fpost'

function Posts() {
  return (
    <>
    <div className="posts">
        {
            PostsData.map((Posts,id)=>{
                 
                return <Fpost data={Posts} id={id} ></Fpost>

            })
        }

    </div>
    </>
  )
}

export default Posts