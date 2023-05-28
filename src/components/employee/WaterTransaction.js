import React, { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../../api'
import { useNavigate } from 'react-router-dom'
import "../../css/WaterTransaction.css"

const WaterTransaction = () => {
    const [transactionData, setTransactionData] = useState([]);
    const [houseNo, setHouseNo] = useState('')
    var navigate = useNavigate()
    useEffect(() => {

        var profile = JSON.parse(localStorage.getItem('profile'))
        if (profile.houseNo) {
            setHouseNo(profile.houseNo);
        }
        else {
            navigate('/addwatertransaction')
        }
    }, [])
    useEffect(() => {
        if (houseNo) {
            axios.get(`${api}/employee/get/transactions/water/all/${houseNo}`).then((res) => {
                // alert(res);
                console.log(res.data);
                setTransactionData(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
    }, [houseNo])
    //    style={{ width: " 18rem", margin: "2px" }}

    return (
        <div className='container'>
            <div className='row '>
                <div className='col-12 text-center'>
                    <h1>Here you can see all water transactons.</h1>
                </div>
                {
                    transactionData.map((item, index) =>
                        <div className="card" id="card" key={index}>
                            <div className="card-body">
                                <h5 className="card-title">Transaction Id - {item.transactionId}</h5>
                                <p className="card-text">Transaction Date - {item.date}</p>
                                <p className="card-text">Transaction Time - {item.time}</p>
                                <p className="card-text">Payment Method - {item.paymentMethod}</p>
                                <p className="card-text">Amount - {item.amount}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default WaterTransaction