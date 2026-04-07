import React, { useState } from 'react'

const UseStateOne = () => {
    const [count,setCount] = useState(0)
    console.log("count",count) // 0
    function increase(){
        // count = count + 1
        setCount(count+1)
    }
  return (
    <>
    <div>UseStateOne</div>
    <h1>Count : {count}</h1>
    <button onClick={increase}>Click</button>
    </>
  )
}

export default UseStateOne