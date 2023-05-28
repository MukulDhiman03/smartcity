import React, { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../../api'
import { useNavigate } from 'react-router-dom'
import "../../css/WaterTransaction.css"


const ElectricityTransaction = () => {

    const [transactionData, setTransactionData] = useState([]);
    const [houseNo,setHouseNo]=useState('')
    var navigate=useNavigate()
    useEffect(()=>{
    
        var profile=JSON.parse(localStorage.getItem('profile'))
        if(profile.houseNo)
        {
            setHouseNo(profile.houseNo);
        }
        else
        {
            navigate('/userlogin')
        }
    },[])
    useEffect(() => {
        if(houseNo)
        {
        axios.get(`${api}/employee/get/transactions/electricity/all/${houseNo}`).then((res) => {
            // alert(res);
            console.log(res.data);
            setTransactionData(res.data);
        }).catch((err) => {
            alert(err);
        })
    }
    }, [houseNo])
    return (

        <div className='container'>
            <div className='row text-center'>
                <div className='col-12'>
                    <h1>Here you can see all the electericity transactons.</h1>
                </div>
                {
                    transactionData.map(() =>
                        <div className="card" id="card">
                            <div className="card-body text-center">
                                <h5 className="card-title">Transaction Id - {transactionData[0].transactionId}</h5>
                                <p className="card-text">Date - {transactionData[0].date}</p>
                                <p className="card-text">Transaction Time - {transactionData[0].time}</p>
                                <p className="card-text">Payment Method - {transactionData[0].paymentMethod}</p>
                                <p className="card-text">Amount - {transactionData[0].amount}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ElectricityTransaction