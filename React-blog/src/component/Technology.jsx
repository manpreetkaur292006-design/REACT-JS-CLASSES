import React from 'react'
import Data from '../Data'

const Technology = () => {

  const TechnologyData=Data.filter((item)=>item.category==="Technology");

  return (
    <>
      {TechnologyData.map((techdata)=>(
        <>
          <h1 className='blog-section-head'>{techdata.title}</h1>
          <img src={techdata.img_url} className='blog-section-img'/>
          <p className='blog-section-desc'>{techdata.description}</p>
        </>
      ))}
    </>
  )
}

export default Technology