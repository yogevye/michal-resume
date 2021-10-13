import React from 'react';
import './AirtoolSection8.css';
import appMapImg from '../../../../../images/projects/content/airtool/section8/app-map.svg';

const sectionHeader = 'App map';

const AirtoolSection8 = () => (
    <div className="flex-column font-25 font-color-3F3939 padding-bottom-40">
        <h1 className="new-line font-50 bold-text">{sectionHeader}</h1>
        <div className="flex-row justify-content-center">
            <img className="img-phone-full-capacity" src={appMapImg}/>
        </div>
    </div>
);

export default AirtoolSection8;
