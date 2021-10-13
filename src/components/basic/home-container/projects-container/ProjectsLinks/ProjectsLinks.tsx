import React from 'react';
import './ProjectsLinks.css';
import logo from '../../../../../images/projects-links-header.svg'
import ProjectsItems from "../ProjectsItems/Projects-items";

// @ts-ignore
const ProjectsLinks = ({projectsLinks}) => (
  <div className="ProjectsLinks">
      <img src={logo} alt="projects link logo" className="projects-links-logo"/>
      <ProjectsItems projectsLinks={projectsLinks}/>
  </div>
);

export default ProjectsLinks;
