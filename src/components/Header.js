import React from 'react'
import { NavLink } from 'react-router-dom';
import "../css/Header.css"
// import { GiHamburgerMenu } from "react-icons/gi"

const Header = () => {
    // var navigate=useNavigate()
    var isEmployee = false
    var profile = JSON.parse(localStorage.getItem('profile'))
    if (profile) {
        isEmployee = profile.employee;
    }

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
                    {!profile && <li>
                        <NavLink className="links" style={({ isActive }) => (isActive ? {
                            backgroundColor: "white", color: "black"
                        } : {})} to="/login">Login</NavLink>
                    </li>}

                    {!isEmployee ? <li>
                        <NavLink className="links" style={({ isActive }) => (isActive ? {
                            backgroundColor: "white", color: "black"
                        } : {})} to="/seeinfo">User Profile</NavLink>
                    </li> : null
                    }
                    {isEmployee ? <li>
                        <NavLink className="links" style={({ isActive }) => (isActive ? {
                            backgroundColor: "white", color: "black"
                        } : {})} to="/dashboard">Dashboard</NavLink>
                    </li> : null}

                    {isEmployee && <li>
                        <NavLink className="links" style={({ isActive }) => (isActive ? {
                            backgroundColor: "white", color: "black"
                        } : {})} to="/seeuserdetails">User List</NavLink>
                    </li>
                    }

                    {isEmployee && <li>
                        <NavLink className="links" style={({ isActive }) => (isActive ? {
                            backgroundColor: "white", color: "black"
                        } : {})} to="/profile">Profile</NavLink>
                    </li>}

                    <li>
                        <NavLink className="links" style={({ isActive }) => (isActive ? {
                            backgroundColor: "white", color: "black"
                        } : {})} to="/logout">Logout</NavLink>
                    </li>

                    {/* <li>
                        <NavLink className="links" style={({ isActive }) => (isActive ? {
                            backgroundColor: "white", color: "black"
                        } : {})} to="/addtransaction">AddTransaction</NavLink>
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}

export default Header