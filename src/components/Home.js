import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/Home.css"
import Features from './Features'

const Home = () => {
    return (
        <>
        <div className='home'>

           <div className='container2'>
                       <div className='text'>
                             <h1 className='headText'>Management of smart cities.</h1>
                             <p>An initiative to coordinate, integrate and control different city services with transparency, efficiency and privacy.</p>
                             <NavLink to="/login"><button className="homeBtn" ><span></span>Get started</button></NavLink>
                       </div>

                       <div className='image'>

                      
                              <img src="/building.jpg" className="img" alt="..." />
                       

                       </div>
                 


           </div>





            
        </div>

<div>

<Features />

</div>

</>

    )
}

export default Home