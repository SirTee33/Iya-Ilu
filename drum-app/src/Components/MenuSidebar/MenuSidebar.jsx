import React from 'react';
import { Link } from 'react-router-dom';
import './MenuSidebar.css'; // (new CSS for left sidebar)


const MenuSidebar = ({ handleCloseMenu, isOpen  }) => {
  return (
    <div className={`menu-sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={handleCloseMenu} className="close-btn">❌</button>

      <ul className="menu-list">
        <li>
          <Link to="/about" onClick={handleCloseMenu}>About</Link>
        </li>
        <li>
          <Link to="/content" onClick={handleCloseMenu}>Content</Link>
        </li>
        <li>
          <Link to="/contacts" onClick={handleCloseMenu}>Contacts</Link>
        </li>
        <li>
          <Link to="/askme" onClick={handleCloseMenu}>AskMe</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuSidebar;
