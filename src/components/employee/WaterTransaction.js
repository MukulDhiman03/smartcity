import React,{useEffect,useState} from 'react'
import axios from 'axios'
import api from '../../api'

const WaterTransaction = () => {
    const [transactionData, setTransactionData] = useState([]);

    useEffect(() => {
        let home = "mukul101"
        axios.get(`${api}/employee/get/transactions/water/all/${home}`).then((res) => {
            // alert(res);
            console.log(res.data);
            setTransactionData(res.data);
        }).catch((err) => {
            alert(err);
        })
    }, [])

    return (
        <div className='container'>
            <div className='row text-center'>
                <div className='col-12'>
                    <h1>Here you can see all your water transactons.</h1>
                </div>
                {
                    transactionData.map(() =>
                        <div className='col-12' >
                            <div className="card" style={{ width: " 18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Transaction Id - {transactionData[0].transactionId}</h5>
                                    <p className="card-text">Transaction Date - {transactionData[0].date}</p>
                                    <p className="card-text">Transaction Time - {transactionData[0].time}</p>
                                    <p className="card-text">Payment Method - {transactionData[0].paymentMethod}</p>
                                    <p className="card-text">Amount - {transactionData[0].amount}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default WaterTransaction