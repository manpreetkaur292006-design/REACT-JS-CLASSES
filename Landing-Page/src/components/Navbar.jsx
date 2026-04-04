import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <>
        <header className='header'>
            <div className='title'>
                <img src={logo} alt="Inner Peace Logo" className='logo' />
                <h1>Inner Peace</h1>
            </div>

            <div className='navbar'>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Practices</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Navbar