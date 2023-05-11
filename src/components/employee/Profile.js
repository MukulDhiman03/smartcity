import React from 'react'
import "../../css/EmployeeProfile.css"
import bharat from "../../img/bharat.png"
import bar from "../../img/bar.png"

const EmployeeProfile = () => {
    return (
        <div className='profile_body'>
            <div className="ring1" />
            {/*------------------card for profile start here------------------------------------*/}
            <div className="profile-card">
                <center><img src={bharat} alt="" className="img1" /></center>
                {/* <p>Election commission of India</p><br />
                <p>ELECTORS PHOTO IDENTITY CARD</p> */}
                {/*------------------user profile photo ------------------------------------*/}
                <center><img src="https://cdn.xxl.thumbs.canstockphoto.fr/silhouette-hommes-costume-noir-clipart-vecteur_csp6923810.jpg" alt="" id="img2" style={{ marginTop: '3%' }} /></center>
                <br />
                <center><img src={bar} alt="" id="img3" /></center>
                <form>
                    <center><div className='form'> Employee id : 151232 </div></center>
                </form>
                <div className="pf_detail">
                    <div className='form'>
                        <br />
                        Name : Vaibhav Rana <br /><br />
                        Email : Vaibhav@gmail.com <br /><br />
                        Phone No : 1234567890<br /><br />
                        Department : Water<br /><br />
                    </div>
                </div>
            </div>
            <div className="ring2" />
        </div>
    )
}

export default EmployeeProfile