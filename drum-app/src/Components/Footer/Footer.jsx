/*
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css"
import MyImage from "../Images/sirtee.png"

const Footer = (props) => {
  const { showHistory, handleCheckHistory, data } = props

  /*function truncate(text, maxLength) {
    if (!text) return '';
    return text.length > maxLength
      ? text.slice(0, text.lastIndexOf(' ', maxLength)) + '...'
      : text;
  }*
  
  return (
    <footer>
      <div className="back-ground-radiant"></div>
      <div className='footer-content'>
        <div className='sir-tee'>
          <img src={MyImage} alt=""  className='my-image'/>
          <h1>SIR-TEE PROJECT</h1>
        </div>  
        <h2 className='footer-title' >{data?.title}</h2>
        <h2 className='footer-title2' >{data?.title2}</h2>
        <button onClick={handleCheckHistory}>
          <FontAwesomeIcon 
            icon ={faInfoCircle}
            FontAwesomeIcon/>
        </button>
      </div>
    </footer>
  );
};
export default Footer;
*

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";
import MyImage from "../Images/sirtee.png";

const Footer = (props) => {
  const { showHistory, handleCheckHistory, data } = props;
  const navigate = useNavigate(); // 👈

  const handleIconClick = () => {
    handleCheckHistory(); // still run your history toggle if needed
    navigate('/sidebar'); // 👈 navigate to sidebar page
  };

  return (
    <footer>
      <div className="back-ground-radiant"></div>
      <div className='footer-content'>
        <div className='sir-tee'>
          <img src={MyImage} alt="" className='my-image' />
          <h1>SIR-TEE PROJECT</h1>
        </div>  
        <h2 className='footer-title'>{data?.title}</h2>
        <h2 className='footer-title2'>{data?.title2}</h2>
        <button onClick={handleIconClick}>
          <FontAwesomeIcon 
            icon={faInfoCircle}
          />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
*/
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
  if (location.pathname === '/about' || location.pathname === '/askme'){
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
