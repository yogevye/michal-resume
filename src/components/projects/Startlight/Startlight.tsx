import React from 'react';
import './Startlight.css';

// @ts-ignore
const Startlight = ({projectLink}) => (
    <div className="Startlight">
        <div/>
        <img src={projectLink.header}/>
        <div>
            Startlight
        </div>
    </div>
);

export default Startlight;
