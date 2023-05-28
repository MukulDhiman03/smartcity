import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
  var navigate=useNavigate()
  useEffect(()=>{
   localStorage.removeItem('profile')
   navigate('/')
  },[navigate])
  return (
    <div></div>
  )
}

export default Logout