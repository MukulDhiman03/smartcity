import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./components/About"
import Login from "./components/Login"
import Home from "./components/Home"
import Profile from "./components/Profile"
import Header from "./components/Header"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
