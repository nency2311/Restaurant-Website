import React from 'react'
import PageBanner from './PageBanner'

export default function ContactUs() {
  return (
    <>
     <PageBanner title="Contact Us"/>
     <section class="contact-section">
  <h2>Contact Us</h2>

  <div class="contact-container">

    <div class="contact-box">
      <i class="fas fa-map-marker-alt"></i>
      <h3>Address</h3>
      <p>123 Street, Ahmedabad, India</p>
    </div>

    <div class="contact-box">
      <i class="fas fa-phone-alt"></i>
      <h3>Phone</h3>
      <p>+91 98765 43210</p>
    </div>

    <div class="contact-box">
      <i class="fas fa-envelope"></i>
      <h3>Email</h3>
      <p>info@example.com</p>
    </div>

    <div class="contact-box">
      <i class="fas fa-clock"></i>
      <h3>Opening Hours</h3>
      <p>Mon - Sat : 9AM - 10PM</p>
    </div>

  </div>
</section>
    </>
  )
}
