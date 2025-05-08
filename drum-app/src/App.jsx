import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  const [, setError] = useState(null);

  
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
