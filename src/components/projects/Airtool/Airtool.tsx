import React from 'react';
import './Airtool.css';
import AirtoolOverviewAndTeam from "./airtool-sections/AirtoolOverviewAndTeam/AirtoolOverviewAndTeam";
import AirtoolRedesigning from "./airtool-sections/AirtoolRedesigning/AirtoolRedesigning";

// @ts-ignore
const Airtool = () => (
  <div className="Airtool">
      <AirtoolOverviewAndTeam />
      <AirtoolRedesigning/>
  </div>
);

export default Airtool;
