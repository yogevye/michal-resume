import React from 'react';
import './AirtoolSection1.css';
import AirtoolOverview from "./AirtoolOverview/AirtoolOverview";
import AirtoolTeam from "./AirtoolTeam/AirtoolTeam";

const AirtoolSection1 = () => (
  <div className="AirtoolOverviewAndTeam">
    <AirtoolOverview/>
    <AirtoolTeam/>
  </div>
);

export default AirtoolSection1;
