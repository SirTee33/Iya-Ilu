import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../Styles/About.css'; // external styling
import iya1 from "../Components/Images/iyailu5.jpeg"
import iya2 from "../Components/Images/iyailu6.jpeg"
import iya3 from "../Components/Images/iyailu 0.jpg"
import iya4 from "../Components/Images/iyailu4.jpeg"
import konga1 from "../Components/Images/konga1.jpeg"
import konga2 from "../Components/Images/konga2.jpeg"
import gangan from "../Components/Images/gangan1.jpeg"
import sakara1 from "../Components/Images/sakara1.jpeg"
import sakara2 from "../Components/Images/sakara2.jpeg"
import konga0 from "../Components/Images/konga 0.jpg"
import wood from "../Components/Images/wood drum.jpg"
import agbamole1 from "../Components/Images/agbamole1.jpg"
import agbamole2 from "../Components/Images/agbamole 2.jpg"
import agbamole3 from "../Components/Images/agbamole 3.jpg"
import iyabata from "../Components/Images/iyabata 0.jpg"
import ganganwhite from "../Components/Images/gangan white.jpg"



const iyaIluImages = [
  iya1,
  iya2,
  iya3,
  iya4,
];
  const otherDrumImages = [
    konga1,
    konga2,
    gangan,
    sakara1,
    sakara2,
    konga0,
    wood,
    agbamole1,
    agbamole2,
    agbamole3,
    iyabata,
    ganganwhite

  ];

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const navigate = useNavigate();
  const allImages = [...iyaIluImages, ...otherDrumImages];

  
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-section">
        <h2>Our Vision</h2>
        <p>
          Our vision is to be a leading cultural platform that preserve and promotes the art of talking drum, "Iya-Ilu", and other traditional African musical instruments. We aim to bridge the gap between cultures, bringing people together through the power of rhythm, while celebrating the rich heritage and history of African music. 
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to educate, inspire, and connect people with the ancient rhythms and vibrant sounds of the talking drum. We strive to create a platform where individuals from all walks of life can explore, learn, and appreciate the cultural significance of the Iya-Ilu and other traditional drums. Through immersive experience, hands-on workshops, and cultural exchanges, we aim to foster a deeper understanding of Africa music, its traditions, and its importance in contemporary society.
        </p>
      </div>

      {/* About Content */}
      <div className="about-content">
        <h2>About Iya-Ilu "The Talking Drum"</h2>
        <p className="about-intro">
          Iya-Ilu is more than just a drum — it’s the heartbeat of tradition. 
          Our mission is to celebrate, teach, and preserve the beauty of African talking drums.
        </p>
        <p>
          The Talking Drum, also known as "Iya-Ilù" in Yoruba culture, is revered as the mother of all drums. 
          Its ability to mimic the tones and inflections of human speech makes it a unique and vital instrument in African traditions.
        </p>
        <p>
          Traditionally used to send messages across villages, celebrate royalty, and accompany dancers, 
          the Talking Drum holds a sacred place in history. Played with a curved stick and squeezed under the arm, 
          the drum speaks, sings, and tells stories of our ancestors.
        </p>
        <p>
          Today, the Talking Drum continues to echo its powerful voice in festivals, ceremonies, and musical performances, 
          symbolizing unity, communication, and resilience.
        </p>
      </div>
    </div>  

      {/* Gallery Section */}
      <div className="gallery-section">
        <h2>Talking Drums</h2>
        <div className="gallery-grid">
          {iyaIluImages.map((img, index) => (
            <img 
              key={index}
              src={img}
              alt={`Talking Drum ${index + 1}`}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(index);
              }}
            />
          ))}
        </div>
        <div className="gallery-section">
          <h2>Other Traditional Drums</h2>
          <div className="gallery-grid">
          {otherDrumImages.map((img, index) => (
            <img 
              key={index + iyaIluImages.length}
              src={img}
              alt={`Talking Drum ${index + 1}`}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(index + iyaIluImages.length);
              }}
            />
          ))}
        </div>
        </div>
        
        <div className='back-btn-container'>
          <button  onClick={() => navigate('/')} className='back-btn'>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>
      </div>

      {/* Lightbox Popup */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={allImages.map((src) => ({ src }))}
        on={{
          view: ({ index }) => setPhotoIndex(index),
        }}
      />
    </div>
  );
};

export default About;
