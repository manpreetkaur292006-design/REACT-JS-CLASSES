import React from 'react'
import Data from '../Data'

const Hollywood = () => {

  const HollywoodData = Data.filter((item)=>item.category==="Hollywood");

  return (
    <>
      {HollywoodData.map((hollydata)=>(
        <>
          <h1>{hollydata.title}</h1>
          <img src={hollydata.img_url}/>
          <p>{hollydata.description}</p>
        </>
      ))}
    </>
  )
}

export default Hollywood