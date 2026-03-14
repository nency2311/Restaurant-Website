import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/img/pagebanner.jpg";

export default function PageBanner({ title }) {
  return (
    <section className="page-banner">
      <img src={banner} alt="banner" className="banner-img" />

      <div className="banner-overlay"></div>

      <div className="banner-content">
        <h1>{title}</h1>

        <div className="breadcrumb-box">
          <Link to="/">Home</Link> / <span>{title}</span>
        </div>
      </div>
    </section>
  );
}
