import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/Home.css"
import Features from './Features'

const Home = () => {
    return (
        <div className='home'>
            <div className='container-fluid homeContainer'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Management of smart cities.</h1>
                        <p>An initiative to coordinate, integrate and control different city services with transparency, efficiency and privacy.</p>
                        <NavLink to="/login"><button className="btn btn-light" ><span></span>Get started</button></NavLink>
                    </div>
                </div>
            </div>
            <Features />
        </div>
    )
}

export default Home