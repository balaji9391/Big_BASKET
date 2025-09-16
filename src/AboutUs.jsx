import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutus-container">
      <h1>About Us</h1>
      
      <div className="aboutus-content">
        <p>
          Welcome to <strong>MyCart</strong>! 🛒 <br />
          We are passionate about bringing fresh vegetables, high-quality dairy, chocolates, and non-veg items directly to your doorstep.  
        </p>

        <p>
          Our mission is to make online grocery shopping simple, fast, and reliable. We prioritize:
        </p>

        <ul>
          <li>Freshness & Quality ✅</li>
          <li>Affordable Prices 💰</li>
          <li>Fast Delivery 🚚</li>
          <li>Customer Satisfaction 💖</li>
        </ul>

        <p>
          Our team is dedicated to providing you with the best products and a seamless shopping experience.
        </p>

        <h3>Contact Us</h3>
        <p>Email: support@mycart.com</p>
        <p>Phone: +91 1234567890</p>
        <p>Address: 123 Market Street, City, Country</p>
      </div>
    </div>
  );
}

export default AboutUs;
