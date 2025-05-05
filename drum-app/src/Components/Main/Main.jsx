import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./Main.css"
import mainImage from "../Images/iyailu.jpeg"
//import sidebarImage from "../Images/iyailu4.jpeg"
const Main = ({ showHistory, handleMenuClick, handleCheckHistory }) => {
  return (
    <div className='main'>
      <div className="menu-icon-container" onClick={handleMenuClick}>
        <FontAwesomeIcon className='menu-icon'
          icon ={faBars} />
      </div>
      <img
        src={mainImage}
        alt="Talking Drum"
        className="main-img" 
      />  
    </div>
  );
};
export default Main;