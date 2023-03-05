import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import "../css/Login.css"
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as yup from "yup";

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
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid" alt='not found' />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">


            {/* Login Form */}

            <Formik validationSchema={validationSchema} initialValues={{ email: "", password: "" }} onSubmit={(values) => {
              console.log(values);
            }}>
              <Form>
                {/* other ways to login */}

                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <Link to="https://www.facebook.com/">
                    <button type="button" className="btn btn-primary btn-floating mx-1">
                      <FaFacebookF />
                    </button>
                  </Link>
                  <Link to="https://www.twitter.com/">
                    <button type="button" className="btn btn-primary btn-floating mx-1">
                      <FaTwitter />
                    </button>
                  </Link>
                  <Link to="https://www.linkedin.com">
                    <button type="button" className="btn btn-primary btn-floating mx-1">
                      <FaLinkedin />
                    </button>
                  </Link>
                </div>


                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
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


                {/* checkout */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" for="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">Forgot password?</a>
                </div>


                {/* register */}
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type='submit' className="btn btn-primary btn-lg">Login</button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <NavLink to="/register" className="link-danger">Register</NavLink></p>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Login