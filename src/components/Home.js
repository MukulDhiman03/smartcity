import React from 'react'
import "../css/Home.css"
import Articles from './Articles'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='container-fluid section'>
        <div className='row'>
          <div className='col-12 right'>
            <h1>Management of smart cities.</h1>
            <p>An initiative to coordinate, integrate and control different city services with transparency, efficiency and privacy.</p>
            <NavLink to="/login" style={{textDecoration: 'none'}}><button className="button">Get started</button></NavLink>
          </div>
        </div>
      </div>
      <Articles />
    </>
  )
}

export default Home