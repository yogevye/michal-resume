import React from 'react';
// import {Link} from "react-router-dom";
import "./Home.css";
import Intro from "../Intro/Intro";
import ProjectsLinks from "../projects-container/ProjectsLinks/ProjectsLinks";

// @ts-ignore
const Home = ({projectsLinks}) => (
    <div className="Home">
       <Intro/>
       <ProjectsLinks projectsLinks={projectsLinks}/>
    </div>

);

export default Home;



// <nav>
//     <ul>
//         <li>
//             <Link to="/airtool">airtool</Link>
//         </li>
//         <li>
//             <Link to="/Startlight">Startlight</Link>
//         </li>
//         <li>
//             <Link to="/Kabuli">Kabuli</Link>
//         </li>
//         <li>
//             <Link to="/jug">jug</Link>
//         </li>
//     </ul>
// </nav>