import React from 'react';
import './ProjectsItems.css';
import ProjectsItem from "../ProjectsItem/ProjectsItem";

// @ts-ignore
const ProjectsItems = ({projectsLinks}) => {
    return(
        <div className="ProjectsItems">
            {projectsLinks.map((projectLink: {link: string, name: string}) => {
            return (<ProjectsItem projectLink={projectLink}/>)
        })}
        </div>
    );
};


export default ProjectsItems;


// <div className="ProjectsItems">