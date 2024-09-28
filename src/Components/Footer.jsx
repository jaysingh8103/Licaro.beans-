import React from 'react';
import './Footer.css'; // Ensure this CSS file is updated
// import logo from './path/to/your/logo.png'; // Update the path to your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <FontAwesomeIcon icon={faPhone} /> 
            <a href="tel:+1234567890"> +91 9767700077</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> 
            <a href="mailto:info@licaro.beans">licaro.beverages@gmail.com</a>
          </p>
          <p>Kothrud , Pune</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
          <a href="https://www.instagram.com/licaro.beans?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
         
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        {/* <img src={logo} alt="Licaro.Beans Logo" className="footer-logo" /> */}
        <p>&copy; {new Date().getFullYear()} Licaro.Beans. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
