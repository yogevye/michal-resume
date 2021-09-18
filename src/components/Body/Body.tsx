import React from 'react';
import styles from './Body.module.css';
import {Route, Switch} from "react-router-dom";
import Airtool from "../projects/Airtool/Airtool";
import Startlight from "../projects/Startlight/Startlight";
import Kabuli from "../projects/Kabuli/Kabuli";
import Jug from "../projects/Jug/Jug";
import Home from "../basic/home-container/Home/Home";
import About from "../basic/About/About";

// @ts-ignore
const Body = ({projectsLinks}) => (
  <div className={styles.Body}>
      <Switch>
          <Route path="/airtool">
              <Airtool />
          </Route>
          <Route path="/Startlight">
              <Startlight />
          </Route>
          <Route path="/Kabuli">
              <Kabuli />
          </Route>
          <Route path="/jug">
              <Jug />
          </Route>
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
