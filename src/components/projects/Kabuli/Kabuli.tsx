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
        component: KabuliSection1,
        backgroundColor: undefined,
    },
    {
        component: KabuliSection2,
        backgroundColor: 'background-color-F2F3F5'
    },
    {
        component: KabuliSection3
    },
    {
        component: KabuliSection4,
        backgroundColor: 'background-color-F2F3F5'
    },
    {
        component: KabuliSection5
    },
    {
        component: KabuliSection6,
        backgroundColor: 'background-color-F2F3F5'
    }
];

// @ts-ignore
const Kabuli = ({projectLink}) => (
    <div className="project-section-container">
        {sections.map(currSection => {
            const Component = currSection.component;
            let className = 'project-content-sections-wrapper full-width-capacity ';
            className+= currSection.backgroundColor ? currSection.backgroundColor : '';
            return (
                <div className={className}>
                    <div className="project-content-container">
                        <Component/>
                    </div>
                </div>
            )
        })}
    </div>
);

export default Kabuli;
