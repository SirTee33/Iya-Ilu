import React, { useState } from 'react';
import "../Styles/Contacts.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ContactImage from "../Components/Images/iyailu.jpeg";
import Phone from "../Components/Images/phone icon1.png";
import Email from "../Components/Images/email icon1.png";
// import Address from "../Components/Images/address icon1.png";
import facebookIcon from "../Components/Images/facebook icon.png"
import xIcon from "../Components/Images/X icon.png"
import whatsappIcon from "../Components/Images/whatapp.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/send-email`, formData); /*('https://iya-ilu-backend.onrender.com') await  await axios.post('http://localhost:5000/send-email', formData);
      */
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <img src={ContactImage} alt="Talking Drum" className="sidebar-full-image" />
      </div>

      <div className="contact-right">
        <div className='back-btn-container'>
          <button onClick={() => navigate('/')} className='back-btn'>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>
        <h2>Contact Us</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              placeholder="Enter your name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              placeholder="Enter your email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              name="message"
              placeholder="Enter your message" 
              value={formData.message}
              onChange={handleChange}
              required 
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
        <p>{status}</p>
        <div className="contact-info">
        <div className="contact-info-item">
          <img src={Phone} alt="" /> 
          <img src={whatsappIcon} alt="" /> +2348136190222
        </div>
        <div className="contact-info-item">
          <img src={Email} alt="" /> ojotaye33@gmail.com
        </div>
        <div className="contact-info-item">
          <img src={facebookIcon} alt="" /> @John Taiwo T.Baba
        </div>
        <div className="contact-info-item">
          <img src={xIcon} alt="" /> @TaiwoJohn
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default Contacts;
