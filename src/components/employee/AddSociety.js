import React from 'react'
import { Field, Formik, ErrorMessage } from 'formik'
import * as yup from "yup";

const validateSchema = yup.object({
  societyname: yup.string().required(),
  street: yup.string().required(),
  pincode: yup.number().required(),
  state: yup.string().required(),
  city: yup.string().required(),
  district: yup.string().required()
});

const AddSociety = () => {
  return (
    <div>
      <div>
        <h1 className='text-center'>Enter your residential address</h1>
      </div>
      <div>
        <Formik validationSchema={validateSchema} initialValues={{
          societyname: "", street: "", pincode: "", state: "", city: "", district: ""
        }} >
          <div className='container'>
            <div className='row'>

              {/* society name*/}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Society Name</label>
                  <Field type="text" name="societyname" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='societyname' />
                  </div>
                </div>
              </div>

              {/* street */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Street</label>
                  <Field type="text" name="street" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='street' />
                  </div>
                </div>
              </div>

              {/* city */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >City</label>
                  <Field type="text" name="city" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='city' />
                  </div>
                </div>
              </div>

              {/* district */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >District</label>
                  <Field type="text" name="district" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='district' />
                  </div>
                </div>
              </div>

              {/* pin code */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Pin Code:</label>
                  <Field type="number" name="pincode" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='pincode' />
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

export default AddSociety