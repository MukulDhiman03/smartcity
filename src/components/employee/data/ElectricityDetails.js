import React from 'react'
import { Field, Formik, ErrorMessage } from 'formik'
import * as yup from "yup";


const validateSchema = yup.object({
  meterno: yup.number().required(),
  meterpower: yup.number().required(),
  holdername: yup.string().required(),
  phonenumber: yup.number().required(),
  corporationname: yup.string().required(),

});

const ElectricityDetails = () => {
  return (
    <div>
      <div>
        <h1 className='text-center'>Enter Electricity Details</h1>
      </div>
      <div>
        <Formik validationSchema={validateSchema} initialValues={{
          meterno: "", meterpower: "", holdername: "", phonenumber: "", corporationname: "",
        }} >
          <div className='container'>
            <div className='row'>

              {/* meter no */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Meter No:</label>
                  <Field type="number" name="meterno" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='meterno' />
                  </div>
                </div>
              </div>

              {/* meterpower */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Meter Power:</label>
                  <Field type="number" name="meterpower" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='meterpower' />
                  </div>
                </div>
              </div>

              {/* holdername */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Account Holder Name:</label>
                  <Field type="text" name="holdername" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='holdername' />
                  </div>
                </div>
              </div>

              {/* phone number */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Phone number:</label>
                  <Field type="tel" name="phonenumber" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='phonenumber' />
                  </div>
                </div>
              </div>

              {/* corporationname */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Power Corporation:</label>
                  <Field type="text" name="corporationname" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='corporationname' />
                  </div>
                </div>
              </div>



              <div class="d-flex justify-content-center pt-3">
                <button type="button" class="btn btn-dark btn-lg ms-2">Submit form</button>
              </div>
            </div>
          </div>


        </Formik>
      </div>
    </div>
  )
}

export default ElectricityDetails