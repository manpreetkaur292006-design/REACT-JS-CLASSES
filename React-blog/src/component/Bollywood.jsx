import React from 'react'
import Data from '../Data'

const Bollywood = () => {

  const BollywoodData = Data.filter((item)=>item.category==="Bollywood");

  return (
    <div className='blog-section-container'>
      {BollywoodData.map((bollydata)=>(
        <div className='blog-section-div'>
          <h1 className='blog-section-head'>{bollydata.title}</h1>
          <img src={bollydata.img_url} className='blog-section-img'/>
          <p className='blog-section-desc'>{bollydata.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Bollywood