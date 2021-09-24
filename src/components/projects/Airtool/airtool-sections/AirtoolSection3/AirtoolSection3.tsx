import React from 'react';
import './AirtoolSection3.css';
import usersAgesSection1 from '../../../../../images/projects/content/airtool/users-ages-section/users-ages-section-1.svg';
import usersLogo from '../../../../../images/projects/content/airtool/users-ages-section/users-logo.svg';
import environmentLogo from '../../../../../images/projects/content/airtool/users-section/environment-logo.svg';
import aircraftHangar from '../../../../../images/projects/content/airtool/users-section/aircraft-hangar.svg';

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
const AirtoolUserEnvDescription  = 'To get a wide knowledge of the machanics’ experience in their unfamiliar territory, I decided to conduct \n' +
    'uncontrolled user observations and group interviews at 3 different home bases with different aircraft types.';

const AirtoolSection3 = () => (
  <div className="flex-column font-25">
      <h1 className="new-line font-50 bold-text">{AirtoolUserEnvTitle}</h1>
      <p className="font-25">{AirtoolUserEnvDescription}</p>
      <h2 className="font-40 bold-text">The users</h2>
      <div className="flex-row justify-content-center padding-bottom-40">
          <div className="width-982 flex-row space-between">
          {userUsersSections.map((userSection) => (<div className="flex-row background-image width-220 height-120 justify-content-center align-items-center" style={{backgroundImage: 'url(' + usersAgesSection1 + ')'}}>
              <span className="new-line center-text">{userSection }</span></div>))}
          </div>
      </div>
      <div className="flex-row justify-content-center">
          <div className="background-image width-595 height-397" style={{backgroundImage: 'url(' + usersLogo + ')'}}></div>
      </div>
      <h2 className="font-40 bold-text">The environment</h2>
      <div className="flex-row justify-content-center padding-bottom-40">
          <div className="width-982 flex-row space-between">
              {environmentSections.map((userSection) => (<div className="flex-row background-image width-220 height-120 justify-content-center align-items-center" style={{backgroundImage: 'url(' + usersAgesSection1 + ')'}}>
                  <span className="new-line center-text">{userSection }</span></div>))}
          </div>
      </div>
      <div className="flex-row justify-content-center padding-bottom-40">
          <div className="flex-column">
              <div className="width-982 height-397" style={{backgroundImage: 'url(' + environmentLogo + ')'}}/>
              <p className="font-20 font-color-878787 font-weight-lighter">Tool room in an aircraft hangar, where Airtool app is used. </p>
          </div>
      </div>
      <div className="flex-row justify-content-center padding-bottom-40">
          <div className="flex-column">
              <div className="width-982 height-397" style={{backgroundImage: 'url(' + aircraftHangar + ')'}}/>
              <p className="font-20 font-color-878787 font-weight-lighter">Aircraft hangar, where the mechanics work.  </p>
          </div>
      </div>

  </div>
);

export default AirtoolSection3;
