import React from 'react';
import './AirtoolTeam.css';

const teamTitle = 'TEAM';
// // @ts-ignore
// const teamPoints: ['User representative', 'Architect', 'Software team leader', '7 developers', 'UX/UI designer (me)'];

const AirtoolTeam = () => (
  <div className="AirtoolTeam">
      <h1 className="airtool-team-title font-25">
          {teamTitle}
      </h1>
      <ul className="team-bullet-points font-25">
          <li>User representative</li>
          <li>Architect</li>
          <li>Software team leader</li>
          <li>7 developers</li>
          <li>UX/UI designer (me)</li>
      </ul>
  </div>
);

export default AirtoolTeam;
