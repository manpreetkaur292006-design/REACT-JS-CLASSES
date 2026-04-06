import React from 'react'
import Navbar from './Navbar'
import "./App.css"
import About, {Demo} from './components/About'

import {add,subtract} from './components/Math';
import Count from './components/Count';
import Parent from './propsPassing/Parent';


// console.log(add(2,3));  
// console.log(subtract(5,2));
// yeh statement yahan nahi likh sakte otherwise infinite loop 
// chal jayega ise App ke ander he likna hai

const App = () => {
  console.log(add(2,3));  
  console.log(subtract(5,2));
  return (
    <>
    <Navbar/> 
    <h1>This is app component.</h1>
    <Count/>
    <About/>
    <Demo/>
    <Parent/>
   </>
  )
}

export default App