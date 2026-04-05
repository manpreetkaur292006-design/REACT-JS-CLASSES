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
                        <li><a href="#hero-section-id" className='nav-link'>Home</a></li>
                        <li><a href="#feature-cards-section-id" className='nav-link'>About</a></li>
                        <li><a href="#practices-section-id" className='nav-link'>Practices</a></li>
                        <li><a href="#resource-section-id" className='nav-link'>Resources</a></li>
                        <li><a href="#contact-section-id" className='nav-link'>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Navbar