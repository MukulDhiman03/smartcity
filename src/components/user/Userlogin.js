import React from 'react'
import img from "../../img/login.webp";
import { NavLink } from 'react-router-dom'




const Userlogin = () => {
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

                        <form>
                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0"></p>
                            </div>

                            {/* email */}
                            <div className="form-outline mb-4">
                                <label className="form-label">House no</label>
                                <input type="email" name="houseno" className="form-control form-control-lg"
                                    placeholder="Enter a valid house number" />

                            </div>


                            {/* password */}
                            <div className="form-outline mb-3">
                                <label className="form-label">Password</label>
                                <input name="password" type="password" className="form-control form-control-lg"
                                    placeholder="Enter password" />

                            </div>



                            {/* register */}
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type='submit' className="btn btn-dark btn-lg">Login</button>
                            </div>


                            {/* forgot your password */}
                            <div className='mt-2'>
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                    Launch demo modal
                                </button>

                                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                ...
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* login as a user */}
                            <div className="text-center text-lg-start pt-2">
                                <p className="small fw-bold mt-1 pt-1 mb-0"><NavLink to="/login" className="link-danger">Login as a employee</NavLink></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Userlogin