import React from 'react';
import './AirtoolSection8.css';
import appMapImg from '../../../../../images/projects/content/airtool/section8/app-map.svg';

const sectionHeader = 'App map';

const AirtoolSection8 = () => (
    <div className="flex-column font-25 font-color-3F3939 padding-bottom-40">
        <h1 className="new-line font-50 bold-text">{sectionHeader}</h1>
        <div className="flex-row justify-content-center">
            <div className="background-image width-1196 height-859" style={{backgroundImage: 'url(' + appMapImg + ')'}}/>
        </div>
    </div>
);

export default AirtoolSection8;
