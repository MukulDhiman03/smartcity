import React, { useState } from 'react'
import "../css/Register.css"
import { NavLink } from 'react-router-dom';
import img from "../img/register.webp"
import axios from 'axios';
import api from "../api"
import toast, { Toaster } from 'react-hot-toast';



const Register = () => {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [empId, setEmpId] = useState("");
  const [dept, setDept] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [nameerror, setNameError] = useState(null);
  const [phoneerror, setPhoneError] = useState(null);



  //on change handlers
  const onFullNameChange = (e) => {
    setFullName(e.target.value);
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value);

  }

  const onEmpIdChange = (e) => {
    setEmpId(e.target.value);
  }

  const onDeptChange = (e) => {
    setDept(e.target.value);
  }

  const onPhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  }

  //regex
  const nameRegex = /^[a-zA-Z]{5,50}$/;
  const phoneRegex = /^\d{10}$/;


  //form validations
  const validate = () => {
    let bool = true;
    if (!nameRegex.test(fullName)) {
      setNameError("You have enterd the wrong name!!")
      bool = false;
    }
    else {
      setNameError(null);
    }
    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError("You have entered the wrong phone number!!");
      bool = false;
    }
    else {
      setPhoneError(null);
    }
    return bool;
  }

  async function submitHandler(e) {
    e.preventDefault();

    if (!validate()) {
      alert("Please Enter correct details");
      return false;
    }

    const registerData = {
      name: fullName,
      department: dept,
      empId: empId,
      phone: phoneNumber,
      email: email,
      password: password,
    }


    await axios.post(`${api}/auth/registration`, registerData)
      .then(function (res) {
        if (res.status === 200) {
          toast.success("You have successfully registerd");
          console.log(res);
        }
      })
      .catch(function (error) {
        toast.error("Something went wrong");
        console.log(error);
      });
  }


  return (
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <Toaster/>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className=" card-registration my-4">
              <div className="row g-0">

                {/* Register form starts */}
                <div className="col-6 d-none d-xl-block">
                  <img src={img}
                    alt="Sample" className="img-fluid"
                    style={{ borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem" }} />
                </div>

                <div className="col-6" >
                  <form onSubmit={submitHandler}>
                    <div className="card-body p-md-5 text-black">

                      {/*name*/}
                      <div className="form-outline mb-4">
                        <div>
                          <label className="form-label" >Full name</label>
                          <input type="text" name="fullName" value={fullName} onChange={onFullNameChange} className="form-control form-control-lg" required />
                        </div>
                        {nameerror && <div style={{ color: "red" }}>{nameerror}</div>}
                      </div>


                      {/* email address  */}
                      <div className="form-outline mb-4">
                        <label className="form-label" >Email</label>
                        <input type="email" name="email" value={email} onChange={onEmailChange} className="form-control form-control-lg" required />
                      </div>

                      {/* Employee Id*/}
                      <div className="form-outline mb-4">
                        <label className="form-label" >Employee Id</label>
                        <input type="text" name="empId" value={empId} onChange={onEmpIdChange} className="form-control form-control-lg" required />
                      </div>


                      {/* Department  */}
                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                        <div className="form-outline mb-4">
                          <label htmlFor="department">Department:</label>
                          <select name="dept" value={dept} id="department" onChange={onDeptChange}>
                            <option value="water">Water</option>
                            <option value="electricity">Electricity</option>
                            <option value="tax">Tax</option>
                            <option value="health">Health</option>
                          </select>
                        </div>
                      </div>


                      {/* Phone number */}
                      <div className="form-outline mb-4">
                        <div>
                          <label className="form-label" >Phone Number</label>
                          <input type="tel" name="phoneNumber" value={phoneNumber} onChange={onPhoneChange} className="form-control form-control-lg" required />
                        </div>
                        {phoneerror && <div style={{ color: "red" }}>{phoneerror}</div>}
                      </div>



                      {/* Password */}
                      <div className="form-outline mb-4">
                        <label className="form-label" >Password</label>
                        <input type="password" name="password" value={password} onChange={onPasswordChange} className="form-control form-control-lg" required />
                      </div>

                      <div className="d-flex justify-content-center pt-3">
                        <button type="submit" className="btn btn-dark btn-lg ms-2">Submit form</button>
                      </div>

                      <div className="d-flex justify-content-center pt-3">
                        <p className="small fw-bold mt-2 pt-1 mb-0">Have already an account?<NavLink to="/login" className="btn-primary">Login</NavLink></p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register