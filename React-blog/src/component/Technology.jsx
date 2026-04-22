import React from 'react'
import Data from '../Data'

const Technology = () => {

  const TechnologyData=Data.filter((item)=>item.category==="Technology");

  return (
    <>
      {TechnologyData.map((techdata)=>(
        <>
          <h1>{techdata.title}</h1>
          <img src={techdata.img_url}/>
          <p>{techdata.description}</p>
        </>
      ))}
    </>
  )
}

export default Technology