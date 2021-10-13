import React from 'react';
import './AirtoolSection3.css';
import usersLogo from '../../../../../images/projects/content/airtool/users-ages-section/users-logo.svg';
import environmentLogo from '../../../../../images/projects/content/airtool/users-section/environment-logo.svg';
import aircraftHangar from '../../../../../images/projects/content/airtool/users-section/aircraft-hangar.svg';
import Paragraph from "../../../../utils/Pharagraph/Paragraph";

const userUsersSections = ['18-21\n' +
'years old', 'Aircraft\n' +
'machanics', 'Low\n' +
'motivation', '1 day use\n' +
'every 2 weeks'];

const environmentSections = [
    'Noisy',
    'Operational',
    'Crowded',
    'Intense'
];

const AirtoolUserEnvTitle = 'User & environment\n' +
    'analisys';

const AirtoolUserEnvDescription = [
    {
        text: 'To get a wide knowledge of the machanics’ experience in their unfamiliar territory, I decided to conduct '
    },
    {
        text: 'uncontrolled user observations',
        bold: true
    },
    {
        text: ' and '
    },
    {
        text: 'group interviews',
        bold: true
    },
    {
        text: ' at 3 different home bases with different aircraft types.'
    },
];

const AirtoolSection3 = () => (
  <div className="flex-column font-25">
      <div className="flex-column padding-bottom-40">
          <h1 className="new-line font-50 bold-text">{AirtoolUserEnvTitle}</h1>
          <Paragraph paragraph={AirtoolUserEnvDescription}/>
      </div>

      <div className="flex-column padding-bottom-80">
          <h2 className="font-40 bold-text">The users</h2>
          <div className="flex-row justify-content-center padding-bottom-40">
              <div className="section3_bubble">
                  {userUsersSections.map((userSection) => (
                      <div className="bubble">
                          <span className="new-line center-text">{userSection }</span>
                      </div>
                  ))}
              </div>
          </div>
          <div className="flex-row justify-content-center">
              <img alt="ggg" className="img-phone-full-capacity" src={usersLogo}/>
          </div>
      </div>

      <h2 className="font-40 bold-text">The environment</h2>
      <div className="flex-row justify-content-center padding-bottom-40">
          <div className="section3_bubble">
              {environmentSections.map((userSection) => (
                  <div className="bubble">
                      <span className="new-line center-text">{userSection }</span>
                  </div>
                 ))}
          </div>
      </div>
      <div className="flex-row justify-content-center padding-bottom-10">
          <div className="flex-column">
              <img alt="ggg2" className="img-phone-full-capacity" src={environmentLogo}/>
              <p className="font-20 font-color-878787 font-weight-lighter">Tool room in an aircraft hangar, where Airtool app is used. </p>
          </div>
      </div>
      <div className="flex-row justify-content-center">
          <div className="flex-column">
              <img alt="ggg4" className="img-phone-full-capacity" src={aircraftHangar}/>
              <p className="font-20 font-color-878787 font-weight-lighter">Aircraft hangar, where the mechanics work.  </p>
          </div>
      </div>

  </div>
);

export default AirtoolSection3;
