import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import './ScrollTop.css';

const ScrollTop= () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
    }};

useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {window.removeEventListener('scroll', toggleVisibility);}}, []);

const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
return (
    <div className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
        <FaArrowCircleUp className="icon" />
    </div>
    );
};

export default ScrollTop;