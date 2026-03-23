import React from 'react'
import Navbar from './Navbar'
import "./App.css"
import About from './components/About'

const App = () => {
  return (
    <>
    <Navbar/> 
    <h1>This is app component.</h1>
    <About/>
    </>
  )
}

export default App