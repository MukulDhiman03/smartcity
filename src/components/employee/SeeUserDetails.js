import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import api from "../../api"
// import toast, { Toaster } from 'react-hot-toast';

const SeeUserDetails = () => {
  const [society, setAllScocities] = useState([])
  const [user, setUser] = useState([])
  const [houseNo, setHouseNo] = useState("")
  const [selectedSociety, setSelectedSociety] = useState("")
  const [houseDetail, setHouseDetail] = useState([])
  const [electricityDetail, setElectricityDetail] = useState([])
  const [waterDetail, setWaterDetail] = useState([])








  useEffect(() => {
    async function getAllSociety() {
      await axios.get(`${api}/employee/get/societies/all`).then((res) =>
        setAllScocities(res.data)).catch((err) => {
          console.log("error is ", err)
        })
    }

    getAllSociety()
  }, [])
  useEffect(() => {

    async function getAllUser() {
      await axios.get(`${api}/employee/society/houses/${selectedSociety}`).then((res) =>
        setUser(res.data)).catch((err) => {
          console.log("error is ", err)
        })
    }
    if (selectedSociety) {
      getAllUser()
    }
  }, [selectedSociety])

  useEffect(() => {
    async function getHouseDetail() {
      await axios.get(`${api}/employee/get/home/${houseNo}`).then((res) => {
        setHouseDetail(res.data)
        console.log(res.data)
      })
        .catch((err) => {
          console.log("error is ", err)
        })
    }

    async function getElectricityDetails() {
      await axios.get(`${api}/employee/get/details/electricity/${houseNo}`).then((res) => {
        setElectricityDetail(res.data)
      })
        .catch((err) => {
          console.log("error is ", err)
        })
    }

    async function getWaterDetails() {
      await axios.get(`${api}/employee/get/details/water/${houseNo}`).then((res) => {
        setWaterDetail(res.data)
      })
        .catch((err) => {
          console.log("error is ", err)
        })
    }

    if (houseNo) {
      getHouseDetail()
      getElectricityDetails()
      getWaterDetails()
    }
  }, [houseNo])

  function handleHomeChange(e) {
    setHouseNo(e.target.value);
    // console.log(e.target.value);
  }
  function handleSelectedSociety(e) {
    setSelectedSociety(e.target.value);
  }

  return (
    <>
      <div className='container'>
        <div className='row d-flex justify-content-center'>

          <div className='col-5'>
            {/* select society */}
            <form>
              <label htmlFor="society">Choose a society:</label>
              <select name="society" id="society" onChange={handleSelectedSociety}>
                {society.map((item, index) => (
                  <option key={index} value={item._id}>{item.societyName}</option>
                ))}
              </select>
            </form>
          </div>


          <div className='col-5'>
            {/* select user */}
            <form>
              <label htmlFor="user1">Choose a user:</label>
              <select name="user1" id="user1" onClick={handleHomeChange}>
                {user.map((item, index) => (
                  <option key={index} value={item.houseNo}>{item.ownerName}</option>
                ))}
              </select>
            </form>
          </div>
        </div>
      </div>


      <div id='info_container'>
        <span>User Name - {houseDetail.ownerName}</span>
        <div id="info_topbar">
          <div className='info'>
            <p>{houseDetail.ownerEmail}</p>
            <p>{houseDetail.ownerPhone}</p>
          </div>
          <div className='info'>
            <p>{houseDetail.society ? houseDetail.society.city : ""}</p>
            <p>{houseDetail.society ? houseDetail.society.street : ""}</p>
          </div>
        </div>

        <div id="info_Section">
          <div className='container '>
            <div className='row mt-3 d-flex justify-content-between'>
              <div className='col-6'>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Home</h5>
                    <p className="card-text">Owner Name - {houseDetail.ownerName}</p>
                    <p className="card-text">Owner Email - {houseDetail.ownerEmail}</p>
                    {/* <p className="card-text">Society Name -{houseDetail.society.societyName} </p> */}
                    <p className="card-text">House No - {houseDetail.houseNo}</p>
                    <p className="card-text">Owner Contact - {houseDetail.ownerPhone} </p>
                    <p className="card-text">Number of house members -{houseDetail.numOfHouseMembers} </p>
                    <p className="card-text">Number of rooms -{houseDetail.numOfRooms} </p>
                    <p className="card-text">Area of house - {houseDetail.areaOfHouse} square feet</p>
                    <p className="card-text">No of rooms on rent -{houseDetail.numOfRoomsOnRent} </p>
                    <p className="card-text">No of vehicles - {houseDetail.numOfVehicles}</p>
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <div className='row'>
                  <div className='col-6'>
                    <div className="card"  >
                      <div className="card-body">
                        <h5 className="card-title">Electricity</h5>
                        <p className="card-text">Meter No -{electricityDetail.meterNumber}</p>
                        <p className="card-text">Meter Power - {electricityDetail.meterPower}</p>
                        <p className="card-text">Holder Name - {electricityDetail.accountHolderName}</p>
                        <p className="card-text">Phone Number - {electricityDetail.accountHolderPhoneNumber}</p>
                        <p className="card-text">Corporation Name - {electricityDetail.powerCorporationName}</p>
                        <p className="card-text">House No - {electricityDetail.houseNo}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className="card"  >
                      <div className="card-body">
                        <h5 className="card-title">Water</h5>
                        <p className="card-text">Bill Number -{waterDetail.billNumber} </p>
                        <p className="card-text">Water usage amount- {waterDetail.watersageAmount}</p>
                        <p className="card-text">Water source- {waterDetail.waterSource}</p>
                        <p className="card-text">Fixed Bill-{waterDetail.fixedBill}</p>
                        <p className="card-text">Bill owner name- {waterDetail.billOwnerName}</p>
                        <p className="card-text">House No-{waterDetail.houseNo}</p>
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
    </>
  )
}

export default SeeUserDetails