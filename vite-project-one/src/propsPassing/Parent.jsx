import React from 'react'
import Child from './Child';

const Parent = () => {
    const fullname="Manpreet Kaur";
    function Alert(){
        alert("Button Clicked");
    }
  return (
    <>
    <div>Parent</div>
    <h1>Rendered in Parent component: {fullname}</h1>
    <Child name={fullname} alert={Alert}/>
    </>
  )
}


export default Parent