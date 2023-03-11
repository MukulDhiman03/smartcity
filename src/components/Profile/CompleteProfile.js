import React from 'react'
import "./CompleteProfile.css"
import img from '../../img/user.webp'
import { Field, Formik, ErrorMessage } from 'formik'
import * as yup from "yup";

const validateSchema = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    fathername: yup.string().required("Required"),
    mothername: yup.string().required("Required"),
    email: yup.string().required("Email is required"),
    phonenumber: yup.number().min(1000000000, "Invalid phone number").max(9999999999, "Invalid phone number").required("Phone number is must!"),
    address: yup.string().required("Yeh to batao rehte kaha ho"),
    adhaarcard: yup.number().required("You left this field, aise nhi chalega"),
    occupation: yup.string().required("Kya dhandha karte ho bhaiya ji"),
    education: yup.string().required("kitna pada likhe ho"),
    salary: yup.number().required("kitna kamate ho"),
    martialstatus: yup.string().required(),

});


const CompleteProfile = () => {
    return (
        <div className='container mt-3  p-3'>
            <div className='row bg-dark' id='user_details'>
                <div className='col-md-3'>
                    <img className='img-fluid w-25' src={img} alt='not found' />
                    <h3>Steven Smith</h3>
                    <p>Berojgaar</p>
                </div>
                <div className='col-md-3'>
                    <h3>About</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur dolor placeat blanditiis rerum.</p>
                </div>
                <div className='col-md-3'>
                    <h3>Highest Education</h3>
                    <p>Master in science</p>
                </div>
                <div className='col-md-3'>
                    <h3>Annual Salary</h3>
                    <p>$2500 - $3000</p>
                </div>
            </div>
            <div className='row m-2'>
                <div className="progress" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{ width: "25%" }}>25%</div>
                </div>
            </div>
            <div className='row m-2'>
                <div className='col-md-12'>
                    <h1 className='text-center'>Fill your details</h1>
                </div>
            </div>
            <Formik validationSchema={validateSchema} initialValues={{
                firstName: "", lastName: "", email: "", phonenumber: "",
                adhaarcard: "", address: "", occupation: "", education: "", salary: "", fathername: "", mothername: "", martialstatus: ""
            }}>
                <div className='row'>
                    <div className='col-md-3'>
                        <label className="form-label">First name</label>
                        <Field type="text" name="firstName" className="form-control form-control-lg" />
                        <div className='errorMsg' >
                            <ErrorMessage name='firstName' />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <label className="form-label">Last name</label>
                        <Field type="text" name='lastName' className="form-control form-control-lg" />
                        <div className='errorMsg' >
                            <ErrorMessage name='lastName' />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <label className="form-label">Father name</label>
                        <Field type="text" name='fathername' className="form-control form-control-lg" />
                        <div className='errorMsg' >
                            <ErrorMessage name='fathername' />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <label className="form-label">Mother name</label>
                        <Field type="text" name='mothername' className="form-control form-control-lg" />
                        <div className='errorMsg' >
                            <ErrorMessage name='mothername' />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <label className="form-label" >Email</label>
                        <Field type="email" name="email" className="form-control form-control-lg" />
                        <div className='errorMsg' >
                            <ErrorMessage name='email' />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <label className="form-label" >Contact Number</label>
                        <Field type="tel" name="phonenumber" className="form-control form-control-lg" />
                        <div className='errorMsg' >
                            <ErrorMessage name='phonenumber' />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <label class="form-label" >Address</label>
                        <Field type="text" name='address' class="form-control form-control-lg" />
                        <div className='errorMsg' >
                            <ErrorMessage name='address' />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <label className="form-label" >Adhaar Card</label>
                        <Field type="number" name="adhaarcard" className="form-control form-control-lg" />
                        <div className='errorMsg' >
                            <ErrorMessage name='adhaarcard' />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <label className="form-label" >Occupation</label>
                        <Field type="text" name="occupation" className="form-control form-control-lg" />
                        <div className='errorMsg' >
                            <ErrorMessage name='occupation' />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <label className="form-label" >Highest Education</label>
                        <Field type="text" name="education" className="form-control form-control-lg" />
                        <div className='errorMsg' >
                            <ErrorMessage name='education' />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <label className="form-label" >Salary</label>
                        <Field type="text" name="salary" className="form-control form-control-lg" />
                        <div className='errorMsg' >
                            <ErrorMessage name='salary' />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <h6 className="mb-0 me-4">Martial Status: </h6>
                        <div className="form-check form-check-inline mb-0 me-4">
                            <label className="form-check-label">Married</label>
                            <Field className="form-check-input" name="martialstatus" type="radio"
                                value="option1" />
                        </div>
                        <div className="form-check form-check-inline mb-0 me-4">
                            <Field className="form-check-input" name="martialstatus" type="radio"
                                value="option2" />
                            <label className="form-check-label" >Unmarried</label>
                        </div>
                        <div className='errorMsg' >
                            <ErrorMessage name='martialstatus' />
                        </div>
                    </div>
                    <div className='col-md-12 mt-2'>
                        <input type="submit" />
                    </div>
                </div>

            </Formik>
        </div>
    )
}

export default CompleteProfile