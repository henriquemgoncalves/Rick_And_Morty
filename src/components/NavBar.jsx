import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components'

const NavBarMod = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 2rem;
    background-color: #181818;

    img{
        width: 150px;
        height: 80px;
    }

    ul{
        display: flex;
        gap: 1.5rem;
        font-style: italic;
    }

    li{
        font-size: 1.3rem;
        font-weight: 400;
        transition: .3s;
    }

    .active{
        color: rgb(0, 253, 232);
        font-weight: 400;
        border-bottom: 1px solid rgb(0, 253, 232);
        padding: 0.2rem 0.7rem;
        border-radius: 10px;
    }
` 

const NavBar = ({className}) => {
    const location = useLocation();
    
  return (
    <NavBarMod>
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
    </NavBarMod>
  )
}

export default NavBar;