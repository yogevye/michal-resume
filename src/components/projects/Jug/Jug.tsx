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
        component: JugSection1
    },
    {
        component: JugSection2
    },
    {
        component: JugSection3
    },
    {
        component: JugSection4
    },
    {
        component: JugSection5
    },
    {
        component: JugSection6
    }
];

// @ts-ignore
const Jug = ({projectLink}) => (
    <div className="flex-column padding-sections-bottom padding-sections-top font-color-3F3939">
        {sections.map(currSection => {
            const Component = currSection.component;

            return (<Component/>)
        })}
    </div>
);

export default Jug;
