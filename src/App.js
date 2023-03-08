import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./components/About"
import Login from "./components/Login"
import Home from "./components/Home"
import Profile from "./components/Profile"
import Header from "./components/Header"
import Register from "./components/Register"
import CompleteProfile from './components/Profile/CompleteProfile';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="completeprofile" element={<CompleteProfile />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
