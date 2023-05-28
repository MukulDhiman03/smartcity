import React, { useState } from 'react'
import DisplayData from './data/DisplayData.js'
import './Addinfo.css'
import { FaHome } from "react-icons/fa"
// import { MdOutlineFamilyRestroom } from "react-icons/md"
import { FaRegLightbulb } from "react-icons/fa"
import { FaHandHoldingWater } from "react-icons/fa"
import { FaAddressCard } from "react-icons/fa"



const Addinfo = () => {

  const [state, setState] = useState("0");

  const stateHandler = (x) => {
    setState(x);
    console.log(state)
  }

  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3' id="left">
            <div className='row' style={{ "height": "30vh" }}>
              <center><FaAddressCard id='left-icon' /></center>
            </div>

            <div className='row'>
              <center><h3 onClick={() => stateHandler("1")}>  <FaHome />&nbsp; &nbsp; &nbsp;Home Details</h3></center>
            </div>
            {/* <div className='row'>
              <center><h3 onClick={() => stateHandler("2")}><MdOutlineFamilyRestroom /> &nbsp; &nbsp; &nbsp;Society Details</h3></center>
            </div> */}
            <div className='row'>
              <center><h3 onClick={() => stateHandler("3")}><FaRegLightbulb />&nbsp;  Electricity Details</h3></center>
            </div>
            <div className='row'>
              <center><h3 onClick={() => stateHandler("4")}> <FaHandHoldingWater />&nbsp; &nbsp; &nbsp; Water Details</h3></center>
            </div>
            <div className='row'>
              <center><h3 onClick={() => stateHandler("5")}>&nbsp; &nbsp; &nbsp; Add Water Transaction</h3></center>
            </div>
            <div className='row'>
              <center><h3 onClick={() => stateHandler("6")}>&nbsp; &nbsp; &nbsp; Add Electricity Transaction</h3></center>
            </div>
          </div>
          <div className='col-8' id="right">
            <DisplayData state={state} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addinfo