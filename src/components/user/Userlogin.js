import React, { useState } from 'react'
import img from "../../img/login.webp";
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import api from '../../api';





const Userlogin = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);


    function handleClose() {
        setShow(false);
        changePassword();
    }

    const changePassword = async () => {
        const changePasswordObj = {
            ownerEmail: email,
            oldPassword: password,
            newPassword: newPassword
        }
        await axios.post(`${api}/auth/user/change_password`, changePasswordObj).then((res) => {
            if (res.status === 200) {
                window.alert("You have successfully changed the password");
            }
        }).catch((err) => {
            window.alert(err)
            console.log(err);
        })
    }

    const [email, setEmail] = useState("");
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const [password, setPassword] = useState("");
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }



    const [newPassword, setNewPassword] = useState("");
    const onSetPasswordChange = (e) => {
        setNewPassword(e.target.value);
    }


    const submitHandler = async (e) => {
        e.preventDefault();

        const userLoginObj = {
            ownerEmail: email,
            password: password,
        }

        axios.post(`${api}/auth/user/login`, userLoginObj).then((res) => {
            if (res.status === 200) {
                window.alert("You have successfully loged in");
            }
        }).catch((err) => {
            console.log(err);
        })


    }



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

                        <form onSubmit={submitHandler}>
                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0"></p>
                            </div>

                            {/* email */}
                            <div className="form-outline mb-4">
                                <label className="form-label">Email</label>
                                <input type="email" name="email" value={email}
                                    onChange={onEmailChange} className="form-control form-control-lg"
                                    placeholder="Enter a valid email id" />

                            </div>


                            {/* password */}
                            <div className="form-outline mb-3">
                                <label className="form-label">Password</label>
                                <input name="password" type="password" value={password}
                                    onChange={onPasswordChange} className="form-control form-control-lg"
                                    placeholder="Enter password" />

                            </div>



                            {/* register */}
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type='submit' onSubmit={submitHandler} className="btn btn-dark btn-lg">Login</button>
                            </div>


                            {/* forgot your password */}
                            <Button className="btn btn-dark mt-2" variant=" primary" onClick={handleShow}>
                                Change Password
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Change Your Password</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter Email Id"
                                                autoFocus
                                                onChange={onEmailChange}
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlTextarea1"
                                        >
                                            <Form.Control
                                                type="password"
                                                placeholder="Enter your old password"
                                                autoFocus
                                                onChange={onPasswordChange}
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlTextarea1"
                                        >
                                            <Form.Control
                                                type="password"
                                                placeholder="Enter your new password"
                                                autoFocus
                                                onChange={onSetPasswordChange}
                                            />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    {/* <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button> */}
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            {/* login as a user */}
                            <div className="text-center text-lg-start pt-2">
                                <p className="small fw-bold mt-1 pt-1 mb-0"><NavLink to="/login" className="link-danger">Login as a employee</NavLink></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userlogin