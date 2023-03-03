import React from 'react'
import "../css/Home.css"
import Articles from './Articles'
// import gif from "../img/city.mp4"

const Home = () => {
  return (
    <>
      <div className='section'>
        {/* <div className='left'>
          <video src={gif} />
        </div> */}
        <div className='right'>
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem voluptas, ut hic dolor praesentium fugit
            Atquerepellendus earum cum mollitia?</p>
          <button>Get started</button>
        </div>
      </div>
      <Articles />
    </>
  )
}

export default Home