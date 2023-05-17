import React,{useState} from 'react'
import axios from "axios";

const ElectricityDetails = () => {





  const [meterno, setmeterno] = useState("");
  const [meterpower, setmeterpower] = useState("");
  const [holdername, setholdername] = useState("");
  const [corporation, setCorporation] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [houseno, setHouseNo] = useState("");
  const [phonenumbererror, setPhoneNumberError] = useState(null);


  const phonenumberRegex = /^\d{10}$/;

  const validation = () => {
    let bool = true;
    if (!phonenumberRegex.test(phonenumber)) {
      setPhoneNumberError("Contacts should be of length 10 digits!!!")
      bool = false;
    }
    else {
      setPhoneNumberError(null);
    }
    return bool;
  }

  const setValues = (obj) => {
    obj = {
      meterNumber: meterno,
      meterPower: meterpower,
      accountHolderName: holdername,
      accountHolderPhoneNumber: phonenumber,
      powerCorporationName: corporation,
      houseNo: houseno,
    }
    return obj;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validation()) {
      alert("Please Enter correct details");
      return false;
    }
    else {
      console.log("Submitted");
    }

    var electricityDetailsObj = setValues(electricityDetailsObj);

    // console.log("hello" + electricityDetailsObj.accountHolderName);
  }


  const onMeterNoChange = (e) => {
    setmeterno(e.target.value);
    console.log(e.target.value);
  }

  const onMeterPowerChange = (e) => {
    setmeterpower(e.target.value);
    console.log(e.target.value);
  }

  const onHolderNameChange = (e) => {
    setholdername(e.target.value);
    console.log(e.target.value);
  }

  const onPhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    console.log(e.target.value);
  }

  const onCorporationChange = (e) => {
    setCorporation(e.target.value);
    console.log(e.target.value);
  }

  const onHouseNoChange = (e) => {
    setHouseNo(e.target.value);
  }


  return (
    <div>
      <div>
        <h1 className='text-center'>Enter Electricity Details</h1>
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <div className='container'>
            <div className='row'>

              {/* meter no */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Meter No:</label>
                  <input type="number" name="meterno" value={meterno} min="1" onChange={onMeterNoChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* meterpower */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Meter Power:</label>
                  <input type="number" name="meterpower" min="1" value={meterpower} onChange={onMeterPowerChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* holdername */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Holder Name:</label>
                  <input type="text" name="holdername" value={holdername} onChange={onHolderNameChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* phone number */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Phone Number:</label>
                  <input type="tel" name="pincode" value={phonenumber} onChange={onPhoneNumberChange} className="form-control form-control-lg" />
                </div>
                {phonenumbererror && <div style={{ color: "red" }}>{phonenumbererror}</div>}
              </div>

              {/* corporationname */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Corporation Name:</label>
                  <input type="text" name="corporation" value={corporation} onChange={onCorporationChange} className="form-control form-control-lg" />
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

export default ElectricityDetails