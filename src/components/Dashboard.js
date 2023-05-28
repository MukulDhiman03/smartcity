import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';

const Dashboard = () => {
    const [data, setData] = useState({})
    const [society, setAllScocities] = useState([])
    useEffect(() => {
        async function getStatics() {
            await axios.get('https://bright-calf-miniskirt.cyclic.app/employee/get/statics').then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log(err);
            })
        }
        async function getAllSociety() {
            await axios.get('https://bright-calf-miniskirt.cyclic.app/employee/get/societies/all').then((res) => {
                setAllScocities(res.data)
            }).catch((err) => {
                console.log(err);
            })
        }
        getStatics()
        getAllSociety()
    }, [])
    return (
        <>
            <div className='result_body'>
                <div className="parent row">
                    <div className="child col" style={{ background: "purple" }}>
                        <h3 className="h3" id="cd1">{data.homeCount}</h3>
                        <h4>No. of Homes</h4>
                        <Link to="/addinfo"><button className='child-card-button'>Add home</button></Link>
                    </div>

                    <div className="child col" style={{ background: "orange" }}>
                        <h3 className="h3" id="cd2"> {data.societyCount} </h3>
                        <h4>No of Societies</h4>
                        <Link to="/addsociety"> <button className='child-card-button'>Add Society</button></Link>

                    </div>
                    {/*------------------ candidate 3 votes detail ------------------------------------*/}
                    <div className="child col" style={{ background: "#3A9BDC" }}>
                        <h3 className="h3" id="cd3"> 3 </h3>
                        <h4>No of Department</h4>
                        <Link to="/addinfo"><button disabled className='child-card-button'>Add deparment</button></Link>

                    </div>
                    <div className="child col" style={{ background: "orange" }}>
                        <h3 className="h3" id="cd1">{data.employeeCount}</h3>
                        <h4>No of Employees </h4>
                        <Link to="/register"><button className='child-card-button'>Add Employees</button></Link>

                    </div>
                </div>
                <h2 style={{marginLeft:"80px"}}>Society Data</h2>
               <center> 
                <Table striped bordered hover style={{width:"90%"}}>
                    <thead style={{background:"black",color:"white"}}>
                        <tr>
                            <th>S.No</th>
                            <th>Society Name</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Pincode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {society.map((item,index) => {
                            return(
                            <tr key={index}>
                                <td>{item.societyNumber}</td>
                                <td>{item.societyName}</td>
                                <td>{item.city}</td>
                                <td>{item.state}</td>
                                <td>{item.pincode}</td>
                            </tr>
                            )
                        })

                        }
                    </tbody>
                </Table></center>
            </div>
        </>
    )
}

export default Dashboard