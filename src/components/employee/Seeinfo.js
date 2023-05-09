import React from 'react'
import "../../css/Seeinfo.css"
const Seeinfo = () => {
  return (
    <div id='info_container'>
      <h2><span>Welcome,</span> Mukul Dhiman</h2>
      <p>Berojgaar</p>
      <div id="info_topbar">
        <div className='info'>
          <p>Mukuldhiman@gmail.com</p>
          <p>9917079890</p>
        </div>
        <div className='info'>
          <p>AIZP46849D</p>
          <p>krishna nagar lane no 4, Roorkee</p>
        </div>
      </div>

      <div id="info_Section">
        <div className='container '>
          <div className='row mt-3'>
            <div className='col-4'>
              <div className="card" style={{ width: "20vw" }} >
                <div className="card-body">
                  <h5 className="card-title ">Home</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-dark">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className="card" style={{ width: "20vw" }} >
                <div className="card-body">
                  <h5 className="card-title">Society</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-dark">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className="card" style={{ width: "20vw" }} >
                <div className="card-body">
                  <h5 className="card-title">Electricity</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-dark">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-4'>
              <div className="card" style={{ width: "20vw" }} >
                <div className="card-body">
                  <h5 className="card-title">Water</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-dark">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className="card" style={{ width: "20vw" }} >
                <div className="card-body">
                  <h5 className="card-title">Home</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-dark">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className="card" style={{ width: "20vw" }} >
                <div className="card-body">
                  <h5 className="card-title">Home</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-dark">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Seeinfo;