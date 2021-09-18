import React from 'react';
import './ProjectsItem.css';
import {Link} from "react-router-dom";
const viewCaseStudyMessage = 'View Case Study ->';


// @ts-ignore
const ProjectsItem = ({projectLink}) => (
    <Link to={projectLink.link} className="ProjectLink">
        <div className="ProjectsItem">
            <div className="ProjectLogoContainer" style={{backgroundImage: 'url(' + projectLink.logo + ')'}}/>
            <div className="CardContainer">
                <div className="ProjectDescription">
                    <div className="new-line redesignText">
                        {projectLink.redesignText}
                    </div>
                    <div className="headLine">
                        {projectLink.headLine}
                    </div>
                    <div className="new-line ProjectDescriptionText">
                        {projectLink.description}
                    </div>
                </div>
               <div className="goto">
                   <div className="new-line goToText">
                       {viewCaseStudyMessage}
                   </div>
               </div>
            </div>
        </div>
    </Link>
);

export default ProjectsItem;
