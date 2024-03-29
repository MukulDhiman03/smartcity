import React, { useState } from 'react'


const SocietyDetails = () => {
  const submitHandler = (e) => {
    e.preventDefault();

  }


  const [societyno, setSocietyno] = useState("");
  const [societyname, setSocietyName] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [street, setStreet] = useState("");
  const [state, setState] = useState("");


  const onSocietyNoChange = (e) => {
    setSocietyno(e.target.value);
    console.log(e.target.value);
  }

  const onSocietyNameChange = (e) => {
    setSocietyName(e.target.value);
    console.log(e.target.value);
  }

  const onCityChange = (e) => {
    setCity(e.target.value);
    console.log(e.target.value);
  }

  const onPinChange = (e) => {
    setPincode(e.target.value);
    console.log(e.target.value);
  }

  const onStreetChange = (e) => {
    setStreet(e.target.value);
    console.log(e.target.value);
  }

  const onStateChange = (e) => {
    setState(e.target.value);
    console.log(e.target.value);
  }


  return (
    <div>
      <div>
        <h1 className='text-center'>Enter Society Details</h1>
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <div className='container'>
            <div className='row'>

              {/* society no */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Society No:</label>
                  <input type="text" name="societyno" value={societyno} onChange={onSocietyNoChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* society name */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Society Name:</label>
                  <input type="text" name="societyname" value={societyname} onChange={onSocietyNameChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* city  */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >City:</label>
                  <input type="text" name="city" value={city} onChange={onCityChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* pincode */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Pincode:</label>
                  <input type="text" name="pincode" value={pincode} onChange={onPinChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* street */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Street:</label>
                  <input type="text" name="street" value={street} onChange={onStreetChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* state  */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >State:</label>
                  <input type="text" name="state" value={state} onChange={onStateChange} className="form-control form-control-lg" />
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

export default SocietyDetails