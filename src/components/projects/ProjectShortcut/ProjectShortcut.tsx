import React from 'react';
import './ProjectShortcut.css';
import logo from "../../../images/projects-links-header.svg";
import {Link} from "react-router-dom";

// @ts-ignore
const ProjectShortcut = ({ProjectsLinks}) => (
  <div className="ProjectShortcutWrapper">
    <div className="ProjectShortcut">
        <img src={logo} alt="projects link logo" className="ProjectsShortcutHeader"/>
        <div className="projects-shortcut-container">
            {ProjectsLinks.map((ProjectLink: { linkLogo: any; link:string}) => (
                <div>
                    <Link to={ProjectLink.link} className="ProjectLink">
                        <img src={ProjectLink.linkLogo} alt="project link logo" className="ProjectLinkLogo"/>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  </div>
);

export default ProjectShortcut;
