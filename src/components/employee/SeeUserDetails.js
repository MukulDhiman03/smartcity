import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import api from "../../api"
import toast, { Toaster } from 'react-hot-toast';

const SeeUserDetails = () => {
  const [society, setAllScocities] = useState([])
  const [user, setUser] = useState([])
  const [houseNo, setHouseNo] = useState("")
  const [selectedSociety, setSelectedSociety] = useState("")
  const [houseDetail, setHouseDetail] = useState([])
  const [waterDetail, setWaterDetail] = useState([])
  const [electricityDetail, setElectricityDetail] = useState([])

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
    if(selectedSociety)
    {
      getAllUser()
    }
  }, [selectedSociety])

  useEffect(() => {
    async function getHouseDetail() {
      await axios.get(`${api}/employee/get/home/${houseNo}`).then((res) =>
        setHouseDetail(res.data)).catch((err) => {
          console.log("error is ", err)
        })
    }
    if(houseNo){
      getHouseDetail()
    }
  }, [houseNo])
  function handleHomeChange(e){
    setHouseNo(e.target.value);
  }
  function handleSelectedSociety(e){
    setSelectedSociety(e.target.value);
  }
  return (
    <div className='container'>
      {/* top section */}
      <div className='row d-flex justify-content-center'>

        <div className='col-5'>
          {/* select society */}
          <form>
            <label for="society">Choose a society:</label>
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
            <label for="user">Choose a user:</label>
            <select name="user" id="user" onChange={handleHomeChange}>
              {user.map((item, index) => (
                <option key={index} value={item.houseNo}>{item.ownerName}</option>
              ))}
            </select>
          </form>
        </div>
        <div>
        <li>House no is {houseDetail.houseNo}</li>
        <li>owner name is {houseDetail.ownerName}</li>
        <li>owner email is {houseDetail.ownerEmail}</li>
        <li>society is {houseDetail.society?houseDetail.society.societyName:""}</li>
        </div>
      </div>

      {/* mid section
      <div className='row'>
        <div className='col-3'>
          Personal
        </div>
        <div className='col-3'>
          Water
        </div>
        <div className='col-3'>
          Electricity
        </div>
      </div>

       bottom section 
      <div className='row'>
        <div className='col-3'>
          Personal
        </div>
        <div className='col-3'>
          Water
        </div>
        <div className='col-3'>
          Electricity
        </div>
      </div> */}
    </div>
  )
}

export default SeeUserDetails