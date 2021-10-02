import React from 'react';
import './Kabuli.css';
import KabuliSection1 from "./kabuli-sections/KabuliSection1/KabuliSection1";
import KabuliSection2 from "./kabuli-sections/KabuliSection2/KabuliSection2";
import KabuliSection5 from "./kabuli-sections/KabuliSection5/KabuliSection5";
import KabuliSection3 from "./kabuli-sections/KabuliSection3/KabuliSection3";
import KabuliSection4 from "./kabuli-sections/KabuliSection4/KabuliSection4";
import KabuliSection6 from "./kabuli-sections/KabuliSection6/KabuliSection6";

const sections = [
    {
        component: KabuliSection1
    },
    {
        component: KabuliSection2
    },
    {
        component: KabuliSection3
    },
    {
        component: KabuliSection4
    },
    {
        component: KabuliSection5
    },
    {
        component: KabuliSection6
    }
];

// @ts-ignore
const Kabuli = ({projectLink}) => (
    <div className="flex-column padding-sections-bottom padding-sections-top font-color-3F3939">
        {sections.map(currSection => {
            const Component = currSection.component;

            return (<Component/>)
        })}
    </div>
);

export default Kabuli;
