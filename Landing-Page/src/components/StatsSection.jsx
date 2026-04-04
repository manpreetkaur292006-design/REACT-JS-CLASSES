import React from 'react'
import { FaStar } from "react-icons/fa";

const StatsSection = () => {
  return (
    <>
      <div className='stats-section'>

        <div className='stats' id='stats-1'>
          <h1>85%</h1>
          <p>Stress Reduction</p>
        </div>

        <div className='stats' id='stats-2'>
          <h1>3X</h1>
          <p>Better Focus</p>
        </div>

        <div className='stats' id='stats-3'>
          <h1>10K+</h1>
          <p>Happy Members</p>
        </div>

        <div className='stats' id='stats-4'>
          <h1>4.9<FaStar /></h1>
          <p>User Rating</p>
        </div>
        
      </div>
    </>
  )
}

export default StatsSection