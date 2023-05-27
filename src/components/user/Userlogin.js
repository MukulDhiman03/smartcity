import React, { useState } from 'react'
import img from "../../img/login.webp";
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';





const Userlogin = () => {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [email, setEmail] = useState("");
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const [password, setPassword] = useState("");
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }


    const submitHandler = async (e) => {
        e.preventDefault();

        const userLoginObj = {
            ownerEmail: email,
            password: password,
        }

        await axios.post('https://bright-calf-miniskirt.cyclic.app/auth/user/login/', userLoginObj).then((res) => {
            if (res.status === 200) {
                alert("You have successfully loged in");
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
                                <label className="form-label">House no</label>
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
                                <button type='submit' className="btn btn-dark btn-lg">Login</button>
                            </div>


                            {/* forgot your password */}
                            <Button variant="primary" onClick={handleShow}>
                                Launch demo modal
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="name@example.com"
                                                autoFocus
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlTextarea1"
                                        >
                                            <Form.Label>Example textarea</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
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