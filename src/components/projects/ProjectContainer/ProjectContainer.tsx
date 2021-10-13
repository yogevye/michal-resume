import React from 'react';
import './ProjectContainer.css';
import ProjectShortcut from "../ProjectShortcut/ProjectShortcut";

// @ts-ignore
const ProjectContainer = ({ProjectComponent, ProjectsLinks}) => {
    const header = ProjectComponent.header;
    const headerMobile = ProjectComponent.headerMobile;
    const Component = ProjectComponent.component;
    const title = ProjectComponent.title;
    const description = ProjectComponent.description;

    return (
        <div className="flex-column project-container">
            <div className="header-web">
                <img alt="r1r" className="header-img" src={header} />
                <div className="flex-row align-items-center project-content-width web-header-content font-color">
                    <span className="font-70 font-weight-bold padding-right-20">{title}</span>
                    <span className="project-title-description">{description}</span>
                 </div>
            </div>
            <div className='mobile-header'>
                <img alt="rr" className="header-mobile-img" src={headerMobile}/>
                <div className="header-title">
                    <span className="project-name">{title}</span>
                    <span className="project-title-description">{description}</span>
                </div>
            </div>
            <Component/>


            <ProjectShortcut ProjectsLinks={ProjectsLinks} />
        </div>
    );
}

export default ProjectContainer;
