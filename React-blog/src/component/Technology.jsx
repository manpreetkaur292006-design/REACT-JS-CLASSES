import React from 'react'
import Data from '../Data'

const Technology = () => {

  const TechnologyData=Data.filter((item)=>item.category==="Technology");

  return (
    <>
      {TechnologyData}
    </>
  )
}

export default Technology