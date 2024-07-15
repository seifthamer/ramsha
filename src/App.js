import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/HeroSection/Hero';
import About from './components/About/About';
import Card from './components/Card/Card';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';

const App = () => {
  return (
    <>
      <Navbar />
      <Element name="Hero">
        <Hero />
      </Element>
      <Element name="About">
        <About />
      </Element>
      <Element name="Card">
        <Card />
      </Element>
      <Element name="Service">
        <Service />
      </Element>
      <Element name="Testimonial">
        <Testimonial />
      </Element>
      <Element name="Contact">
        <Contact />
      </Element>
      <BackToTopButton />
      <Footer />
    </>
  );
}

export default App;
