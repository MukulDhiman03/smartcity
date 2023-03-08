import React from 'react'
import { NavLink } from 'react-router-dom';
import "../css/Header.css"

const Header = () => {
    return (
        <div className='container-fluid' id='nav'>
            <div className='row'>
                <div class="col-6">
                    <ul>
                        <li>
                            <NavLink className="link" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="profile">Profile</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="login">LogIn</NavLink>
                        </li>
                    </ul>
                </div>
                {/* <div className="col-4 logo">
                    <h1>SMARTCITY</h1>
                </div> */}
            </div>
        </div>

    )
}

export default Header