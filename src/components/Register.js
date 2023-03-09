

import React from 'react'
import { Field, Formik, ErrorMessage } from 'formik'
import * as yup from "yup";
import "../css/Register.css"
import img from "../img/register.webp"



const validateSchema = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().required("Email is required"),
    gender: yup.string().required("Choose your gender"),
    phonenumber: yup.number().min(1000000000, "Invalid phone number").max(9999999999, "Invalid phone number").required("Phone number is must!"),
    address: yup.string().required("Yeh to batao rehte kaha ho"),
    adhaarcard: yup.number().required("You left this field, aise nhi chalega"),

});

const Register = () => {
    return (
        <section className="h-100 bg-dark">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card card-registration my-4">
                            <div className="row g-0">
                                <div className="col-xl-6 d-none d-xl-block">
                                    <img src={img}
                                        alt="not found" className="img-fluid"
                                        style={{ borderTopLeftRadius: "0.25rem", borderBottomLeftRadius: "0.25rem" }}
                                    />
                                </div>

                                {/* Register form starts */}

                                <Formik validationSchema={validateSchema} initialValues={{
                                    firstName: "", lastName: "", email: "", gender: "", phonenumber: "",
                                    adhaarcard: "", address: ""
                                }} >

                                    <div className="col-xl-6" >
                                        <div className="card-body p-md-5 text-black">
                                            <h3 className="mb-5 text-uppercase">Register yourself here</h3>


                                            {/* first name and last name*/}
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="form-label">First name</label>
                                                        <Field type="text" name="firstName" className="form-control form-control-lg" />
                                                        <div className='errorMsg' >
                                                            <ErrorMessage name='firstName' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="form-label">Last name</label>
                                                        <Field type="text" name='lastName' className="form-control form-control-lg" />
                                                        <div className='errorMsg' >
                                                            <ErrorMessage name='lastName' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            {/* email address  */}
                                            <div className="form-outline mb-4">
                                                <label className="form-label" >Email</label>
                                                <Field type="email" name="email" className="form-control form-control-lg" />
                                                <div className='errorMsg' >
                                                    <ErrorMessage name='email' />
                                                </div>
                                            </div>


                                            {/* gender  */}
                                            <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                                                <h6 className="mb-0 me-4">Gender: </h6>
                                                <div className="form-check form-check-inline mb-0 me-4">
                                                    <label className="form-check-label">Female</label>
                                                    <Field className="form-check-input" name="gender" type="radio"
                                                        value="option1" />
                                                </div>
                                                <div className="form-check form-check-inline mb-0 me-4">
                                                    <Field className="form-check-input" name="gender" type="radio"
                                                        value="option2" />
                                                    <label className="form-check-label"  >Male</label>
                                                </div>

                                                <div className="form-check form-check-inline mb-0">
                                                    <Field className="form-check-input" name="gender" type="radio"
                                                        value="option3" />
                                                    <label className="form-check-label" >Other</label>
                                                </div>
                                                <div className='errorMsg' >
                                                    <ErrorMessage name='gender' />
                                                </div>

                                            </div>

                                            {/* contact number */}

                                            <div className="form-outline mb-4">
                                                <label className="form-label" >Contact Number</label>
                                                <Field type="tel" name="phonenumber" className="form-control form-control-lg" />
                                                <div className='errorMsg' >
                                                    <ErrorMessage name='phonenumber' />
                                                </div>
                                            </div>

                                            {/* address */}
                                            <div class="form-outline mb-4">
                                                <label class="form-label" >Address</label>
                                                <Field type="text" name='address' class="form-control form-control-lg" />
                                                <div className='errorMsg' >
                                                    <ErrorMessage name='address' />
                                                </div>
                                            </div>

                                            {/* adhaar card */}
                                            <div className="form-outline mb-4">
                                                <label className="form-label" >Adhaar Card</label>
                                                <Field type="number" name="adhaarcard" className="form-control form-control-lg" />
                                                <div className='errorMsg' >
                                                    <ErrorMessage name='adhaarcard' />
                                                </div>
                                            </div>



                                            <div class="d-flex justify-content-center pt-3">
                                                <button type="button" class="btn btn-light btn-lg">Reset all</button>
                                                <button type="button" class="btn btn-warning btn-lg ms-2">Submit form</button>
                                            </div>
                                        </div>
                                    </div>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Register