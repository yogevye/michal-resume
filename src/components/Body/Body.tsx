import React from 'react';
import styles from './Body.module.css';
import {Route, Switch} from "react-router-dom";
import Home from "../basic/home-container/Home/Home";
import About from "../basic/About/About";

// @ts-ignore
const Body = ({projectsLinks, ProjectsComponents}) => (
  <div className={styles.Body}>
      <Switch>
          {projectsLinks.map((projectLink: { component: string | number; link: any; }) => {
              const ProjectComponent = ProjectsComponents[projectLink.component];
              console.log(projectLink);
              return (
                  <Route path={projectLink.link}>
                      <ProjectComponent projectLink={projectLink}/>
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

export default Body;
