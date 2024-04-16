import React from "react";
import './Navbar.css'
import navlogo from "../../assets/logo.jpeg"

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={navlogo} alt="" />
            <h1>Admin Panel</h1>
        </div>
    )
}

export default Navbar;