import React from 'react'
import Data from '../Data'

const Hollywood = () => {

  const HollywoodData = Data.filter((item)=>item.category==="Hollywood");

  return (
    <>
    <h1>Hollywood</h1>
    <div className='blog-section-container'>
      {HollywoodData.map((hollydata)=>(
        <div className='blog-section-div'>
          <h1 className='blog-section-head'>{hollydata.title}</h1>
          <img src={hollydata.img_url} className='blog-section-img'/>
          <p className='blog-section-desc'>{hollydata.description}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default Hollywood