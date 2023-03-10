import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import img from "../img/user.webp"
import { GrMail } from "react-icons/gr"
import { FaPhoneAlt } from "react-icons/fa"
import "../css/Profile.css"


const Profile = () => {
    return (
        <div className='conatiner' id="profileContainer">
            <div className='row justify-content-center p-3'>
                <div className='col-md-3'>
                    <img className='text-center img-fluid w-25' src={img} alt="user not found" />
                    <h1>Steven smith</h1>
                    <p>
                        <GrMail /> Steven@gmail.com
                    </p>
                    <p>
                        <FaPhoneAlt /> 9999999999
                    </p>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td>Father Name</td>
                                <td>Pita Ji</td>
                            </tr>
                            <tr>
                                <td>Mother Name</td>
                                <td>MataShree</td>
                            </tr>
                            <tr>
                                <td>DOB</td>
                                <td>30/02/6969</td>
                            </tr>
                            <tr>
                                <td>Contact Number</td>
                                <td>9798979897</td>
                            </tr>
                            <tr>
                                <td>Occupation</td>
                                <td>BerojGaar</td>
                            </tr>
                            <tr>
                                <td>Adhaar Card</td>
                                <td>8534 0742 0666</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>Clementown Dehradun</td>
                            </tr>
                            <tr>
                                <td>Marital status</td>
                                <td>Single Forever</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='col-md-8'>
                    <div className='row'>
                        <h3 className='text-center'>
                            <NavLink to="/completeprofile" className="btn btn-primary btn-lg">Complete Your profile</NavLink>
                        </h3>
                    </div>
                    <div className='row justify-content-around mt-3'>
                        <div className="col-md-3 profileCard">
                            <h4>Income tax</h4>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque laborum itaque, animi recusandae
                                eveniet suscipit vitae? Omnis labore neque cumque?
                            </div>
                            <p>Read More...</p>
                        </div>
                        <div className="col-md-3 profileCard">
                            <h4>Electricity</h4>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque laborum itaque, animi recusandae
                                eveniet suscipit vitae? Omnis labore neque cumque?
                            </div>
                            <p>Read More...</p>
                        </div>
                        <div className="col-md-3 profileCard">
                            <h4>Water bills</h4>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque laborum itaque, animi recusandae
                                eveniet suscipit vitae? Omnis labore neque cumque?
                            </div>
                            <p>Read More...</p>
                        </div>
                    </div>
                    <div className='row justify-content-around mt-3'>
                        <div className="col-md-3 profileCard">
                            <h4>Income tax</h4>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque laborum itaque, animi recusandae
                                eveniet suscipit vitae? Omnis labore neque cumque?
                            </div>
                            <p>Read More...</p>
                        </div>
                        <div className="col-md-3 profileCard">
                            <h4>Electricity</h4>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque laborum itaque, animi recusandae
                                eveniet suscipit vitae? Omnis labore neque cumque?
                            </div>
                            <p>Read More...</p>
                        </div>
                        <div className="col-md-3 profileCard">
                            <h4>Water bills</h4>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque laborum itaque, animi recusandae
                                eveniet suscipit vitae? Omnis labore neque cumque?
                            </div>
                            <p>Read More...</p>
                        </div>
                    </div>
                    <div className='row text-end mt-2 footerHeading'>
                        <h3>Check More....</h3>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Profile