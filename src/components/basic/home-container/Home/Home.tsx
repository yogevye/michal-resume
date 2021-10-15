import React from 'react';
import "./Home.css";
import Intro from "../Intro/Intro";
import ProjectsLinks from "../projects-container/ProjectsLinks/ProjectsLinks";

// @ts-ignore
const Home = ({projectsLinks, resetCurrentLink}) => (
    <div className="wrapHome">
        <div className="Home">
            <Intro/>
            <ProjectsLinks projectsLinks={projectsLinks} resetCurrentLink={resetCurrentLink}/>
        </div>
    </div>
);

export default Home;
