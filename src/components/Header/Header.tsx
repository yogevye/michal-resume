import React from 'react';
import './Header.css';
import Navbar from "../Navbar/Navbar";
import nameLogo from '../../images/name-logo.svg';

// @ts-ignore
const Header = ({selectedNavbarLink, currentLinkName, basicLinks}) => (
    <div className="header-warp">
        <div className="Header">
            <img src={nameLogo} alt="name logo"/>
            <div className="Navbar-content">
                <Navbar selectedNavbarLink={selectedNavbarLink} currentLinkName={currentLinkName} basicLinks={basicLinks}/>
            </div>

        </div>
    </div>

);

export default Header;
