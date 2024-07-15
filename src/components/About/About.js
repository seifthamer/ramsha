import React from "react";
import "./About.css";
import aboutimg from '../Assets/Layer_1.svg';

const About = () => {
  return (
    <>
    <div className="title">
            <h3>About Us</h3>
            </div>
      <div className="about-container">
        <div className="about-L">
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un a été
          </p>
        </div>
        <div className="about-R">
          <img src={aboutimg} alt="" />
        </div>
      </div>

    </>
  );
};

export default About;
