// components/WhatsAppIcon.jsx
import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/+916238888326" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50%',
        padding: '12px',
        fontSize: '24px',
        zIndex: 1000,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
        textAlign: 'center',
      }}
      data-aos="fade-right"
    >
      <i className="fab fa-whatsapp" style={{width: '30px', height: '30px' }} />
    </a>
  );
};

export default WhatsAppIcon;
