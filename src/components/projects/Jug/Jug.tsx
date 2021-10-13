import React from 'react';
import './Jug.css';
import JugSection1 from "./sections/JugSection1/JugSection1";
import JugSection2 from "./sections/JugSection2/JugSection2";
import JugSection3 from "./sections/JugSection3/JugSection3";
import JugSection4 from "./sections/JugSection4/JugSection4";
import JugSection5 from "./sections/JugSection5/JugSection5";
import JugSection6 from "./sections/JugSection6/JugSection6";

const sections = [
    {
        component: JugSection1,
        backgroundColor: undefined
    },
    {
        component: JugSection2,
        backgroundColor: 'background-color-F2F3F5'
    },
    {
        component: JugSection3,
    },
    {
        component: JugSection4,
        backgroundColor: 'background-color-F2F3F5'
    },
    {
        component: JugSection5,
    },
    {
        component: JugSection6,
        backgroundColor: 'background-color-F2F3F5'
    }
];

// @ts-ignore
const Jug = ({projectLink}) => (
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

export default Jug;
