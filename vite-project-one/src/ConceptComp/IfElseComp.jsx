import React from 'react'

const IfElseComp = () => {
    const isLoggedIn=false;  
  return (
    <>
    <div>
        {isLoggedIn ? <h1>Khatam..Tata..Bye-Bye</h1>:<h1>Welcome to Karachi</h1>}
    </div>
    </>
  )
}

export default IfElseComp