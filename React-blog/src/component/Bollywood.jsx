import React from 'react'
import Data from '../Data'

const Bollywood = () => {

  const BollywoodData = Data.filter((item)=>item.category==="Bollywood");

  return (
    <>
      {BollywoodData.map((bollydata)=>(
        <>
          <h1 className='blog-section-head'>{bollydata.title}</h1>
          <img src={bollydata.img_url} className='blog-section-img'/>
          <p className='blog-section-desc'>{bollydata.description}</p>
        </>
      ))}
    </>
  )
}

export default Bollywood