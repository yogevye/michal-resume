import React from 'react';
import image1 from '../../../../../../images/projects/content/kabuli/section-5/img-4-1.svg';
import image2 from '../../../../../../images/projects/content/kabuli/section-5/img-4-2.svg';
import image3 from '../../../../../../images/projects/content/kabuli/section-5/img-4-3.svg';
import image4 from '../../../../../../images/projects/content/kabuli/section-5/img-4-4.svg';
import image5 from '../../../../../../images/projects/content/kabuli/section-5/img-4-5.svg';
import arrowLeft from '../../../../../../images/projects/content/kabuli/section-5/arrow-left.svg';
import arrowRight from '../../../../../../images/projects/content/kabuli/section-5/arrow-right.svg';


const KabuliSectionNewReport = () => (
    <div className="flex-column full-width-capacity margin-sides-10-per padding-divs-bottom-40">
        <div className="flex-row space-between">
            <img src={image1}/>
            <img src={arrowRight}/>
            <img src={image2}/>
        </div>
        <div className="flex-row justify-content-center">
            <img src={arrowLeft}/>
        </div>
        <div className="flex-row  space-between">
            <div className="flex-column align-items-center">
                <h3>Search location on a map</h3>
                <img src={image3}/>
            </div>

            <img src={arrowRight}/>
            <div className="flex-column align-items-center">
                <h3>Search location by name</h3>
                <img src={image4}/>
            </div>
        </div>
        <div className="flex-row justify-content-center">
            <img src={arrowLeft}/>
        </div>
        <div className="flex-row">
            <div className="flex-column align-items-center">
                <h3>Search by categories and close by locations</h3>
                <img src={image5}/>
            </div>
        </div>
    </div>
);

export default KabuliSectionNewReport;
