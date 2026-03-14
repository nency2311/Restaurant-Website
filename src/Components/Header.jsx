import React from 'react'
import logo from "../assets/img/logo.png";
import { Link, useLocation } from "react-router-dom";


export default function Header() {
  const location = useLocation();
  return (
    <>
    <div className='header'>
    <nav className="navbar navbar-expand-lg navbar-light navbarbg-light sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" to="/"><img src={logo} height="25px"></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className={`nav-item mb-2 mb-lg-0 ${location.pathname === "/" ? "active" : ""}`} >
          <Link className="nav-link "  to="/">Home</Link>
        </li>

        <li className={`nav-item mb-2 mb-lg-0 ${location.pathname === "/aboutus" ? "active" : ""}`} >
          <Link className="nav-link" to="/aboutus">About Us</Link>
        </li>

         <li className={`nav-item mb-2 mb-lg-0 ${location.pathname === "/shop" ? "active" : ""}`}>
          <Link className="nav-link" to="/shop">Reservation</Link>
        </li>

         <li className={`nav-item mb-2 mb-lg-0 ${location.pathname === "/blog" ? "active" : ""}`}>
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
        
         <li className={`nav-item mb-2 mb-lg-0 ${location.pathname === "/contactus" ? "active" : ""}`}>
          <Link className="nav-link" to="/contactus">Contact Us</Link>
        </li>

      </ul>
     
    </div>
  </div>
</nav>
</div>
    </>
  )
}
