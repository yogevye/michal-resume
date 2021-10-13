import React from 'react';
import './Intro.css';
import logo from "../../../../images/logo.svg";

const descriptionText = `I’m a UX + UI designer with over 4 years of experience,\n fascinated by tech innovation and it’s impact on people’s lives.\n Designing operational experiences for the Israeli Air Force.`;

const middleHeadLine = `User experience designer \n & improviser`;

const Intro = () => (
  <div className="Intro">
       <img src={logo} alt="logo" className="main-logo"/>
  <div className="description-container">
      <div className="font-70 font-weight-bold">
          Hi, I'm Michal.
      </div>
      <div className="new-line font-50 font-weight-bolder padding-bottom-10">
          {middleHeadLine}
      </div>
      <p className="new-line font-25 intro_description">
         {descriptionText}
      </p>
  </div>
  </div>
);

export default Intro;
