import React from 'react';
import { useNavigate } from 'react-router-dom';
import Time from "../Time/Time";
import "./Content.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SmallImage1 from "../Images/iyailu3a.png";
import SmallImage2 from "../Images/iyailu4a.png";
import BigImage from "../Images/iyabata 01.jpg";

const SideBar = (props) => {
  const { handleCheckHistory, data } = props;
  const navigate = useNavigate();

  return (
    <div className="side-bar">
      {/* LEFT SIDE: Full Image */}
      <div className="sidebar-left">
        <img src={BigImage} alt="Talking Drum" className="sidebar-full-image" />
      </div>

      {/* RIGHT SIDE: Content */}
      <div className="sidebar-right">
        {/* Overlay Button (optional, if you still want it to close) */}
        <div onClick={() => navigate('/')} className="bg-overlay"></div>

        {/* Small images */}
        <div className="image-container">
          <img src={SmallImage1} alt="Talking Drum" className="small-image" />
          <img src={SmallImage2} alt="Talking Drum" className="small-image" />
        </div>

        {/* Text contents */}
        <div className="sidebar-contents">
          <h1>{data?.name}</h1>
          <div className="description-container">
            <h4><Time /></h4>
            <p className="history-title">
              {data?.history?.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* Button */}
          <div className="arrow-container">
            <button onClick={() => navigate('/')} className='back-btn'>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button onClick={() => navigate('/contacts')} className='back-btn'>
              <FontAwesomeIcon icon={faArrowRight} />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

/*
import React from 'react';
import Time from "../Time/Time"
import "./SideBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import sidebarImage1 from "../Images/iyailu3a.png"
import sidebarImage2 from "../Images/iyailu4a.png"
import sidebarImage from "../Images/iyailu4.jpeg"



const SideBar = (props) => {
  const { handleCheckHistory, data } = props
  
  return (
    <div className="side-bar">
      <div className="sidebar-left">
        {/* Left Side: Image *}
        <img src={sidebarImage} alt="Talking Drum" className="sidebar-image" />
      </div>
      {/* right Side: Image *}
      <div className="sidebar-right"></div>
        <div onClick={handleCheckHistory}
        className="bg-overlay"></div>
        <div className="sidebar-contents">
        <div className='image-container'>
          <img
            src={sidebarImage1} // Your sidebar image
            alt="Talking Drum"
            className="sidebar-image"
          />
          <img
            src={sidebarImage2} // Your sidebar image
            alt="Talking Drum"
            className="sidebar-image"
          />
        </div>

        <h1>{data?.name}</h1>
        <div className='description-container'>
          <h4> <Time /> </h4>
          <p  className='history-title'>
            {data?.history?.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>

        </div>
        <button onClick={handleCheckHistory}>
          <FontAwesomeIcon
          icon={faArrowLeft}
          FontAwesomeIcon/>
        </button>
      </div>
    </div>
  );
};
export default SideBar;
*/
/*
import React, { useEffect, useState } from 'react';
import "./SideBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SideBar = ({ handleCheckHistory }) => {
  const [drums, setDrums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://6809fb061f1a52874cde9c87.mockapi.io/Iya-Ilu") 
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setDrums(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="side-bar">
      <div onClick={handleCheckHistory} className="bg-overlay"></div>
      <div className="sidebar-contents">
        <h1>IYA ILU</h1>
        <h2>History of Iya-Ilu</h2>

        {loading && <p>Loading drums...</p>}
        {error && <p>Error: {error}</p>}

        {!loading && !error && drums.map((drum) => (
          <div key={drum.id}>
            <p><strong>{drum.name}</strong>: {drum.description}</p>
            {drum.image && <img src={drum.image} alt={drum.name} width="200" />}
          </div>
        ))}

        <button onClick={handleCheckHistory}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
*/

/*
import React from 'react';
import "./SideBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SideBar = ({ handleCheckHistory, drums, loading, error }) => {
  return (
    <div className="side-bar">
      <div onClick={handleCheckHistory} className="bg-overlay"></div>
      <div className="sidebar-contents">
        <h1>IYA ILU</h1>

        <div>
          <h2>{!loading && !error && drums.length > 0 ? drums[0].description : "History of Iya-Ilu"}</h2>

          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && drums.length > 0 && (
            drums[0].history
              .split('. ')
              .filter((para) => para.trim() !== "")
              .map((para, index) => (
                <p key={index}>{para.trim()}.</p>
              ))
          )}

        </div>

        <button onClick={handleCheckHistory}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
*/
