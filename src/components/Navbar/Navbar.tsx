import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
// @ts-ignore
import Pdf from '../../images/Michal Amrami CV.pdf';

// @ts-ignore
const Navbar = ({ selectedNavbarLink, currentLinkName, basicLinks }) => (
    <nav className="Navbar">
        {basicLinks.map((basicLink: {link: string, title: string}) => {
            // if(basicLink.title === 'RESUME' || 1===1){
                return (<h1>rere</h1>)
               // ( <div>
               //     <a href = {Pdf} target = "_blank">Download Pdf</a>
               // </div>)
            // }
            // else {
            //     return (
            //         <div className="Link">
            //             <Link id={basicLink.title} onClick={selectedNavbarLink} className={"Link-content " + (currentLinkName === basicLink.title ? 'selected-link' : 'not-selected-link')} to={basicLink.link}>{basicLink.title}</Link>
            //         </div>
            //     )
            // }
        })}
    </nav>
);

export default Navbar;
