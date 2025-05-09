import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom'; // <-- added
import "./Footer.css";
import MyImage from "../Images/sirtee.png";
import facebookIcon from "../Images/facebook icon.png"
import instagramIcon from "../Images/Instagram icon.jpeg"
import xIcon from "../Images/X icon.png"
import whatsappIcon from "../Images/whatapp.png"


const Footer = (props) => {
  const { handleCheckHistory, data } = props;
  const location = useLocation(); // <-- detect current page
  if (location.pathname === '/about' || location.pathname === '/askme' || location.pathname === '/contacts'  || location.pathname === '/content'){
    return null; // ❌ don't render footer
  }

  return (
    <footer>
      <div className="back-ground-radiant"></div>
      <div className="footer-content">
        <div className="sir-tee">
          <img src={MyImage} alt="Sir Tee Logo" className="my-image" />
          <h1>SIR-TEE PROJECT</h1>
        </div>  

        {/* Only show these titles if data exists */}
        {data?.title && <h2 className="footer-title">{data.title}</h2>}
        {data?.title2 && <h2 className="footer-title2">{data.title2}</h2>}

        {/* Show the button ONLY if on homepage and handleCheckHistory exists */}
        {location.pathname === '/' && handleCheckHistory && (
          <button onClick={handleCheckHistory}>
            <FontAwesomeIcon icon={faInfoCircle} />
          </button>
        )}
        <div className="footer-icon-row">
        <div className="footer-icons-container">
          {/* <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener  noreferrer"> </a> */}
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
          <img src={facebookIcon} alt="Facebook" className="social-icon" />
          <img src={xIcon} alt="X" className="social-icon" />
          <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
