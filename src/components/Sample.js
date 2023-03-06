import React from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as yup from "yup";
import "../css/Register.css"


// regex --- >>  min 8 letter password, with at least a symbol, upper and lower case letters and a number

//form validation
const validationSchema = yup.object({
    name: yup.string().required("Name is required!"),
    pno: yup.number().min(1000000000, "Invalid phone number").max(9999999999, "Invalid phone number").required("Phone number is must!"),
    password: yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, " min 8 letter password, with at least a symbol, upper and lower case letters and a number").required(),
    gender: yup.string().required("Gender is required"),
    occupation: yup.string().required("Occupation is required")
});


const Register = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 left'>
                    <Formik validationSchema={validationSchema} initialValues={{ name: "", pno: "", password: "", gender: "", occupation: "" }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}>
                        <Form className="formContainer">
                            <div class="form-outline flex-fill mb-0">
                                <label class="form-label" htmlFor='name'>Your Name</label>
                                <Field name="name" type="text" />
                                <ErrorMessage name='name' />
                            </div>
                            <div>
                                <label>Phone:</label>
                                <Field name="pno" type="tel" />
                                <ErrorMessage name='pno' />
                            </div>
                            <div>
                                <label>Password:</label>
                                <Field name="password" type="password" />
                                <ErrorMessage name='password' />
                            </div>
                            <div>
                                <label>Gender:</label>
                                <label>Male</label>
                                <Field name="gender" value="male" type="radio" />
                                <label>Female</label>
                                <Field name="gender" value="female" type="radio" />
                                <ErrorMessage name='gender' />

                            </div>
                            <div>
                                <label>Occupation:</label>
                                <Field name="occupation" as="select" >
                                    <option value="self employed">Self Employed</option>
                                    <option value="teacher">Teacher</option>
                                    <option value="government employee">Government Employee</option>
                                    <option value="student">Student</option>
                                    <ErrorMessage name='occupation' />
                                </Field>
                            </div>
                            <div>
                                <button className='btn btn-primary btn-lg signinBtn' type='submit' >Register</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
                <div className='col-6 right'>
                    <img src='' alt='not found' />
                </div>
            </div>
        </div>
    )
}

export default Register