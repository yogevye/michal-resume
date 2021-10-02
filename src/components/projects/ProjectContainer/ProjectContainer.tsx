import React from 'react';
import './ProjectContainer.css';
import ProjectShortcut from "../ProjectShortcut/ProjectShortcut";

// @ts-ignore
const ProjectContainer = ({ProjectComponent, ProjectsLinks}) => {
    const header = ProjectComponent.header;
    const Component = ProjectComponent.component;
    const title = ProjectComponent.title;
    const description = ProjectComponent.description;

    return (
        <div className="flex-column">
            <div className="flex-column justify-content-end align-items-center full-width-capacity header-logo" style={{backgroundImage: 'url(' + header + ')'}}>
                    <div className="flex-row align-items-center project-content-width font-color">
                        <span className="font-70 font-weight-bold padding-right-20">{title}</span>
                        <span className="project-title-description">{description}</span>
                    </div>
            </div>
            <Component/>

            <ProjectShortcut ProjectsLinks={ProjectsLinks} />
        </div>
    );
}

export default ProjectContainer;
