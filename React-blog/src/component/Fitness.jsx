import React from 'react'
import Data from '../Data'

const Fitness = () => {

  const FitnessData = Data.filter((item)=>item.category==="Fitness");

  return (
    <>
      {FitnessData.map((fitnessdata)=>(
        <>
          <h1 className='blog-section-head'>{fitnessdata.title}</h1>
          <img src={fitnessdata.img_url} className='blog-section-img'/>
          <p className='blog-section-desc'>{fitnessdata.description}</p>
        </>
      ))}
    </>
  )
}

export default Fitness