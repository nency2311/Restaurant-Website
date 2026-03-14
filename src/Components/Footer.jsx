import React from "react";
import tomato from "../assets/img/footer.png"

export default function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="container ">
          <div className="row">
            {/* Contact */}
            <div className="col-lg-3 col-md-6">
              <h4 className="footer-title">CONTACT</h4>

              <p className="d-flex align-items-start">
                <i className="bi bi-geo-alt me-2"></i>
                <span className="f1">
                  1247/Plot No. 39, 15th Phase,
                  <br />
                  Colony, Hyderabad
                </span>
              </p>

              <p className="d-flex align-items-start">
                <i className="bi bi-telephone me-2"></i>
                <span className="f1">
                  +91 987-654-3210
                  <br />
                  +91 123-456-7890
                </span>
              </p>

              <p className="d-flex align-items-start">
                <i className="bi bi-envelope me-2"></i>
                <span className="f1">
                  info@example.com
                  <br />
                  info@example.com
                </span>
              </p>
            </div>

            {/* Our Links */}
            <div className="col-lg-3 col-md-6">
              <h4 className="footer-title">OUR LINKS</h4>

              <ul className="footer-links">
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Team</li>
                <li>Blog</li>
              </ul>
            </div>

            {/* Our service */}
            <div className="col-lg-3 col-md-6">
              <h4 className="footer-title">OUR SERVICE</h4>

              <ul className="footer-links">
                <li>Strategy & Research</li>
                <li>Fast Delivery</li>
                <li>Seat Reservation</li>
                <li>Pickup In Store</li>
                <li>Our Menu</li>
              </ul>
            </div>

            {/* Help Center */}
            <div className="col-lg-3 col-md-6">
              <h4 className="footer-title">HELP CENTER</h4>

              <ul className="footer-links">
                <li>FAQ</li>
                <li>Shop</li>
                <li>Category Filter</li>
                <li>Testimonials</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
        <hr/>
        <div className="container d-flex justify-content-between align-items-center">
            <p className=" f1">Copyright 2024 All rights reserved.</p>
            <p className="me-5 f1">Crafted With <i className="bi bi-heart-fill"></i>by DexignZone</p>
        </div>
        <img src={tomato} alt="tomato" className="footer-img" />
      </footer>
    </>
  );
}
