import React from 'react'
import Data from '../Data'

const Fitness = () => {

  const FitnessData = Data.filter((item)=>item.category==="Fitness");

  return (
    <>
      {FitnessData.map((fitnessdata)=>(
        <>
          <h1>{fitnessdata.title}</h1>
          <img src={fitnessdata.img_url}/>
          <p>{fitnessdata.description}</p>
        </>
      ))}
    </>
  )
}

export default Fitness