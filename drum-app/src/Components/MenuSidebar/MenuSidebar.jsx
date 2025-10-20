import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBookOpen, FaQuestionCircle, FaEnvelope } from 'react-icons/fa';
import './MenuSidebar.css';

const MenuSidebar = ({ handleCloseMenu, isOpen }) => {
  return (
    <div className={`menu-sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={handleCloseMenu} className="close-btn">❌</button>

      <ul className="menu-list">
        <li>
          <Link to="/about" onClick={handleCloseMenu}>
            <FaUser className="menu-icon about-icon" /> About
          </Link>
        </li>
        <li>
          <Link to="/content" onClick={handleCloseMenu}>
            <FaBookOpen className="menu-icon content-icon" /> Content
          </Link>
        </li>
        <li>
          <Link to="/askme" onClick={handleCloseMenu}>
            <FaQuestionCircle className="menu-icon ask-icon" /> AskMe
          </Link>
        </li>
        <li>
          <Link to="/contacts" onClick={handleCloseMenu}>
            <FaEnvelope className="menu-icon contact-icon" /> Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuSidebar;
