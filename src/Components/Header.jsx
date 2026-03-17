import React from 'react'
import logo from "../assets/img/logo.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <>
    <div className='header'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" to="/"><img src={logo} height="25px" alt="logo" className="img-fluid" style={{height:"25px"}}></img></a>
    <button className="navbar-toggler " type="button"   onClick={() => setIsOpen(!isOpen)} >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className={`nav-item mb-2 mb-lg-0 ${location.pathname === "/" ? "active" : ""}`} >
          <Link className="nav-link "  to="/" onClick={() => setIsOpen(false)} >Home</Link>
        </li>

        <li className={`nav-item mb-2 mb-lg-0 ${location.pathname === "/aboutus" ? "active" : ""}`} >
          <Link className="nav-link" to="/aboutus" onClick={() => setIsOpen(false)}>About Us</Link>
        </li>

         <li className={`nav-item mb-2 mb-lg-0 ${location.pathname === "/shop" ? "active" : ""}`}>
          <Link className="nav-link" to="/shop" onClick={() => setIsOpen(false)}>Reservation</Link>
        </li>

         <li className={`nav-item mb-2 mb-lg-0 ${location.pathname === "/blog" ? "active" : ""}`}>
          <Link className="nav-link" to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
        </li>
        
         <li className={`nav-item mb-2 mb-lg-0 ${location.pathname === "/contactus" ? "active" : ""}`}>
          <Link className="nav-link" to="/contactus" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </li>

      </ul>
     
    </div>
  </div>
</nav>
</div>
    </>
  )
}
