import React from 'react';
import "./Home.css";
import Intro from "../Intro/Intro";
import ProjectsLinks from "../projects-container/ProjectsLinks/ProjectsLinks";

// @ts-ignore
const Home = ({projectsLinks}) => (
    <div className="wrapHome">
        <div className="Home">
            <Intro/>
            <ProjectsLinks projectsLinks={projectsLinks}/>
        </div>
    </div>
);

export default Home;
