import React from 'react'
import logo from '../image/so.png';
import './Search.css'
import { CiSearch } from "react-icons/ci";

function Search() {
  return (
    <>
      <div className='logo-search'>
        <img src={logo}></img>
        <div className='search'>
          <input type="text" placeholder='explore'></input>
          <div className="ser-ic">
            <button type="submit">
              <CiSearch style = {{fill:"white"}} />
            </button>

          </div>

        </div>

      </div>
    </>
  )
}

export default Search