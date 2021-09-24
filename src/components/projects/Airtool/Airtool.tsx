import React, {Component} from 'react';
import './Airtool.css';
import AirtoolSection1 from "./airtool-sections/AirtoolSection1/AirtoolSection1";
import AirtoolSection2 from "./airtool-sections/AirtoolSection2/AirtoolSection2";
import AirtoolSection3 from "./airtool-sections/AirtoolSection3/AirtoolSection3";
import AirtoolSection4 from "./airtool-sections/AirtoolSection4/AirtoolSection4";
import AirtoolSection5 from "./airtool-sections/AirtoolSection5/AirtoolSection5";
import AirtoolSection6 from "./airtool-sections/AirtoolSection6/AirtoolSection6";
import AirtoolSection7 from "./airtool-sections/AirtoolSection7/AirtoolSection7";
import AirtoolSection8 from "./airtool-sections/AirtoolSection8/AirtoolSection8";
import AirtoolSection9 from "./airtool-sections/AirtoolSection9/AirtoolSection9";

const sections = [
      {
            component: AirtoolSection1
      },
      {
            component: AirtoolSection2
      },
      {
            component: AirtoolSection3
      },
      {
            component: AirtoolSection4
      },
      {
            component: AirtoolSection5
      },
      {
            component: AirtoolSection6
      },
      {
            component: AirtoolSection7
      },
      {
            component: AirtoolSection8
      },
      {
            component: AirtoolSection9
      }
];

// @ts-ignore
const Airtool = () => (
  <div className="Airtool flex-column font-color-3F3939">
        {sections.map(currSection => {
              const Component = currSection.component;

              return (<Component/>)
        })}
  </div>
);

export default Airtool;
