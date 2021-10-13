import React from 'react';
import './ProjectsItem-2.css';
import {Link} from "react-router-dom";
import arrowImg from '../../../../../images/arrow.svg';


const viewCaseStudyMessage = 'View Case Study';


// @ts-ignore
const ProjectsItem = ({projectLink}) => (
    <Link to={projectLink.link} className="ProjectLink">
        <div className="ProjectsItem">
            {/*<div className="ProjectLogoContainer" style={{backgroundImage: 'url(' + projectLink.logo + ')'}}/>*/}
                <img className="project-log" src={projectLink.logo}/>
            <div className="CardContainer">
                <div className="cardContent">
                    <div className="ProjectDescription">
                        <span className="ProjectDescription__first">{projectLink.redesignText}</span>
                        <span className="ProjectDescription__second">{projectLink.headLine}</span>
                        <span className="ProjectDescription__third">{projectLink.description}</span>
                    </div>
                    <div className="flex-row align-items-center">
                        <span className="go-to">{viewCaseStudyMessage}</span>
                        <img className="arrow-img-1" src={arrowImg}/>
                    </div>
                </div>
            </div>
        </div>
    </Link>
);

export default ProjectsItem;
