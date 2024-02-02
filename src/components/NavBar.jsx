import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around', backgroundColor: "gray"}}>
        <Link style={{color: 'white', textDecoration: 'none'}} to={'/courusel'}>Courusel</Link>
        <Link style={{color: 'white', textDecoration: 'none'}} to={'/numbers'}>Number</Link>
        <Link style={{color: 'white', textDecoration: 'none'}} to={'/earth'}>Earth</Link>
        <Link style={{color: 'white', textDecoration: 'none'}} to={'/home'}>Home</Link>
    </div>
  )
}

export default NavBar