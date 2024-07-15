import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './BackToTopButton.css';
import { AiOutlineArrowUp } from 'react-icons/ai';

const BackToTopButton = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <button className="back-to-top-button" onClick={scrollToTop}>
      <AiOutlineArrowUp />
    </button>
  );
};

export default BackToTopButton;
