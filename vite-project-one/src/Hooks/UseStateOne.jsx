import React, { useState } from 'react'

const UseStateOne = () => {
    const [count,setCount] = useState(0)
    console.log("count",count) // 0
    function increase(){
        // count = count + 1
        setCount(count+1)
    }
    function decrease(){
        // count = count - 1 
        setCount(count-1)
    }
    function reinitialize(){
        // count = 0
        setCount(0)
    }
  return (
    <>
    <div>UseStateOne</div>
    <h1>Count : {count}</h1>
    <button onClick={increase}>Increase</button>   
    // or in place of {increase} we can write this arrow function 
    // {()=>setCount(count+1)}
    <button onClick={reinitialize}>ReInitialize</button>
    <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default UseStateOne