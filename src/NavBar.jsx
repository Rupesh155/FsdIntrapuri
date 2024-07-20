import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div id='parent'>
      <Link  to='/'> 
      <span>
        Home  
      </span>
      </Link>
      <Link  to='/about'>  
      <span>
        About
      </span>
      </Link>
      <span>
        Contact
      </span>
    </div>
  )
}

export default NavBar