
import React, { useEffect, useState } from 'react'
import "../../css/Seeinfo.css"
import axios from 'axios'
import api from '../../api'


const Seeinfo = () => {

  const [homeData, sethomeData] = useState([]);
  // const [waterData, setwaterData] = useState([]);

  const getHomeValues = async () => {
    await axios.get(`${api}/employee/get/homes/`).then((res) =>
      sethomeData(res.data[0]))
  }

  // const getWaterValues = async () => {
  //   await axios.get(`${api}/employee/get/details/water`).then((res) => {
  //     console.log(res);
  //   })
  // }


  useEffect(() => {
    getHomeValues();
    // getWaterValues();
  }, [])


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
          <div className='row mt-3 d-flex justify-content-between'>
            <div className='col-6'>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Home</h5>
                  <p className="card-text">Owner Name - {homeData.ownerName}</p>
                  <p className="card-text">Owner Email - {homeData.ownerEmail}</p>
                  {/* <p className="card-text">Society Name - {homeData.society.societyName}</p> */}
                  <p className="card-text">House No - {homeData.houseNo}</p>
                  <p className="card-text">Owner Contact - {homeData.ownerPhone}</p>
                  <p className="card-text">Number of house members - {homeData.numOfHouseMembers}</p>
                  <p className="card-text">Number of rooms - {homeData.numOfRooms}</p>
                  <p className="card-text">Area of house - {homeData.areaOfHouse}</p>
                  <p className="card-text">No of rooms on rent - {homeData.numOfRoomsOnRent}</p>
                  <p className="card-text">No of vehicles - {homeData.numOfVehicles}</p>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='row'>
                <div className='col-6'>
                  <div className="card"  >
                    <div className="card-body">
                      <h5 className="card-title">Electricity</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="/" className="btn btn-dark">Read More...</a>
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className="card"  >
                    <div className="card-body">
                      <h5 className="card-title">Water</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="/" className="btn btn-dark">Read More...</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-3'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Seeinfo;