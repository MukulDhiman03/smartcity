import React from 'react'
import Header from "./components/Header"
import Home from "./components/Home"
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Register from './components/Register';
import Userlogin from './components/user/Userlogin';
import Logout from './components/user/Logout';
import Addinfo from "./components/employee/Addinfo";
import SeeUserDetails from "./components/employee/SeeUserDetails";
import Seeinfo from "./components/employee/Seeinfo";
import AddSociety from "./components/employee/AddSociety";
import Profile from "./components/employee/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./App.css"



const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<Register />} />
        <Route path='/userlogin' element={<Userlogin />} />
        <Route path='/addinfo' element={<Addinfo />} />
        <Route path='/seeinfo' element={<Seeinfo />} />
        <Route path='/seeuserdetails' element={<SeeUserDetails />} />
        <Route path='/addsociety' element={<AddSociety />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App