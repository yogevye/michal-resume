import React from 'react';
import './KabuliSection5SignUp.css';
import image1 from '../../../../../../images/projects/content/kabuli/section-5/img2-1.svg';
import image2 from '../../../../../../images/projects/content/kabuli/section-5/img2-2.svg';
import image3 from '../../../../../../images/projects/content/kabuli/section-5/img-2-3.svg';
import comImg2 from '../../../../../../images/projects/content/kabuli/section-5/com-img-2.svg';

import arrowRight from '../../../../../../images/projects/content/kabuli/section-5/arrow-left.svg';
import arrowLeft from '../../../../../../images/projects/content/kabuli/section-5/arrow-right.svg';


const KabuliSection5SignUp = () => (
    <div className="flex-column full-width-capacity">
        <div className="flex-row justify-content-center">
            <img src={image1}/>
        </div>
        {/*<div className="flex-row justify-content-center">*/}
            <div className="flex-row margin-sides-50-per align-items-center padding-top-40 space-around">
                <img className="img-phone-full-capacity" src={arrowRight}/>
                <span>or</span>
                <img className="img-phone-full-capacity" src={arrowLeft}/>
            </div>
        {/*</div>*/}
        <div className="flex-row space-around">
            <div className="flex-column align-items-center">
                <h3>Verification code</h3>
                <img className="img-phone-full-capacity" src={image2}/>
            </div>
            <div className="flex-column align-items-center">
                <h3>No-sign up message</h3>
                <img className="img-phone-full-capacity" src={image3}/>
            </div>
        </div>
    </div>

);

export default KabuliSection5SignUp;
