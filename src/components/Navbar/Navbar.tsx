import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

// @ts-ignore
const Navbar = ({ selectedNavbarLink, currentLinkName, basicLinks }) => (
    <nav className="Navbar">
        {basicLinks.map((basicLink: {link: string, title: string}) => {
            return (
                <div className="Link">
                    <Link id={basicLink.title} onClick={selectedNavbarLink} className={"Link-content " + (currentLinkName === basicLink.title ? 'selected-link' : 'not-selected-link')} to={basicLink.link}>{basicLink.title}</Link>
                </div>
            )
        })}
    </nav>
);

export default Navbar;
