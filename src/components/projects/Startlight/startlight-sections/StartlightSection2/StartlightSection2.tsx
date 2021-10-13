import React from 'react';
import './StartlightSection2.css';
import Paragraph from "../../../../utils/Pharagraph/Paragraph";
import bluePlainImg from '../../../../../images/projects/content/startlight/section-2/blue-plane.svg'
import greenPlainImg from '../../../../../images/projects/content/startlight/section-2/green-plan.svg'
import humanFlow1 from '../../../../../images/projects/content/startlight/section-2/human-flow-1.svg'
import humanFlow2 from '../../../../../images/projects/content/startlight/section-2/human-flow-2.svg'
import humanFlow3 from '../../../../../images/projects/content/startlight/section-2/human-flow-3.svg'
import humanPhoneFlow1 from '../../../../../images/projects/content/startlight/section-2/human-flow-phone-1.svg'
import humanPhoneFlow2 from '../../../../../images/projects/content/startlight/section-2/human-flow-phone-2.svg'
import humanPhoneFlow3 from '../../../../../images/projects/content/startlight/section-2/human-flow-phone-3.svg'
import officeImg from '../../../../../images/projects/content/startlight/section-2/office-laout.svg'


const sectionHeader = 'Studying the users\n' +
    '& the craft';

const description = [
    {
        text: 'In the case of systems such as Starlight and the like, '
    },
    {
        text: 'the users know what they do',
        bold: true
    },
    {
        text: '. They are trained for over a year in \n' +
            'preparation for their army role, their knowledge and expertise are overwhelming for "outsiders" such as myself. \n' +
            'In order to redesign the old system into 4 new ones, '
    },
    {
        text: 'I had to understand the process',
        bold: true
    },
    {
        text: ' – the main goals, \n' +
            'the connections between factors, other software involved, what it provided to the Air Force in cases of emergency \n' +
            'and more. \n' +
            'The studying period took approximately 4 months and included guided tours, user observations & interviews, \n' +
            'working together with users and asking questions endlessly (that was rough, I\'m just being honest). '
    },
];

const StartlightSection2 = () => (
    <div className="flex-column">
        <h1 className="new-line font-50 bold-text">{sectionHeader}</h1>
        <Paragraph paragraph={description}/>
        <div className="flex-column padding-divs-bottom-50">
            <div className="flex-column">
                <h2 className="font-40 font-weight-bolder">
                    The human flow
                </h2>
                <div className="flex-column align-items-center humanFlowContainer padding-img-bottom-20">
                    <img alt="a1" src={humanFlow1}/>
                    <img alt="a2" className="airopline" src={bluePlainImg}/>
                    <img alt="a3" src={humanFlow2}/>
                    <img alt="a" className="airopline" src={greenPlainImg}/>
                    <img alt="a5" src={humanFlow3}/>
                </div>

                <div className="humanFlowPhoneContainer">
                    <img alt="a6" src={humanPhoneFlow1}/>
                    <img alt="a7" className="airopline" src={bluePlainImg}/>
                    <img alt="a8" src={humanPhoneFlow2}/>
                    <img alt="a9" className="airopline" src={greenPlainImg}/>
                    <img alt="a10" src={humanPhoneFlow3}/>
                </div>
            </div>
            <div className="flex-column">
                <h2 className="workHeader">
                    Work Environement
                </h2>
                <div className="flex-row justify-content-center">
                    <img alt="a11" className="img-phone-full-capacity" src={officeImg}/>
                </div>
            </div>
        </div>


    </div>
);

export default StartlightSection2;
