import React from 'react';
import './AirtoolOverview.css';
import emoji from '../../../../../../images/projects/content/airtool/section 1/silence_emoji.svg'

const title = 'OVERVIEW';
const overiewText = 'AIRTOOL allows aircraft mechanics in the Israeli Air Force to quickly issue and \n' +
    'return sets of tools from the garage storage and keep track of all items at all times,\n' +
    'while maintaining speed, aviation safety and reliability.';
const disclamer = 'Disclaimer - for reasons of information security, no photographing was allowed at the air base, \n' +
    'some images for demonstrations are taken from Google Photos.';

const AirtoolOverview = () => (
  <div className="AirtoolOverview">
    <h1 className="airtool-overview-title font-25">
        {title}
    </h1>
      <p className="new-line font-25">
          {overiewText}
      </p>
      <p className="new-line font-25">
          <span className="bold-text"> Fun fact </span> - if even 1 tool is missing,<mark> not a single plane can take off! </mark>
      </p>
      <div className="AirtoolOverview__disclamer">
          <img alt="ghhh" className="emoji" src={emoji}/>
          <p className="new-line airtool-disclamer">
              {disclamer}
          </p>
      </div>

  </div>
);

export default AirtoolOverview;
