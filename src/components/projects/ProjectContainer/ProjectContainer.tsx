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
        <div className="ProjectContainer">
            <div className="header-logo" style={{backgroundImage: 'url(' + header + ')'}}>
                    <div className="project-headline-wrap">
                        <div className="project-headline">
                            <div className="project-headline-text">
                                <div className="project-title-test">{title}</div>
                                <div className="project-title-description">{description}</div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="project-content">
                <div className="project-content-width">
                    <Component/>
                </div>
            </div>
            <ProjectShortcut ProjectsLinks={ProjectsLinks} />
        </div>
    );
}

export default ProjectContainer;
