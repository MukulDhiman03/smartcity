import axios from "axios";
import { useState } from "react";
import React from 'react'
import api from "../../api";
import toast, { Toaster } from 'react-hot-toast';




const AddElectricityTransaction = () => {
    const [houseno, setHouseNo] = useState("");
    const [transactionid, setTransactionId] = useState("");
    const [paymentmethod, setPaymentMethod] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const onHouseNoChange = (e) => {
        setHouseNo(e.target.value)
    }

    const onTransactionIdChange = (e) => {
        setTransactionId(e.target.value);
    }

    const onPaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    }

    const onAmountChange = (e) => {
        setAmount(e.target.value);
    }

    const onDateChange = (e) => {
        setDate(e.target.value);
    }

    const onTimeChange = (e) => {
        setTime(e.target.value);
    }


    const submitHandler = async (e) => {
        e.preventDefault();
        let transactionObj = {
            houseNo: houseno,
            transactionId: transactionid,
            paymentMethod: paymentmethod,
            amount: amount,
            date: date,
            time: time
        }

        await axios.post(`${api}/employee/add/transaction/electricity`, transactionObj).then((res) => {
            if (res.status === 200) {
                toast.success("You have successfully entered the details");

            }
        }).catch((err) => {
            toast.error("Something went wrong");
        })

    }

    return (
        <div>
            <div>
                <h1 className='text-center'>Enter Electricity Transaction Details</h1>
                <Toaster position='top-right' />
            </div>
            <div>
                <form onSubmit={submitHandler}>
                    <div className='container'>
                        <div className='row'>

                            {/* house no */}
                            <div className='col-md-6'>
                                <div className="form-outline mb-4">
                                    <label className="form-label" >House Number:</label>
                                    <input type="text" name="houseno" value={houseno} onChange={onHouseNoChange} className="form-control form-control-lg" />
                                </div>
                            </div>

                            {/* transaction id */}
                            <div className='col-md-6'>
                                <div className="form-outline mb-4">
                                    <label className="form-label" >Transaction Id:</label>
                                    <input type="text" name="transactionid" value={transactionid} onChange={onTransactionIdChange} className="form-control form-control-lg" />
                                </div>
                            </div>

                            {/* payment method */}
                            <div className='col-md-6'>
                                <div className="form-outline mb-4">
                                    <label className="form-label" >Payment Method:</label>
                                    <input type="text" name="paymentmethod" value={paymentmethod} onChange={onPaymentMethodChange} className="form-control form-control-lg" />
                                </div>
                            </div>

                            {/* Amount */}
                            <div className='col-md-6'>
                                <div className="form-outline mb-4">
                                    <label className="form-label" >Amount:</label>
                                    <input type="tel" name="amount" value={amount} onChange={onAmountChange} className="form-control form-control-lg" />
                                </div>
                            </div>

                            {/* Date */}
                            <div className='col-md-6'>
                                <div className="form-outline mb-4">
                                    <label className="form-label" >Transaction Date:</label>
                                    <input type="date" name="date" value={date} onChange={onDateChange} className="form-control form-control-lg" />
                                </div>
                            </div>

                            {/* Time */}
                            <div className='col-md-6'>
                                <div className="form-outline mb-4">
                                    <label className="form-label" >Transaction Time:</label>
                                    <input type="time" name="time" value={time} onChange={onTimeChange} className="form-control form-control-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center pt-3">
                        <button type="submit" className="btn btn-dark btn-lg ms-2" >Submit form</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddElectricityTransaction