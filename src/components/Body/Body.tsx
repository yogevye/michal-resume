import React, {useLayoutEffect} from 'react';
import styles from './Body.module.css';
import {Route, Switch, useLocation} from "react-router-dom";
import Home from "../basic/home-container/Home/Home";
import About from "../basic/About/About";
import ProjectContainer from "../projects/ProjectContainer/ProjectContainer";


// @ts-ignore
const Body = ({projectsLinks, ProjectsComponents}) =>{
    const location = useLocation();
// Scroll to top if path changes
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return  (
        <div className={styles.Body}>
            <Switch>
                {projectsLinks.map((projectLink: { component: string | number; link: any; name:string}) => {
                    const ProjectComponent = ProjectsComponents[projectLink.component];
                    const filteredProjectsLinks = projectsLinks.filter((currProjectLink: {name:string}) => currProjectLink.name !== projectLink.name);
                    console.log(projectLink);
                    return (
                        <Route path={projectLink.link}>
                            <ProjectContainer ProjectComponent={ProjectComponent} ProjectsLinks={filteredProjectsLinks}/>
                        </Route>
                    )
                })}
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home projectsLinks={projectsLinks}/>
                </Route>
            </Switch>
        </div>
    );
}

export default Body;
