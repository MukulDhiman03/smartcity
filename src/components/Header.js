import React from 'react'
import { NavLink } from 'react-router-dom';
import "../css/Header.css"

const Header = () => {
    return (
        <nav>
            <div className='logo'>
                LOGO
            </div>
            <ul>
                <li><NavLink className="nav-link" to="/login">LogIn</NavLink></li>
                <li><NavLink className="nav-link" to="/">Home</NavLink></li>
                <li><NavLink className="nav-link" to="/about">About</NavLink></li>
                <li><NavLink className="nav-link" to="/profile">Profile</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header