import React from 'react'
import { NavLink } from 'react-router-dom';
import "../css/Header.css"
// import { GiHamburgerMenu } from "react-icons/gi"

const Header = () => {
    return (
        <div>
            <nav>
                {/* <input type="checkbox" id="click" />
                <label htmlFor="click" className="menu-btn">
                    <GiHamburgerMenu/>
                </label> */}
                <ul>
                    <li>
                        <NavLink className="links" style={({ isActive }) => (isActive ? {
                            backgroundColor: "white", color: "black"
                        } : {})} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="links" style={({ isActive }) => (isActive ? {
                            backgroundColor: "white", color: "black"
                        } : {})} to="/login">LogIn</NavLink>
                    </li>
                    <li>
                        <NavLink className="links" style={({ isActive }) => (isActive ? {
                            backgroundColor: "white", color: "black"
                        } : {})} to="/seeinfo">See Information</NavLink>
                    </li>
                    <li>
                        <NavLink className="links" style={({ isActive }) => (isActive ? {
                            backgroundColor: "white", color: "black"
                        } : {})} to="/adduser">Add user</NavLink>
                    </li>
                    <li>
                        <NavLink className="links" style={({ isActive }) => (isActive ? {
                            backgroundColor: "white", color: "black"
                        } : {})} to="/addinfo">Add info</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header