import React from 'react';
import './Startlight.css';
import AirtoolSection1 from "../Airtool/airtool-sections/AirtoolSection1/AirtoolSection1";

const sections = [
    {
        component: AirtoolSection1
    },
];

// @ts-ignore
const Startlight = () => (
    <div className="Airtool flex-column font-color-3F3939">
        {sections.map(currSection => {
            const Component = currSection.component;

            return (<Component/>)
        })}
    </div>
);

export default Startlight;
