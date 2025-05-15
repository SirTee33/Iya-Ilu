import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom'; // <-- added
import "./Footer.css";
import MyImage from "../Images/sirtee.png";
import facebookIcon from "../Images/facebook icon.png"
import tiktokIcon from "../Images/tiktok icon.png"
import xIcon from "../Images/X icon.png"
import instagramIcon from "../Images/Instagram icon.jpeg"


const Footer = (props) => {
  const { handleCheckHistory, data } = props;
  const location = useLocation(); // <-- detect current page
  if (location.pathname === '/about' || location.pathname === '/askme' || location.pathname === '/contacts' || location.pathname === '/content') {
    return null; // ❌ don't render footer
  }

  return (
    <footer>
      <div className="back-ground-radiant"></div>
      <div className="footer-content">
        <div className="sir-tee">
          <img src={MyImage} alt="Sir Tee Logo" className="my-image" />
          <h1 className='animated-title'>SIR-TEE PROJECT</h1>
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
            <a href="https://www.tiktok.com/@johnteey" target="_blank" rel="noopener  noreferrer">
              <img src={tiktokIcon} alt="Tiktok" className="social-icon" />
            </a>
            <a href="https://www.facebook.com/John Taiwo T.Baba" target="_blank" rel="noopener  noreferrer">
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.x.com/@TwinTeey" target="_blank" rel="noopener  noreferrer">
              <img src={xIcon} alt="X" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener  noreferrer">
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
