import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { owlCardData } from '../Data';
import '../Styles/DestinationDetails.css';

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = owlCardData.find((item) => item.id === parseInt(id));

  if (!destination) {
    return <h2>Destination not found</h2>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <button className='page-section-link btn btn-outline-dark' onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>
        ← Back
      </button>
      <h2 className='Destination_Details_title'>{destination.title}</h2>
      <img
        src={destination.image}
        alt={destination.title}
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginTop: '15px' }}
      />
      <p style={{ marginTop: '20px' }}>{destination.subtitle}</p>

      {destination.itenary.map((section, idx) => (
        <div key={idx} style={{ marginTop: '30px' }}>
          <h2 className='Destination_section_title'>{section.title}</h2>
          <ul>
            {section.description.map((desc, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DestinationDetails;
