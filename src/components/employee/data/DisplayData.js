import React from 'react'
import HomeDetails from './HomeDetails'
// import SocietyDetails from "./SocietyDetails"
import ElectricityDetails from "./ElectricityDetails"
import WaterDetails from "./WaterDetails"
import AddWaterTransaction from '../AddWaterTransaction'
import AddElectricityTransaction from '../AddElectricityTransaction'



const DisplayData = (props) => {

    if (props.state === "1") {
        return (
            <HomeDetails />
        )
    }
    // if (props.state === "2") {
    //     return (
    //         <SocietyDetails />
    //     )
    // }
    if (props.state === "3") {
        return (
            <ElectricityDetails />
        )
    }
    if (props.state === "4") {
        return (
            <WaterDetails />
        )
    }
    if (props.state === "5") {
        return (
            <AddWaterTransaction />
        )
    }
    if (props.state === "6") {
        return (
            <AddElectricityTransaction />
        )
    }
    else {
        return (
            <HomeDetails />
        )
    }
}

export default DisplayData