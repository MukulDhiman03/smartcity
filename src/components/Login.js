import React from 'react'

import { NavLink } from 'react-router-dom'
import "../css/Login.css"
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as yup from "yup";
import img from "../img/login.webp"

const validationSchema = yup.object({
    email: yup.string().required("Email is required."),
    password: yup.string().required("Password is must!")
});



const Login = () => {
    return (
        <div className='vh-100'>
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={img}
                            className="img-fluid" alt='not found' />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">


                        {/* Login Form */}

                        <Formik validationSchema={validationSchema} initialValues={{ email: "", password: "" }} onSubmit={(values) => {
                            console.log(values);
                        }}>
                            <Form>


                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0"></p>
                                </div>



                                {/* email */}
                                <div className="form-outline mb-4">
                                    <label className="form-label">Email address</label>
                                    <Field type="email" name="email" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />
                                    <div className='errorMsg' >
                                        <ErrorMessage name='email' />
                                    </div>
                                </div>


                                {/* password */}

                                <div className="form-outline mb-3">
                                    <label className="form-label">Password</label>
                                    <Field name="password" type="password" className="form-control form-control-lg"
                                        placeholder="Enter password" />
                                    <div className='errorMsg'>
                                        <ErrorMessage name='password' />
                                    </div>
                                </div>



                                {/* register */}
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type='submit' className="btn btn-primary btn-lg">Login</button>
                                    <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <NavLink to="/register" className="link-danger">Register</NavLink></p>
                                </div>

                                {/* login as a user */}
                                <div className="text-center text-lg-start pt-2">
                                    <p class="small fw-bold mt-2 pt-1 mb-0"><NavLink to="/userlogin" className="link-danger">Login as a user</NavLink></p>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login