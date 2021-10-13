import React from 'react';
import './JugSection3.css';
import img1 from '../../../../../images/projects/content/jug/sections-3/img-1.svg';
import img2 from '../../../../../images/projects/content/jug/sections-3/img-2.svg';

const description = 'I made a number or observations, personal interviews and joined the users at their work. \n' +
    'The future users of Jug are divided into two groups - "Lookouts" and "Investigators".';

const JugSection3 = () => (
    <div className="flex-column">
        <h1 className="font-50 font-weight-bold">The users</h1>
        <span className="font-25 new-line padding-bottom-40">
            {description}
        </span>
            <div className="flex-column padding-img-bottom-40 align-items-center jug-section-3_img-wrapper">
                    <img alt="23" className="jug-section-3_img" src={img1}/>
                    <img alt="24" className="jug-section-3_img" src={img2}/>
            </div>
    </div>
);

export default JugSection3;
