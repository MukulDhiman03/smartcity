import React from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as yup from "yup";
import img from "../../img/login.webp";
import { NavLink } from 'react-router-dom'


const validationSchema = yup.object({
    houseno: yup.number().required("Email is required."),
    password: yup.string().required("Password is must!")
});


const Userlogin = () => {
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

                        <Formik validationSchema={validationSchema} initialValues={{ houseno: "", password: "" }} onSubmit={(values) => {
                            console.log(values);
                        }}>
                            <Form>
                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0"></p>
                                </div>

                                {/* email */}
                                <div className="form-outline mb-4">
                                    <label className="form-label">House no</label>
                                    <Field type="email" name="houseno" className="form-control form-control-lg"
                                        placeholder="Enter a valid house number" />
                                    <div className='errorMsg' >
                                        <ErrorMessage name='houseno' />
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
                                    <button type='submit' className="btn btn-dark btn-lg">Login</button>
                                </div>

                                {/* login as a user */}
                                <div className="text-center text-lg-start pt-2">
                                    <p class="small fw-bold mt-2 pt-1 mb-0"><NavLink to="/login" className="link-danger">Login as a employee</NavLink></p>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userlogin