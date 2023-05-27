import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../css/Login.css"
import img from "../img/login.webp"
import axios from 'axios'
import api from "../api"
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
    const [empid, setEmpId] = useState("");
    const [password, setPassword] = useState("");


    const onEmpIdChange = (e) => {
        setEmpId(e.target.value);
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }




    const submitHandler = async (e) => {
        e.preventDefault();

        let empLoginObj = {
            empId: empid,
            password: password,
        }
        await axios.post(`${api}/auth/login/`, empLoginObj).then((res) => {
            if (res.status === 200) {
                toast.success("Login successfully")
                localStorage.setItem("employee", res.data.employee);
            }
            else {
                toast.error("Somthing went wrong")
            }
        }).catch((err) => {
            toast.error("Somthing went wrong")
            console.log(err);
        })

    }


    return (
        <div className='vh-100'>
            <div className="container-fluid h-custom">
                <Toaster/>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={img} className="img-fluid" alt='not found' />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">


                        {/* Login Form */}
                        <form onSubmit={submitHandler}>


                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0"></p>
                            </div>



                            {/* email */}
                            <div className="form-outline mb-4">
                                <label className="form-label">Employee Id:</label>
                                <input type="number" name="empid" value={empid} onChange={onEmpIdChange} className="form-control form-control-lg"
                                    placeholder="Enter a valid employee id" />
                            </div>


                            {/* password */}

                            <div className="form-outline mb-3">
                                <label className="form-label">Password</label>
                                <input name="password" type="password" value={password}
                                    onChange={onPasswordChange} className="form-control form-control-lg"
                                    placeholder="password" />
                            </div>



                            {/* register */}
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type='submit' className="btn btn-dark btn-lg">Login</button>

                                <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <NavLink to="/register" className="link-danger">Register</NavLink></p>
                            </div>

                            {/* login as a user */}
                            <div className="text-center text-lg-start pt-2">
                                <p class="small fw-bold mt-2 pt-1 mb-0"><NavLink to="/userlogin" className="link-danger">Login as a user</NavLink></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login