import React, { useEffect, useState } from 'react'
import axios from 'axios'
import api from "../../../api"
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const HomeDetails = () => {
  const [houseno, setHouseNo] = useState("");
  const [ownername, setOwnername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [noOfMember, setnoOfMember] = useState("");
  const [noOfRooms, setnoOfRooms] = useState("");
  const [areaOfHouse, setAreaOfHouse] = useState("");
  const [noOfRoomsOnRent, setnoOfRoomsOnRent] = useState("");
  const [noOfVehicles, setnoOfVehicles] = useState("");
  const [ownerType, setOwnerType] = useState("");
  const [society, setSociety] = useState("");
  const [allsocieties, setAllScocities] = useState([])

  const [contacterror, setContactError] = useState(null);
  const [ownererror, setOwnerError] = useState(null);

  const nameRegex = /^[a-zA-Z]{05,25}$/;
  const contactRegex = /^\d{10}$/;

  const validation = () => {
    let bool = true;
    if (!nameRegex.test(ownername)) {
      setOwnerError("Only alphabets are allowed!!!");
      bool = false;
    }
    else {
      setOwnerError(null);
    }
    if (!contactRegex.test(contact)) {
      setContactError("Contacts should be of length 10 digits!!!");
      bool = false;
    }
    else {
      setContactError(null);
    }

    return bool;
  }


  const sendEmail = async (password) => {
    const templateParams = {
      to_email: email,
      from_name: 'Smartcity Application',
      to_name: ownername,
      password: password,
      message: 'This is a mendatory step otherwise you will loose your account',
      // Add more template parameters as needed
    };

    await emailjs.send(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, templateParams, process.env.REACT_APP_YOUR_USER_ID)
      .then((result) => {
        toast.success('Email is sent to user');
      }, (error) => {
        toast.error('Oops... ' + JSON.stringify(error));
      });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validation()) {
      toast.error("Please Enter correct details");
      return false;
    }

    let homeDetailsObj = {
      houseNo: houseno,
      ownerName: ownername,
      ownerPhone: contact,
      numOfHouseMembers: noOfMember,
      ownerEmail: email,
      numOfRooms: noOfRooms,
      numOfRoomsOnRent: noOfRoomsOnRent,
      areaOfHouse: areaOfHouse,
      ownerType: ownerType,
      society: society,
      numOfVehicles: noOfVehicles
    }
    var password = ""
    await axios.post(`${api}/employee/add/home`, homeDetailsObj).then((res) => {
      password = res.data.password
      sendEmail(password);
      toast.success("User is added successfully")
    }).catch((err) => {
      toast.error("Something went wrong")
      console.log(err);
    })
  }
  useEffect(() => {
    async function getAllSociety() {
      await axios.get(`${api}/employee/get/societies/all`).then((res) =>
        setAllScocities(res.data)).catch((err) => {
          console.log("error is ", err)
        })
    }
    getAllSociety()
  }, [])





  const onHouseNoChange = (e) => {
    setHouseNo(e.target.value);
  }

  const onOwnernameChange = (e) => {
    setOwnername(e.target.value);
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const onContactChange = (e) => {
    setContact(e.target.value);
  }

  const onnoOfMemberName = (e) => {
    setnoOfMember(e.target.value);
  }

  const onnoOfRoomsChange = (e) => {
    setnoOfRooms(e.target.value);
  }

  const onAreaOfHouseChange = (e) => {
    setAreaOfHouse(e.target.value);
  }

  const onNoOfRoomsOnRentChange = (e) => {
    setnoOfRoomsOnRent(e.target.value);
  }

  const onNoOfVehiclesChange = (e) => {
    setnoOfVehicles(e.target.value);
  }

  const onOwnerTypeChange = (e) => {
    setOwnerType(e.target.value);
  }

  const onSocetyChange = (e) => {
    setSociety(e.target.value);
  }

  return (
    <div>
      <div>
        <h1 className='text-center'>Enter Home Details</h1>
        <Toaster position='top-right' />
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <div className='container'>
            <div className='row'>

              {/* house no */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >House Number:</label>
                  <input type="text" name="houseno" value={houseno} onChange={onHouseNoChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* owner name */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Owner Name:</label>
                  <input type="text" name="ownername" value={ownername} onChange={onOwnernameChange} className="form-control form-control-lg" />
                </div>
                {ownererror && <div style={{ color: "red" }}>{ownererror}</div>}
              </div>

              {/* owner email */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Owner Email:</label>
                  <input type="email" name="email" value={email} onChange={onEmailChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/*  owner contact  */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Owner Contact:</label>
                  <input type="tel" name="contact" value={contact} onChange={onContactChange} className="form-control form-control-lg" />
                </div>
                {contacterror && <div style={{ color: "red" }}>{contacterror}</div>}
              </div>

              {/* Number of house members */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Number of house members:</label>
                  <input type="number" name="noOfMember" min="1" value={noOfMember} onChange={onnoOfMemberName} className="form-control form-control-lg" />
                </div>
              </div>

              {/* number of rooms */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Number of rooms:</label>
                  <input type="number" name="noOfRooms" min="1" value={noOfRooms} onChange={onnoOfRoomsChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* number of rooms on rent*/}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >No of rooms on rent:</label>
                  <input type="number" name="noOfRooms" min="0" value={noOfRoomsOnRent} onChange={onNoOfRoomsOnRentChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* number of vehicles*/}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >No of vehicles:</label>
                  <input type="number" name="noOfVehicles" min="0" value={noOfVehicles} onChange={onNoOfVehiclesChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* area of house */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Area of house:</label>
                  <input type="number" name="areaOfHouse" value={areaOfHouse} onChange={onAreaOfHouseChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* owner type */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Owner type:</label>
                  <input type="text" name="ownerType" value={ownerType} onChange={onOwnerTypeChange} className="form-control form-control-lg" />
                </div>
              </div>

              {/* society  */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label htmlFor="society">Society:</label>
                  <select name="society" id="society" onChange={onSocetyChange}>
                    {allsocieties.map((item, index) => (
                      <option key={index} value={item._id}>{item.societyName}</option>
                    ))}
                  </select>
                </div>
              </div>


              <div className="d-flex justify-content-center pt-3">
                <button type="submit" className="btn btn-dark btn-lg ms-2" >Submit form</button>
              </div>

            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default HomeDetails