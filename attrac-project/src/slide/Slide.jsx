import React, { useState } from 'react';
import styles from './slide.module.scss';

const Slider = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0); 

  const handleSlideClick = (index) => {
    setActiveIndex(index); 
  };

  return (
    <div className={styles.slide__container}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === activeIndex ? styles.active : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          onClick={() => handleSlideClick(index)}
        >
          <h3>{slide.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Slider;