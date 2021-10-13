import React from 'react';
import './KabuliSectionMyReports.css';
import image1 from '../../../../../../images/projects/content/kabuli/section-5/img6-1.svg';
import image2 from '../../../../../../images/projects/content/kabuli/section-5/img6-2.svg';

const KabuliSectionMyReports = () => (
  <div className="flex-column padding-divs-bottom-40">
    <div className="flex-row justify-content-center">
      <img className="img-phone-full-capacity" src={image1}/>
    </div>
    <div className="flex-row justify-content-center">
      <div className="flex-column align-items-center">
        <h3>Phone notification for status update</h3>
        <img className="img-phone-full-capacity" src={image2}/>
      </div>
    </div>
  </div>
);

export default KabuliSectionMyReports;
