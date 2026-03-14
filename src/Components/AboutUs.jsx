import React from 'react'
import PageBanner from './PageBanner';
import { FaAppleAlt, FaCoffee, FaGlassCheers, FaUtensils } from "react-icons/fa";

export default function AboutUs() {
  return (
    <>
      <PageBanner title="About us"/>
       
      <section className='about1-section'>
        <div className="container text-center">

        <h1 className="visit-title">
          We Invite You to Visit Our Restaurant
        </h1>

        <p className="visit-text">
          Experience the perfect blend of delicious food, warm ambiance, 
          and exceptional service at our restaurant.Whether it's a family dinner or a special occasion, we promise 
          a memorable dining experience.
        </p>

       

        <div className="video-box">
        <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/xPPLbEFbCAo"
            title="Restaurant Video"
            frameBorder="0"
            allowFullScreen
        ></iframe>
        </div>

      </div>
      </section>

      <section className='about2-section'>
        <div className="container text-center">

        <h1 className="section-title">What We Do</h1>

        <div className="row">

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="what-box">
              <div className="icon-circle">
                <FaAppleAlt />
              </div>
              <h4>Fresh Products</h4>
              <p>We use only fresh ingredients and we sourced from trusted farms.</p>
              <p>Quality and taste are always our top priority.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="what-box">
              <div className="icon-circle">
                <FaCoffee />
              </div>
              <h4>Fresh Products</h4>
              <p>Enjoy premium coffee prepared by our expert baristas.</p>
              <p>Perfect aroma and taste in every cup of coffe.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="what-box">
              <div className="icon-circle">
                <FaGlassCheers />
              </div>
              <h4>Fresh Products</h4>
              <p>Refreshing drinks crafted with unique flavors.</p>
              <p>Perfect for every occasion and for every mood.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="what-box">
              <div className="icon-circle">
                <FaUtensils />
              </div>
              <h4>Fresh Products</h4>
              <p>Delicious dishes prepared by our experienced chefs.</p>
              <p>Every meal is made with love and care.</p>
            </div>
          </div>

        </div>
      </div>
      </section>
    </>
  )
}

