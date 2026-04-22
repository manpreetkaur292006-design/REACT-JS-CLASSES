import React from 'react'
import Data from '../Data'

const Hollywood = () => {

  const HollywoodData = Data.filter((item)=>item.category==="Hollywood");

  return (
    <>
      {HollywoodData.map((hollydata)=>(
        <>
          <h1 className='blog-section-head'>{hollydata.title}</h1>
          <img src={hollydata.img_url} className='blog-section-img'/>
          <p className='blog-section-desc'>{hollydata.description}</p>
        </>
      ))}
    </>
  )
}

export default Hollywood