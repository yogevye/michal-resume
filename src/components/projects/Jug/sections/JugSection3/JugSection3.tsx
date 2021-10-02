import React from 'react';
import './JugSection3.css';
import img1 from '../../../../../images/projects/content/jug/sections-3/img-1.svg';
import img2 from '../../../../../images/projects/content/jug/sections-3/img-2.svg';

const description = 'I made a number or observations, personal interviews and joined the users at their work. \n' +
    '\n' +
    'The future users of Jug are devided into twp groups - "Lookouts" and "Investigators".';

const JugSection3 = () => (
    <div className="flex-column">
        <h1 className="font-50 font-weight-bold">The mission</h1>
        <p className="font-25">
            {description}
        </p>
        <div className="flex-column align-items-center padding-divs-bottom-40">
            <div className="flex-row justify-content-center">
                <img src={img1}/>
            </div>
            <div className="flex-row justify-content-center">
                <img src={img2}/>
            </div>
        </div>
    </div>
);

export default JugSection3;
