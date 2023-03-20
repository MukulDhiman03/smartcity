import React from 'react'
import './Addinfo.css'
import { FaHome } from "react-icons/fa"
import { MdOutlineFamilyRestroom } from "react-icons/md"
import { FaRegLightbulb } from "react-icons/fa"
import { FaHandHoldingWater } from "react-icons/fa"
import { FaAddressCard } from "react-icons/fa"

const Addinfo = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3' id="left">
            <div className='row' style={{"height":"30vh"}}>
              <center><FaAddressCard id='left-icon'/></center> 
            </div>
            
            <div className='row'>
              <center><h3>  <FaHome />&nbsp; &nbsp; &nbsp;Home Details</h3></center>
            </div>
            <div className='row'>
              <center><h3><MdOutlineFamilyRestroom /> &nbsp; &nbsp; &nbsp;Family Details</h3></center>
            </div>
            <div className='row'>
              <center><h3><FaRegLightbulb />&nbsp;  Electricity Details</h3></center>
            </div>
            <div className='row'>
              <center><h3><FaHandHoldingWater />&nbsp; &nbsp; &nbsp; Water Details</h3></center>
            </div>
          </div>
          <div className='col-8' id="right">
            right
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addinfo