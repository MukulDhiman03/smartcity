import React from 'react'
import { Field, Formik, ErrorMessage } from 'formik'
import * as yup from "yup";


const validateSchema = yup.object({
  billNumber: yup.number().required(),
  waterUsageAmount: yup.number().required(),
  waterSource: yup.string().required(),
  fixedBill: yup.number().required(),
  billOwnerName: yup.string().required(),
  sewageDisposalMethod: yup.string().required(),

});

const WaterDetails = () => {
  return (
    <div>
      <div>
        <h1 className='text-center'>Enter Water Details</h1>
      </div>
      <div>
        <Formik validationSchema={validateSchema} initialValues={{
          billNumber: "", waterUsageAmount: "", waterSource: "", fixedBill: "", billOwnerName: "",
          sewageDisposalMethod: "",
        }} >
          <div className='container'>
            <div className='row'>

              {/*billNumber */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Bill Number:</label>
                  <Field type="number" name="billNumber" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='billNumber' />
                  </div>
                </div>
              </div>

              {/* waterUsageAmount */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Water Usage Amount:</label>
                  <Field type="number" name="waterUsageAmount" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='waterUsageAmount' />
                  </div>
                </div>
              </div>

              {/* waterSource */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Water Source:</label>
                  <Field type="text" name="waterSource" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='waterSource' />
                  </div>
                </div>
              </div>

              {/* fixedBill */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Fixed Bill:</label>
                  <Field type="number" name="fixedBill" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='fixedBill' />
                  </div>
                </div>
              </div>

              {/* billOwnerName */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Bill Owner Name:</label>
                  <Field type="text" name="billOwnerName" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='billOwnerName' />
                  </div>
                </div>
              </div>

              {/* sewageDisposalMethod */}
              <div className='col-md-6'>
                <div className="form-outline mb-4">
                  <label className="form-label" >Sewage Disposal Method:</label>
                  <Field type="text" name="sewageDisposalMethod" className="form-control form-control-lg" />
                  <div className='errorMsg' >
                    <ErrorMessage name='sewageDisposalMethod' />
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

export default WaterDetails
