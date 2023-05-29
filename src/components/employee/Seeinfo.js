
import React, { useEffect, useState } from 'react'
import "../../css/Seeinfo.css"
import axios from 'axios'
import api from '../../api'
import { Link,useNavigate } from 'react-router-dom'


const Seeinfo = () => {
  var navigate=useNavigate()
  const [homeData, sethomeData] = useState([]);
  const [waterData, setwaterData] = useState([]);
  const [electricityData, setElectricity] = useState([]);
  const [houseNo,setHouseNo]=useState('')


  const getHomeValues = async () => {
    await axios.get(`${api}/employee/get/home/${houseNo}`).then((res) => {
      sethomeData(res.data)
      console.log(res.data)
    })
  }
  
  const getWaterValues = async () => {
    await axios.get(`${api}/employee/get/details/water/${houseNo}`).then((res) => {
      console.log(res.data);
      setwaterData(res.data);
    })
  }

  const getElectricityValues = async () => {
    await axios.get(`${api}/employee/get/details/electricity/${houseNo}`).then((res) => {
      console.log(res.data);
      setElectricity(res.data);
    })
  }
  useEffect(()=>{
    
    var profile=JSON.parse(localStorage.getItem('profile'))
    if(profile)
    { if(profile.houseNo)
      {
        setHouseNo(profile.houseNo);
      }
    }
    else
    {
        navigate('/userlogin')
    }
},[])


  useEffect(() => {
    if(houseNo){
    getHomeValues();
    getWaterValues();
    getElectricityValues();
    }
  }, [houseNo])


  return (
    <div id='info_container'>
      <h1>Welcome , {homeData.ownerName}</h1>
      <div id="info_topbar">
        <div className='info'>
          <p>{homeData.ownerEmail}</p>
          <p>{homeData.ownerPhone}</p>
        </div>
        <div className='info'>
          <p>{homeData.society?homeData.society.city:""}</p>
          <p>{homeData.society?homeData.society.street:""}</p>
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
                  {/* <p className="card-text">Owner Email - {homeData.ownerEmail}</p> */}
                  {/* <p className="card-text">Society Name -{homeData.society.societyName} </p> */}
                  <p className="card-text">House No -{homeData.houseNo}</p>
                  <p className="card-text">Owner Contact -{homeData.ownerPhone} </p>
                  <p className="card-text">Number of house members -{homeData.numOfHouseMembers} </p>
                  <p className="card-text">Number of rooms -{homeData.numOfRooms} </p>
                  <p className="card-text">Area of house -{homeData.areaOfHouse} square feet </p>
                  <p className="card-text">No of rooms on rent -{homeData.numOfRoomsOnRent}</p>
                  <p className="card-text">No of vehicles -{homeData.numOfVehicles} </p>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='row'>
                <div className='col-6'>
                  <div className="card"  >
                    <div className="card-body">
                      <h5 className="card-title">Electricity</h5>
                      <p className="card-text">Meter No -{electricityData.meterNumber}</p>
                      <p className="card-text">Meter Power - {electricityData.meterPower}</p>
                      <p className="card-text">Holder Name - {electricityData.accountHolderName}</p>
                      <p className="card-text">Phone Number - {electricityData.accountHolderPhoneNumber}</p>
                      <p className="card-text">Corporation Name - {electricityData.powerCorporationName}</p>
                      <p className="card-text">House No - {electricityData.houseNo}</p>
                      <Link className="btn btn-primary btn-lg ms-2" to="/showelectricitytransaction" >See Transactions..</Link>
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className="card"  >
                    <div className="card-body">
                      <h5 className="card-title">Water</h5>
                      <p className="card-text">Bill Number -{waterData.billNumber} </p>
                      <p className="card-text">Water usage amount- {waterData.watersageAmount}</p>
                      <p className="card-text">Water source- {waterData.waterSource}</p>
                      <p className="card-text">Fixed Bill-{waterData.fixedBill}</p>
                      <p className="card-text">Bill owner name- {waterData.billOwnerName}</p>
                      <p className="card-text">House No-{waterData.houseNo}</p>
                      <Link className="btn btn-primary btn-lg ms-2" to="/showwatertransaction">See Transactions..</Link>
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