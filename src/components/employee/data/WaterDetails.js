import axios from 'axios';
import React, { useState } from 'react'
import api from '../../../api';


const WaterDetails = () => {
  const [billNumber, setBillNumber] = useState("");
  const [watersageAmount, setwatersageAmount] = useState("");
  const [waterSource, setwaterSource] = useState("");
  const [fixedBill, setfixedBill] = useState("");
  const [billOwnerName, setbillOwnerName] = useState("");
  const [sewageDisposalMethod, setsewageDisposalMethod] = useState("");
  const [houseno, setHouseNo] = useState("");



  const submitHandler = (e) => {
    e.preventDefault();
    let waterDetailsObj = {
      billNumber: billNumber,
      watersageAmount: watersageAmount,
      waterSource: waterSource,
      fixedBill: fixedBill,
      billOwnerName: billOwnerName,
      sewageDisposalMethod: sewageDisposalMethod,
      houseNo: houseno,
    }

    axios.post(`${api}/employee/add/details/water`, waterDetailsObj);
  }

  


  const onBillNumberChange = (e) => {
    setBillNumber(e.target.value);
  }

  const onWaterUsagAamountChange = (e) => {
    setwatersageAmount(e.target.value);
  }

  const onWaterSourceChange = (e) => {
    setwaterSource(e.target.value);
  }

  const onFixedBillChange = (e) => {
    setfixedBill(e.target.value);
  }

  const onBillOwnerName = (e) => {
    setbillOwnerName(e.target.value);
  }

  const onSewageDisposalMethodChange = (e) => {
    setsewageDisposalMethod(e.target.value);
  }

  const onHouseNoChange = (e) => {
    setHouseNo(e.target.value);
  }



  return (
    <div>
      <div>
        <h1 className='text-center'>Enter Water Details</h1>
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <div className='container'>
            <div className='row'>

              {/*billNumber */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Bill Number:</label>
                  <input type="number" name="billNumber" value={billNumber} min="1" onChange={onBillNumberChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* waterusageamount */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Water Usage Amount:</label>
                  <input type="number" name="watersageAmount" value={watersageAmount} min="1" onChange={onWaterUsagAamountChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* waterSource */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Water Source:</label>
                  <input type="text" name="waterSource" value={waterSource} onChange={onWaterSourceChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* fixedBill  */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Fixed Bill:</label>
                  <input type="text" name="fixedBill" value={fixedBill} onChange={onFixedBillChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* billOwnerName */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Bill Owner Name:</label>
                  <input type="text" name="billOwnerName" value={billOwnerName} onChange={onBillOwnerName} className="form-control form-control-lg" />
                </div>
              </div>

              {/* sewageDisposalMethod  */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Sewage Disposal Mehod:</label>
                  <input type="text" name="sewageDisposalMethod" value={sewageDisposalMethod} onChange={onSewageDisposalMethodChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* house no */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >House Number:</label>
                  <input type="text" name="houseno" value={houseno} onChange={onHouseNoChange} className="form-control form-control-lg" />
                </div>
              </div>




              <div class="d-flex justify-content-center pt-3">
                <button type="submit" class="btn btn-dark btn-lg ms-2" >Submit form</button>
              </div>

            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default WaterDetails