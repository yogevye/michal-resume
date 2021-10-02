import React from 'react';
import './Startlight.css';
import StartlightSection1 from "./startlight-sections/StartlightSection1/StartlightSection1";
import StartlightSection2 from "./startlight-sections/StartlightSection2/StartlightSection2";
import StartlightSection3 from "./startlight-sections/StartlightSection3/StartlightSection3";
import StartlightSection4 from "./startlight-sections/StartlightSection4/StartlightSection4";
import StartlightSection5 from "./startlight-sections/StartlightSection5/StartlightSection5";

const sections = [
    {
        component: StartlightSection1
    },
    {
        component: StartlightSection2
    },
    {
        component: StartlightSection3
    },
    {
        component: StartlightSection4
    },
    {
        component: StartlightSection5
    },
];

// @ts-ignore
const Startlight = () => (
    <div className="flex-column padding-sections-bottom padding-sections-top font-color-3F3939">
        {sections.map(currSection => {
            const Component = currSection.component;

            return (<Component/>)
        })}
    </div>
);

export default Startlight;
