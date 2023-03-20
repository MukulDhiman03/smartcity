import React from 'react'
import { Field, Formik, ErrorMessage } from 'formik'
import * as yup from "yup";
import "../css/Register.css"
import { NavLink } from 'react-router-dom';
import img from "../img/register.webp"


const validateSchema = yup.object({
  fullname: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  gender: yup.string().required("Choose your gender"),
  phonenumber: yup.number().min(1000000000, "Invalid phone number").max(9999999999, "Invalid phone number").required("Phone number is must!"),
  address: yup.string().required("Enter Your address"),
  pancard: yup.number().required("Enter your pan card"),
  empid: yup.string().required("Enter your employee id"),
});

const Register = () => {
  return (
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className=" card-registration my-4">
              <div className="row g-0">

                {/* Register form starts */}
                <div class="col-xl-6 d-none d-xl-block">
                  <img src={img}
                    alt="Sample photo" class="img-fluid"
                    style={{borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem"}} />
                </div>

                <Formik validationSchema={validateSchema} initialValues={{
                  fullname: "", email: "", gender: "", phonenumber: "",
                  pancard: "", empid: ""
                }} >

                  <div className="col-xl-6" >
                    <div className="card-body p-md-5 text-black">
                      {/* first name and last name*/}
                      <div className="form-outline mb-4">
                        <label className="form-label" >Full name</label>
                        <Field type="email" name="fullname" className="form-control form-control-lg" />
                        <div className='errorMsg' >
                          <ErrorMessage name='fullname' />
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

                      {/* Employee Id*/}
                      <div className="form-outline mb-4">
                        <label className="form-label" >Employee Id</label>
                        <Field type="text" name="empid" className="form-control form-control-lg" />
                        <div className='errorMsg' >
                          <ErrorMessage name='empid' />
                        </div>
                      </div>


                      {/* Department  */}
                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                        <h6 className="mb-0 me-4">Department: </h6>
                        <div className="form-check form-check-inline mb-0 me-4">
                          <label className="form-check-label">Water</label>
                          <Field className="form-check-input" name="department" type="radio"
                            value="water" />
                        </div>
                        <div className="form-check form-check-inline mb-0 me-4">
                          <Field className="form-check-input" name="department" type="radio"
                            value="electricity" />
                          <label className="form-check-label"  >Electricity</label>
                        </div>

                        <div className="form-check form-check-inline mb-0">
                          <Field className="form-check-input" name="department" type="radio"
                            value="tax" />
                          <label className="form-check-label" >Income Tax</label>
                        </div>

                        <div className="form-check form-check-inline mb-0">
                          <Field className="form-check-input" name="department" type="radio"
                            value="health" />
                          <label className="form-check-label">Health</label>
                        </div>
                        <div className='errorMsg' >
                          <ErrorMessage name='department' />
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



                      {/* adhaar card */}
                      <div className="form-outline mb-4">
                        <label className="form-label" >Pan Card</label>
                        <Field type="number" name="pancard" className="form-control form-control-lg" />
                        <div className='errorMsg' >
                          <ErrorMessage name='pancard' />
                        </div>
                      </div>

                      <div class="d-flex justify-content-center pt-3">
                        <button type="button" class="btn btn-warning btn-lg ms-2">Submit form</button>
                      </div>

                      <div class="d-flex justify-content-center pt-3">
                        <p class="small fw-bold mt-2 pt-1 mb-0">Have already an account?<NavLink to="/login" className="btn-primary">Login</NavLink></p>
                      </div>

                    </div>
                  </div>
                </Formik>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register