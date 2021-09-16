import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

// @ts-ignore
const Navbar = ({ selectedNavbarLink, currentLinkName }) => (
      <nav className="Navbar">
          <div className="Link">
              <Link id="home" onClick={selectedNavbarLink} className={"Link-content " + (currentLinkName === 'home' ? 'selected-link' : 'not-selected-link')} to="/">HOME</Link>
          </div>{}
          <div className="Link">
              <Link id="about" onClick={selectedNavbarLink} className={"Link-content " + (currentLinkName === 'about' ? 'selected-link' : 'not-selected-link')} to="/">ABOUT</Link>
          </div>
          <div className="Link">
              <Link id="resume" onClick={selectedNavbarLink} className={"Link-content " + (currentLinkName === 'resume' ? 'selected-link' : 'not-selected-link')} to="/">RESUME</Link>
          </div>
          <div className="Link">
              <Link id="contact" onClick={selectedNavbarLink} className={"Link-content " + (currentLinkName === 'contact' ? 'selected-link' : 'not-selected-link')} to="/">CONTACT</Link>
          </div>
      </nav>
);

export default Navbar;
