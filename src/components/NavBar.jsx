import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'

const NavBar = ({className}) => {
    const location = useLocation();
    
  return (
    <nav className="navbar">
        <Link to={`/`} >
            <img src='./r_m.png' alt=''/>
        </Link>
        <ul>
            <li>
                <Link to={`/`} className={location.pathname === '/' ? 'active' : ''}>
                    Home
                </Link>
            </li>
            <li>
                <Link to={`/about`} className={location.pathname === '/about' ? 'active' : ''}>
                    About
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar;