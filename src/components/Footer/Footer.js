import React from "react";
import "./Footer.css";
import ramchalogo from "../Assets/logo.png";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-1">
        <AiFillFacebook className="social-icon" />
        <AiFillTwitterSquare className="social-icon" />
        <AiFillLinkedin className="social-icon" />
      </div>
      <div className="footer-2">
        <img src={ramchalogo} alt="" />
      </div>
      <div className="footer-3">
        <h5>Contact Us</h5>
        <p>
          <AiOutlinePhone className="contact-icon" />
          +1214541214512
        </p>
        <p>
          <AiOutlineMail className="contact-icon" /> Emailhere@gmail.com
        </p>
        <p>
          <CiLocationOn className="contact-icon" />
          Address 4000, Street 40
        </p>
      </div>
    </div>
  );
};

export default Footer;
