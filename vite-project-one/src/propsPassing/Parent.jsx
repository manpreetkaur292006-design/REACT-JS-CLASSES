import React from 'react'
import Child from './Child';

const Parent = () => {
    const fullname="Manpreet Kaur";
  return (
    <>
    <div>Parent</div>
    <h1>Rendered in Parent component: {fullname}</h1>
    <Child name={fullname}/>
    </>
  )
}

export default Parent