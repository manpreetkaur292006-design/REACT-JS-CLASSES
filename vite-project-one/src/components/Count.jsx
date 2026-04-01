import React, { useState } from 'react'

const Count = () => {
    const [count,setCount]=useState(0);
    console.log(count);
    function handleClick(){
        count+=1;
        console.log("Clicked")
    }
    console.log(count,"After click")
  return (
    <>
    <div>Count : {count}</div>
    <button onClick={handleClick}>Click</button>
    </>
  )
}

export default Count