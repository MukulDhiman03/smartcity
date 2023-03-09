import React from 'react'
import "./CompleteProfile.css"
import img from '../../img/user.webp'

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
                
            </div>
        </div>
    )
}

export default CompleteProfile