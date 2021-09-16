import React from 'react';
import './Intro.css';
import logo from "../../../../images/logo.svg";

const descriptionText = `I’m a UX/UI designer with over 4 years of experience, \n
          fascinated by tech innovation and it’s impact on people’s lives. \n
          Designing operational experiences for the Israeli Air Force.`;

const middleHeadLine = `User experience designer \n & improviser`;

const Intro = () => (
  <div className="Intro">
   <div className="logo-container">
       <img src={logo} alt="logo" className="main-logo"/>
   </div>
  <div className="description-container">
      <div className="new-line name-headline">
          Hi, I'm Michal.
      </div>
      <div className="new-line middle-head-line">
          {middleHeadLine}
      </div>
      <div className="new-line description-test">
         {descriptionText}
      </div>
  </div>
  </div>
);

export default Intro;
