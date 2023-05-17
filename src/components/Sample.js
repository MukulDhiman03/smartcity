import React from 'react'
import { Field, Formik, ErrorMessage } from 'formik'
import * as yup from "yup";
// import { useState } from 'react';


const validateSchema = yup.object({
  houseno: yup.string().required("House No"),
  ownername: yup.string().required("Please provide owner name"),
  owneremail: yup.string().required("Please provide owner's email id"),
  conatctnumber: yup.number().min(1000000000, "Invalid phone number").max(9999999999, "Invalid phone number").required("Phone number is must!"),
  members: yup.number().required(),
  rooms: yup.number().required(),
  roomsonrent: yup.number().required(),
  vehicles: yup.number().required(),
  income: yup.number().required(),
});



const HomeDetails = () => {
  return (
    <div>
      <div>
        <h1 className='text-center'>Enter House Details</h1>
      </div>
      <div>
        <Formik onSubmit={() => console.log("submitted")} validationSchema={validateSchema} initialValues={{
          houseno: "", ownername: "", owneremail: "", conatctnumber: "", members: "", rooms: "", roomsonrent: "", vehicles: "", income: ""
        }}  >
          <div className='container'>
            <div className='row'>

              {/* house no */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >House No:</label>
                  <Field type="text" name="houseno" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='houseno' />
                  </div>
                </div>
              </div>

              {/* owner name */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Owner Name:</label>
                  <Field type="text" name="ownername" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='ownername' />
                  </div>
                </div>
              </div>

              {/* owner email */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Owner Email:</label>
                  <Field type="email" name="owneremail" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='owneremail' />
                  </div>
                </div>
              </div>

              {/* owner contact */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Owner Conatct Number:</label>
                  <Field type="tel" name="conatctnumber" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='conatctnumber' />
                  </div>
                </div>
              </div>

              {/* Number of house members */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Number of house members:</label>
                  <Field type="number" name="members" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='members' />
                  </div>
                </div>
              </div>

              {/* number of rooms */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Number of rooms:</label>
                  <Field type="number" name="rooms" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='rooms' />
                  </div>
                </div>
              </div>

              {/* number of rooms on rent*/}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Number of rooms on rent:</label>
                  <Field type="number" name="roomsonrent" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='roomsonrent' />
                  </div>
                </div>
              </div>

              {/* number of vehicles*/}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Number of vehicles:</label>
                  <Field type="number" name="vehicles" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='vehicles' />
                  </div>
                </div>
              </div>

              {/* monthly income */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Monthly income of your or of any other person on whom you are dependent:</label>
                  <Field type="number" name="income" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='income' />
                  </div>
                </div>
              </div>


              <div class="d-flex justify-content-center pt-3">
                <button type="submit" class="btn btn-dark btn-lg ms-2">Submit form</button>
              </div>
            </div>
          </div>


        </Formik>
      </div>
    </div>
  )
}

export default HomeDetails