import React from 'react';
import './StartlightSection3.css';
import logo from '../../../../../images/projects/content/startlight/section-3/logo.svg'
import img2 from '../../../../../images/projects/content/startlight/section-3/img2.svg'
import img2Phone from '../../../../../images/projects/content/startlight/section-3/img-2-phone.svg'

const description = 'After getting to know the users and understanding their job to it’s core, I have identified the top pain points and UX challenges that must be treated in order to live up to the dreams from the new app.   '
const text1 = ' In this case study I have decided to focus on the design solution for one main goal.'

const StartlightSection3 = () => (
    <div className="flex-column padding-divs-bottom-30">
        <h1>Understanding the problem</h1>
        <p>{description}</p>
        <div className="flex-row">
            <img className="logo-size" src={logo}/>
            <h3>{text1}</h3>
        </div>
        <div className="flex-row justify-content-center">
            <img className="section3_img" src={img2}/>
            <img className="section3_phone_img" src={img2Phone}/>
        </div>
    </div>
);

export default StartlightSection3;
