import React from 'react';
import './Hero.css';
import heroimg from '../Assets/worker.png';
const Hero = () => {
  return (
    <div className='hero_container'>
        <div className='hero_text'>
        <h1>
            DO YOU NEED HELP? <br />
            WE AFFORD EVERY TYPE  <br />
            OF HELP AND NEED.
        </h1>
        </div>
        <div className='hero_img'>
            <img src={heroimg} alt='image' />
        </div>
    </div>  
    )
}

export default Hero;