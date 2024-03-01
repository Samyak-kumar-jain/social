import React from 'react'
import './Trendcard.css'
import { TrendData } from '../data/Trendcard'

function Trendcard() {
  return (
   <>  
   <div className="TrendCard">
   <h3>Trends for you</h3>
   {TrendData.map((trend)=>{
       return(
           <div className="trend">
               <span>#{trend.name}</span>
               <span>{trend.shares}k shares</span>
           </div>
       )
   })}
   

</div>

   </>
  )
}

export default Trendcard