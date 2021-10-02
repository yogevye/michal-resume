import React from 'react';
import './KabuliSection6.css';
import image1 from '../../../../../images/projects/content/kabuli/secion-6/img1.svg';

const KabuliSection6 = () => (
    <div className="flex-column">
        <div className="flex-column">
            <h1 className="font-50 font-weight-bold">Results</h1>
            <p>In 2 weeks, our team developed a working MVP that was launched and used.</p>
            <div className="flex-row justify-content-center img-padding">
                <img src={image1}/>
            </div>

        </div>
    </div>
);

export default KabuliSection6;
