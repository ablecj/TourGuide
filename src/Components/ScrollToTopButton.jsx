import React, { useState, useEffect } from 'react';
// import { FaArrowUp } from 'react-icons/fa';
import '../Styles/ScrollToTopButton.css';


const ScrollToTopButton = () => {
// state for handling the button should visible or not
const [isVisible, setIsVisible] = useState(false);

const toggleVisibility  = () => {
    if (window.scrollY > 300) {
        setIsVisible(true);
    } else {
        setIsVisible(false);
    }
};

// scroll top function definition
const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
};

// useEffect for running the sideEffects 
useEffect(()=> {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility); 
},[]);

return (
    isVisible && (
        <button onClick={handleScrollToTop} className='scroll-to-top'>
            <i className="fas fa-arrow-up"></i>
        </button>
    )
)


}





export default ScrollToTopButton;