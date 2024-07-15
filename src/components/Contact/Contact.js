import React, { useState } from "react";
import axios from "axios";
import { BsCheck2Circle } from "react-icons/bs";
import "./Contact.css";
import { Button } from "react-scroll";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    description: ""
  });

  const addContact = async () => {
    try {
      const response = await axios.post("/api/contact", contactData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setContactData({              
      ...contactData,
      [e.target.name]: e.target.value
    });
  };       

  return (
    <>
      <div className="title">
        <h3>Contact us</h3>
      </div>
      <div className="contact-container">
        <div className="left-container">
          <h1 className="contact-title">Need to Know Something?</h1>
          <h1 className="contact-booking">
            Book A Call With Us Today And We Will:
          </h1>
          <h3 className="booking-description">
            <BsCheck2Circle />
            Take the time to understand your needs
          </h3>
          <h3 className="booking-description">
            <BsCheck2Circle />
            Walk you through our process of matching you with qualified and
            experienced Staff
          </h3>
          <h3 className="booking-description">
            <BsCheck2Circle />
            Discuss pricing options and help you find the right fit for your
            budget
          </h3>
          <h3 className="booking-description">
            <BsCheck2Circle />
            Provide guidance on how to get started and answer any questions you
            may have
          </h3>
        </div>
        <div className="right-container">
          <h2 className="input-title1">Not Sure Where To Start?</h2>
          <h1 className="input-title2">Let’s Have A Chat</h1>
          <label>Your Name</label>
          <input          
            type="text"
            name="name"
            value={contactData.name}
            onChange={handleChange}
          />
          <label>Your E-mail</label>
          <input
            type="text"
            name="email"
            value={contactData.email}
            onChange={handleChange}
          />
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={contactData.description}
            onChange={handleChange}  
          />
          <button className="btn-contact" onClick={addContact}>
            Book A Call With Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;



