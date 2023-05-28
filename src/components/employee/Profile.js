import React, { useEffect, useState } from 'react'
import "../../css/EmployeeProfile.css"
import bar from "../../img/bar.png"
import api from "../../api"
import axios from 'axios'

const EmployeeProfile = () => {

    const [empDetail, setEmpDetail] = useState("");
    let empId = "employee1"

    useEffect(() => {
        axios.get(`${api}/employee/get/employee/${empId}`).then((res) => {
            console.log(res.data);
            setEmpDetail(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])


    return (
        <div className='profile_body'>
            <div className="ring1" />
            {/*------------------card for profile start here------------------------------------*/}
            <div className="profile-card">
                {/* <p>Election commission of India</p><br />
                <p>ELECTORS PHOTO IDENTITY CARD</p> */}
                {/*------------------user profile photo ------------------------------------*/}
                <center><img src="https://cdn.xxl.thumbs.canstockphoto.fr/silhouette-hommes-costume-noir-clipart-vecteur_csp6923810.jpg" alt="" id="img2" style={{ marginTop: '3]%' }} /></center>
                <br />
                <center><img src={bar} alt="" id="img3" /></center>
                <form>
                    <center><div className='form'> Employee id : {empDetail.empId} </div></center>
                </form>
                <div className="pf_detail">
                    <div className='form'>
                        <br />
                        Name : {empDetail.name} <br /><br />
                        Email : {empDetail.email} <br /><br />
                        Phone No : {empDetail.phone} <br /><br />
                        Department : {empDetail.department}<br /><br />
                    </div>
                </div>
            </div>
            <div className="ring2" />
        </div>
    )
}

export default EmployeeProfile