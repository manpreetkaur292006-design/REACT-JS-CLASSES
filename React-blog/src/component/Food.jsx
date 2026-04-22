import React from 'react'
import Data from '../Data'

const Food = () => {

  const FoodData = Data.filter((item)=>item.category==="Food");

  return (
    <>
      {FoodData.map((fooddata)=>(
        <>
          <h1 className='blog-section-head'>{fooddata.title}</h1>
          <img src={fooddata.img_url} className='blog-section-img'/>
          <p className='blog-section-desc'>{fooddata.description}</p>
        </>
      ))}
    </>
  )
}

export default Food