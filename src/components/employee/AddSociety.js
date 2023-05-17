import React, { useState } from 'react'




const AddSociety = () => {
  const [societynumber, setSocietyNumber] = useState("");
  const [societyname, setSocietyName] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [street, setStreet] = useState("");
  const [state, setState] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();
    let societyObj = {
      societyNumber: societynumber,
      societyName: societyname,
      city: city,
      pincode: pincode,
      street: street,
      state: state,
    }
  }


  const onSocietyNameChange = (e) => {
    setSocietyName(e.target.value);
  }

  const onSocietyNumberChange = (e) => {
    setSocietyNumber(e.target.value);
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
        <h1 className='text-center'>Enter your residential address</h1>
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <div className='container'>
            <div className='row'>

              {/* society name*/}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Society Name:</label>
                  <input type="text" name="societyname" value={societyname} onChange={onSocietyNameChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* society Number*/}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Society Number:</label>
                  <input type="text" name="societynumber" value={societynumber} onChange={onSocietyNumberChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* street */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Street:</label>
                  <input type="text" name="street" value={street} onChange={onStreetChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* city */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >City:</label>
                  <input type="text" name="city" value={city} onChange={onCityChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* pin code */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Pincode:</label>
                  <input type="text" name="pincode" value={pincode} onChange={onPinChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* state */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >State:</label>
                  <input type="text" name="state" value={state} onChange={onStateChange} className="form-control form-control-lg" />
                </div>
              </div>



              <div class="d-flex justify-content-center pt-3">
                <button type="button" class="btn btn-dark btn-lg ms-2">Submit form</button>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default AddSociety