import React, { useEffect, useState } from 'react';
import "../Styles/AskMe.css"; // You can create this CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



const AskMe = () => {
  const [askMe, setAskMe] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
    

  useEffect(() => {
    fetch('https://6809fb061f1a52874cde9c87.mockapi.io/AskMe') // change to your actual MockAPI endpoint
      .then((res) => res.json())
      .then((data) => {
        setAskMe(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching FAQs:", error);
        setLoading(false);
      });
  }, []);

  const toggleFAQ = (index) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  if (loading) {
    return <div className="spinner">Loading...</div>; // Spinner
  }
  return (
    <div className="people-ask-container">
      <h1>People Also Ask</h1>
      <div className="faq-grid">
        {askMe.map((data, index) => (
          <div key={data?.id} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {data?.question}
              <FontAwesomeIcon icon={expandedIndex === index ? faChevronUp : faChevronDown} />
            </div>
            <div className={`faq-answer ${expandedIndex === index ? 'open' : ''}`}>
              {expandedIndex === index && data?.answer}
            </div>
          </div>
        ))}
      </div>
      <div className='back-btn-container'>
        <button  onClick={() => navigate('/')} className='back-btn'>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
      
    </div>
  );
 
};

/*
  return (
    <div className="people-ask-container">
      <h1>People Also Ask</h1>
      {faqs.map((faq, index) => (
        <div key={faq.id} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <FontAwesomeIcon icon={expandedIndex === index ? faChevronUp : faChevronDown} />
          </div>
          <div className={`faq-answer ${expandedIndex === index ? 'open' : ''}`}>
            {expandedIndex === index && faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};
*/
export default AskMe;
