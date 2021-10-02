import React from 'react';
import './ColoredHeadline.css';

// @ts-ignore
const ColoredHeadline = ({text, backgroudColor = 'background-color-F69193'}) => (
    <div className="flex-row padding-bottom-40">
        <span className={'border-radius-35 colored-headline ' + backgroudColor}>{text}</span>
    </div>

);

export default ColoredHeadline;
