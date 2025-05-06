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

