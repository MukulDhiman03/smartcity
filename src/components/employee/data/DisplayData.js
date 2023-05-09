import React from 'react'
import HomeDetails from './HomeDetails'
import SocietyDetails from "./SocietyDetails"
import ElectricityDetails from "./ElectricityDetails"
import WaterDetails from "./WaterDetails"

const DisplayData = (props) => {  

    if (props.state === "1") {
        return (
            <HomeDetails />
        )
    }
    if (props.state === "2") {
        return (
            <SocietyDetails />
        )
    }
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
}

export default DisplayData