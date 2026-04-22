import React from 'react'
import Data from '../Data'

const Bollywood = () => {

  const BollywoodData = Data.filter((item)=>item.category==="Bollywood");

  return (
    <>
      {BollywoodData.map((bollydata)=>(
        <>
          <h1>{bollydata.title}</h1>
          <img src={bollydata.img_url}/>
          <p>{bollydata.description}</p>
        </>
      ))}
    </>
  )
}

export default Bollywood