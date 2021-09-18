import React from 'react';
import './ProjectsItem.css';
import {Link} from "react-router-dom";

const viewCaseStudyMessage = 'View Case Study ->';
const imgTest = import('../../../../../images/collection_mobile.jpeg');


// @ts-ignore
const ProjectsItem = ({projectLink}) => (
    <Link to={projectLink.link} className="ProjectLink">
        <div className="ProjectsItem">
            <div className="ProjectLogoContainer">
                <img src={projectLink.logo} alt="logo"  className="ProjectLogo"/>
            </div>
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
