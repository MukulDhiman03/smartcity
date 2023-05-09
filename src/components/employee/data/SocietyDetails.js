import React from 'react'
import { Field, Formik, ErrorMessage } from 'formik'
import * as yup from "yup";


const validateSchema = yup.object({
  societyno: yup.string().required("House No "),
  society: yup.string().required("Please provide owner name"),
  city: yup.string().required(),
  pincode: yup.number().required("Pincode is must!"),
  street: yup.number().required(),
  state: yup.string().required(),

});

const SocietyDetails = () => {
  return (
    <div>
      <div>
        <h1 className='text-center'>Enter Society Details</h1>
      </div>
      <div>
        <Formik validationSchema={validateSchema} initialValues={{
          societyno: "", society: "", city: "", pincode: "", street: "", state: "",
        }} >
          <div className='container'>
            <div className='row'>

              {/* society no */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Society No:</label>
                  <Field type="text" name="societyno" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='societyno' />
                  </div>
                </div>
              </div>

              {/* society name */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Society Name:</label>
                  <Field type="text" name="society" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='society' />
                  </div>
                </div>
              </div>

              {/* city */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >City:</label>
                  <Field type="text" name="city" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='city' />
                  </div>
                </div>
              </div>

              {/* pincode */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Pincode:</label>
                  <Field type="tel" name="pincode" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='pincode' />
                  </div>
                </div>
              </div>

              {/* Street */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Street:</label>
                  <Field type="number" name="street" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='street' />
                  </div>
                </div>
              </div>

              {/* state */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >State:</label>
                  <Field type="text" name="state" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='state' />
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

export default SocietyDetails