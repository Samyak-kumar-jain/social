import React from 'react'
import './Trend.css'
import Navigation from './Navigation'
import Trendcard from './Trendcard'
import Follow from './Follow';

function Trend() {
  return (
    <>
    
     <div className="Trend">
       <Navigation></Navigation>
       <Follow></Follow> 
       <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
       <Trendcard></Trendcard>
       
       
      
     </div>
    </>
  )
}

export default Trend