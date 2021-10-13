import React from 'react';
import './KabuliSection6.css';
import image1 from '../../../../../images/projects/content/kabuli/secion-6/img1.svg';

const p2 = 'At the end of this journey, we got to sit with the local council head to discuss our product, it\'s implementation method ' +
    'and the added value technological units can have on civilian initiatives regarding homeland security. '

const KabuliSection6 = () => (
    <div className="flex-column">
        <div className="flex-column">
            <h1 className="font-50 font-weight-bold">Results</h1>
            <p>In 2 weeks, our team developed a working MVP that was launched and used.</p>
            <div className="flex-row justify-content-center img-padding">
                <img alt="yy" className="img-phone-full-capacity" src={image1}/>
            </div>
            <p>{p2}</p>
        </div>
    </div>
);

export default KabuliSection6;
