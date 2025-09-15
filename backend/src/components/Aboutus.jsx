import React from 'react';
import '../components/style.css';
import { Link, Outlet } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h2>About Our Electronic Store</h2>
      <p>
        Welcome to our E-Commerce platform, your one-stop shop for the latest and greatest in electronics!
        We specialize in high-quality products, including computers, mobiles, laptops, and accessories.
      </p>

      <div className="about-grid">
      <Link to="/computers">
        <div className="about-item">        
          <img src="computers.jpeg" alt="Computers" />
          <h3>Computers</h3>
          <p>Find the best computers for gaming, work, and personal use.</p>
        </div>
        </Link>

        <Link to="/mobiles">
        <div className="about-item">
          <img src="mobiles.jpeg" alt="Mobiles" />
          <h3>Mobiles</h3>
          <p>Latest smartphones from top brands at unbeatable prices.</p>
        </div>
        </Link>
        <Link to="/laptops">
        <div className="about-item">
          <img src="laptops.jpeg" alt="Laptops" />
          <h3>Laptops</h3>
          <p>Powerful laptops for professionals, students, and gamers.</p>
        </div>
        </Link>
        <Link to="/pendrives">
        <div className="about-item">
          <img src="accessories.jpg" alt="Accessories" />
          <h3>Accessories</h3>
          <p>Find the best accessories like pendrives, keyboards, and more.</p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;