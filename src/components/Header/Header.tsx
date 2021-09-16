import React from 'react';
import './Header.css';
import Navbar from "../Navbar/Navbar";
import nameLogo from '../../images/name-logo.svg';

// @ts-ignore
const Header = ({selectedNavbarLink, currentLinkName }) => (
    <div className="Header">
        <div className="logo-name">
            <img src={nameLogo} alt="name logo"/>
        </div>
        <div className="Navbar-content">
            <Navbar selectedNavbarLink={selectedNavbarLink} currentLinkName={currentLinkName}/>
        </div>

    </div>
);

export default Header;
