import React from 'react';
import './AirtoolOverview.css';

const title = 'OVERVIEW';
const overiewText = 'AIRTOOL allows aircraft mechanics in the Israeli Air Force to fastly issue and \n' +
    'return sets of tools from the garage storage and keep track of all items at all times,\n' +
    'while maintaining speed, aviation safety and reliability.';
const funFact = 'Fun fact - if even 1 tool is missing, not a single plane can take off!';
const disclamer = 'Disclamer - for reasons of information security, no photographing was allowed at the air base, \n' +
    'some images for demonsrations are taken from Google Photos.';

const AirtoolOverview = () => (
  <div className="AirtoolOverview">
    <h1 className="airtool-overview-title">
        {title}
    </h1>
      <p className="new-line airtool-overview-text">
          {overiewText}
      </p>
      <p className="new-line airtool-fun-fact">
          <span className="bold-text"> Fun fact </span> - if even 1 tool is missing,<mark> not a single plane can take off! </mark>
      </p>
      <p className="new-line airtool-disclamer">
          {disclamer}
      </p>
  </div>
);

export default AirtoolOverview;
