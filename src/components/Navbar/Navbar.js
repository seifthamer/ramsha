import React, { useState } from "react";
import "./Navbar.css";
import ramchalogo from "../Assets/logo.png";
import { Link as ScrollLink } from "react-scroll";
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const Navbar = () => {

  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header>
        <img className="logo" src={ramchalogo} alt="logo" />
          <ul className={Mobile? "nav-links-mobile" : "nav_links"} onClick={() =>setMobile(false)}>
            <li>
              <ScrollLink
                to="About"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Service"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Service
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        <ScrollLink
          to="Contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        ></ScrollLink>
        <button className="nav-button">Download App</button>
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile? <ImCross/> : <FaBars/>}
        </button>
      </header>
    </>
  );
};

export default Navbar;
