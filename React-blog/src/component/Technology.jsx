import React from 'react'
import Data from '../Data'

const Technology = () => {

  const TechnologyData=Data.filter((item)=>item.category==="Technology");

  return (
    <>
    <h1>Technology</h1>
    <div className='blog-section-container'>
      {TechnologyData.map((techdata)=>(
        <div className='blog-section-div'>
          <h1 className='blog-section-head'>{techdata.title}</h1>
          <img src={techdata.img_url} className='blog-section-img'/>
          <p className='blog-section-desc'>{techdata.description}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default Technology