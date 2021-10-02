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
            component: AirtoolSection1,
      },
      {
            component: AirtoolSection2,
            backgroundColor: 'background-color-F2F3F5'
      },
      {
            component: AirtoolSection3,
      },
      {
            component: AirtoolSection4,
            backgroundColor: 'background-color-F2F3F5'
      },
      {
            component: AirtoolSection5,
      },
      {
            component: AirtoolSection6,
            backgroundColor: 'background-color-F2F3F5'
      },
      {
            component: AirtoolSection7,
      },
      {
            component: AirtoolSection8,
            backgroundColor: 'background-color-F2F3F5'
      },
      {
            component: AirtoolSection9,
      }
];

// @ts-ignore
const Airtool = () => (
    <div className="flex-column padding-sections-bottom padding-sections-top full-width-capacity align-items-center">
          {sections.map(currSection => {
                const Component = currSection.component;
                let className = 'flex-row full-width-capacity justify-content-center ';
                className+= currSection.backgroundColor ? currSection.backgroundColor : '';
                return (
                    <div className={className}>
                          <div className="flex-row project-content-width">
                                <Component/>
                          </div>
                    </div>
                )
          })}
    </div>
);

export default Airtool;
