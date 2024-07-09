// components/Carousel.jsx
import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % React.Children.count(children));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + React.Children.count(children)) % React.Children.count(children));
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}   
      >
        {React.Children.map(children, (child) => (
          <div className="carousel-item">{child}</div>
        ))}
      </div>
      <button className="carousel-button left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-button right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
