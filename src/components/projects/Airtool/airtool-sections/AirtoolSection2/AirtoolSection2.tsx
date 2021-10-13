import React from 'react';
import './AirtoolSection2.css';

const redesigningText = 'Our team had a mission to replace the existing system, which was about 15 years old at the time.\n' +
    'Before even getting to know the users, I drilled down into their experiences with this old software, to see it was:'

const AirtoolSection2 = () => (
  <div className="AirtoolRedesigning font-25">
      <h1>
          Redesigning
      </h1>
      <span className="new-line">
          {redesigningText}
          <ul className="redesigning-bullets">
              <li>Slow</li>
              <li>Tabular</li>
              <li>Took a long time to master </li>
              <li>Didn’t provide users with all needed information.</li>
              <li>Users could “trick” the former system in order to break IAF safety rules.</li>
          </ul>
      </span>
  </div>
);

export default AirtoolSection2;
