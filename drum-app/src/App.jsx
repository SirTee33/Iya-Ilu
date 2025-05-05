/*
import React, { useEffect, useState } from 'react';
import "./App.css";
import Main from './Components/Main/Main';
import SideBar from './Components/SideBar/SideBar';
import Footer from './Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [showHistory, setShowHistory] = useState(false)
  

  const handleCheckHistory = () => {
    setShowHistory(!showHistory)
  } 
  return (
    <div className="App">
      <Main />
      <div className="loading-state">
          <FontAwesomeIcon className='loading-icon'
            icon ={faGear}/>
        </div>
      {showHistory && (
        <SideBar handleCheckHistory={handleCheckHistory}/>)}
      <Footer handleCheckHistory={handleCheckHistory}/>
    </div>
  );
}
export default App;
*


import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css";
import Main from './Components/Main/Main';
import SideBar from './Components/SideBar/SideBar';
import MenuSidebar from './Components/MenuSidebar/MenuSidebar';
import Footer from './Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import Contacts from './Components/Pages/Contacts/Contacts';

function App() {
  const [showHistory, setShowHistory] = useState(false);
  const [drums, setDrums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(true); 
  };

  // Scroll to top when sidebar is shown
  useEffect(() => {
    if (showHistory) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showHistory]);
  
  useEffect(() => {
    fetch("https://6809fb061f1a52874cde9c87.mockapi.io/Iya-Ilu")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setTimeout(() => {
          setDrums(data);
          setLoading(false);
        }, 1000); // 1 second delay
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleCheckHistory = () => {
    setShowHistory((prev) => {
      const newState = !prev;
  
      if (!newState) {
        // We're switching from Sidebar back to Main, so scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
  
      return newState;
    });
  };

  // 👇 Show loader FIRST
  if (loading) {
    return (
      <div className="loading-container">
        <FontAwesomeIcon className="loading-icon" icon={faGear} spin />
        <p className="loading-text">Loading in progress, please wait.</p>
      </div>
    );
  }

  // 👇 Then show content once loading is done

  /*
  return (
    
    <div className="App">
      <Main Main showHistory={showHistory} handleMenuClick={handleMenuClick}/>
      {showHistory && (
        <SideBar
          handleCheckHistory={handleCheckHistory} data={drums[0]}
          /*drums={drums}
          loading={loading}
          error={error}*
        />
      )}

      <Footer handleCheckHistory={handleCheckHistory} data={drums[0]} />
    </div>
  );
}
export default App;
*


  return (
    <Router>
      <div className="App">
        <Main showHistory={showHistory} 
          handleMenuClick={handleMenuClick} 
          handleCheckHistory={handleCheckHistory}
         />

        {/* Display the Sidebar with the drum history *}
        {showHistory && (
          <SideBar
            handleCheckHistory={handleCheckHistory}
            data={drums[0]} 
          />
        )}

        {/* Display the MenuSidebar when showMenu is true *}
        {showMenu && (
          <MenuSidebar
            isOpen={showMenu}
            handleCloseMenu={() => setShowMenu(false)} // Close the menu
          />
        )}

        <Footer handleCheckHistory={handleCheckHistory} data={drums[0]}/>

        <Routes>
          <Route path="/" element={<Main showHistory={showHistory} handleMenuClick={handleMenuClick} />} />
          <Route path="/contacts" element={<Contacts />} />
          {/*<Route path="/about" element={<About />} />
          <Route path="/group" element={<Group />} />
          {/* Add routes for Contact, About, Group pages *}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
*/

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Main from './Components/Main/Main';
import Content from './Components/Content/Content';
import MenuSidebar from './Components/MenuSidebar/MenuSidebar';
import Footer from './Components/Footer/Footer';
import Contacts from './Pages/Contacts';
import About from './Pages/About';
import AskMe from './Pages/AskMe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

function AppContent() {
  const [showMenu, setShowMenu] = useState(false);
  const [drums, setDrums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();

  const handleMenuClick = () => {
    setShowMenu(true);
  };

  useEffect(() => {
    fetch("https://6809fb061f1a52874cde9c87.mockapi.io/Iya-Ilu")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setTimeout(() => {
          setDrums(data);
          setLoading(false);
        }, 1000); 
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <FontAwesomeIcon className="loading-icon" icon={faGear} spin />
        <p className="loading-text">Loading in progress, please wait.</p>
      </div>
    );
  }

  return (
    <div className="App">
      {showMenu && (
        <MenuSidebar isOpen={showMenu} handleCloseMenu={() => setShowMenu(false)} />
      )}

      <Routes>
        <Route path="/" element={<Main handleMenuClick={handleMenuClick} />} />
        <Route path="/content" element={<Content data={drums[0]} />} />
        <Route path="/contacts" element={<Contacts />} />
        {/*<Route path="/sidebar" element={<SideBar data={drums[0]} handleCheckHistory={handleCheckHistory} />} />*/}
        <Route path="/about" element={<About />} /> 
        <Route path="/askme" element={<AskMe />} />
      </Routes>
      {/* 👇 Footer ALWAYS shows below */}
      <Footer data={drums[0]} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
