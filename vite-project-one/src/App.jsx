import React from 'react'
import Navbar from './Navbar'
import "./App.css"
import About, {Demo} from './components/About'

import {add,subtract} from './components/Math';
import Count from './components/Count';
import Parent from './propsPassing/Parent';
import IfElseComp from './ConceptComp/IfElseComp';
import UseStateOne from './Hooks/UseStateOne';
import MultiCounter from './Hooks/MultiCounter';


// console.log(add(2,3));  
// console.log(subtract(5,2));
// yeh statement yahan nahi likh sakte otherwise infinite loop 
// chal jayega ise App ke ander he likna hai

const App = () => {
  // yahan pe hamara hooks use hoga top level per
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
    <IfElseComp/>
    <UseStateOne/>
    <MultiCounter/>
   </>
  )
}

export default App