import React from 'react';
import './StartlightSection1.css';
import FlexingMuscles from '../../../../../images/projects/content/startlight/section1/Flexing_Muscles 1.svg';
import Paragraph from "../../../../utils/Pharagraph/Paragraph";

const sections = [
    {
        title: 'OVERVIEW',
        description: [
            {
                text: 'STARLIGHT shows real-time aircraft flight tracking, including information on each tracking and actions for further\n' +
                    'research. Starlight is 1 of 4 operational apps that work in harmony and synchronization for the Israeli Air Force, \n' +
                    'in order to protect the airspace. All 4 apps were designed by me in the past 3 years.'
            }
        ]
    },
    {
        title: 'THE DREAM TEAM',
        extraIcon: FlexingMuscles,
        description: [
            {
                text: 'The project was brought to life by nearly '
            },
            {
                text: '20 developers',
                bold: true
            },
            {
                text: ' who were divided to 3 teams. All 3 team leads, the product \n' +
                    'manager, 4 former users and me (the UX designer) worked closely during the design and development phase.\n' +
                    '\n' +
                    'I was responsible for the end-to-end UX & UI design process and its implementation strategy, I worked daily with the \n' +
                    'developers and performed usability testing.'
            }
        ]
    },
    {
        title: 'REDESIGN - WHY WERE WE CALLED?',
        description: [
            {
                text: 'The former system is a leagcy software that was published in the early 2000\'s. With the new technologies we now ' +
                    'have, a decision was made to create a new app from scratch with improved capabilities and fine user experience. '
            }
        ]
    },
];

const StartlightSection1 = () => (
    <div className="flex-column padding-divs-bottom-40">
        {sections.map((section) => (
                <div className="flex-column">
                    <div className="flex-row">
                        <h1 className="font-25 font-color-878787 font-weight-normal dreamTitle">{section.title}</h1>
                        {section.extraIcon ? <img  alt="er" className="emoji" src={section.extraIcon}/> : null}
                    </div>
                    <Paragraph paragraph={section.description}/>
                </div>
            ))}
    </div>
);

export default StartlightSection1;
