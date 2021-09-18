import React from 'react';
import './AirtoolOverviewAndTeam.css';
import AirtoolOverview from "./AirtoolOverview/AirtoolOverview";
import AirtoolTeam from "./AirtoolTeam/AirtoolTeam";

const AirtoolOverviewAndTeam = () => (
  <div className="AirtoolOverviewAndTeam">
    <AirtoolOverview/>
    <AirtoolTeam/>
  </div>
);

export default AirtoolOverviewAndTeam;
