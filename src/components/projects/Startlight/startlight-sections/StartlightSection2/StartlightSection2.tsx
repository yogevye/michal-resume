import React from 'react';
import './StartlightSection2.css';
import Paragraph from "../../../../utils/Pharagraph/Paragraph";
import StartlightHumanFlow from "./StartlightHumanFlow/StartlightHumanFlow";
import bluePlainImg from '../../../../../images/projects/content/startlight/section-2/blue-plane.svg'
import greenPlainImg from '../../../../../images/projects/content/startlight/section-2/green-plan.svg'
import FluracentImg from '../../../../../images/projects/content/startlight/section-2/fluracent.svg';
import ScreensImg from '../../../../../images/projects/content/startlight/section-2/screens.svg';
import MouseImg from '../../../../../images/projects/content/startlight/section-2/mouse.svg';
import HeadphonesImg from '../../../../../images/projects/content/startlight/section-2/headphones.svg';

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

const humanFlowSections = [
    {
        type: 'Coordinator',
        ageRange: '19-21',
        level: {
            title: 'Intermediate',
            fontColor: 'font-color-FFA234'
        },
        bullets: [
            'Gathers information on each track in the designated area.',
            'Inquires external factors for further research.',
            'Must know every single detail on the map and fetch information quickly.'
        ],
        flowImage: {
            img: bluePlainImg,
        }
    },
    {
        type: 'Supervisor',
        ageRange: '20-22',
        level: {
            title: 'High',
            fontColor: 'font-color-1FAB1D'
        },
        bullets: [
            'Oversees the work of all the coordinators.',
            'Maintains precise status of the airspace.',
            'Gets critical updates from the coordinators and passes it along if necessary.'
        ],
        flowImage: {
            img: greenPlainImg,
        }
    },
    {
        type: 'Officer',
        ageRange: '12-50+',
        level: {
            title: 'Varies',
            fontColor: 'font-color-F69193'
        },
        bullets: [
            'Decides course of action based on research done by earlier factors.',
            'Approves uncertainties and extreme cases. ',
            'The end point of the data utilization.'
        ]
    }
];

const WorkEnvironmentDescription = [
    {
        text: 'The users work in a big ',
    },
    {
        text: 'underground',
        bold: true
    },
    {
        text: ' room with 6-15 people, manning the operation ',
    },
    {
        text: '24/7.',
        bold: true
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
                <div className="flex-column">
                    {humanFlowSections.map((humanFlowSection) => (
                        <StartlightHumanFlow humanContent={humanFlowSection}/>
                    ))}
                </div>
            </div>
            <div className="flex-column">
                <h2 className="font-40 font-weight-bolder">
                    Work Environement
                </h2>
                <div className="flex-row justify-content-center">
                    <div className="flex-column align-items-center">
                        <Paragraph paragraph={WorkEnvironmentDescription}/>
                        <div className="width-208 height-176" style={{backgroundImage: 'url(' + FluracentImg + ')'}}/>
                        <div className="flex-column align-items-center">
                            <div className="width-537 height-385" style={{backgroundImage: 'url(' + ScreensImg + ')'}}/>
                            <span className="font-25">4 screens in each working-station</span>
                        </div>
                        <div className="flex-row align-items-center width-800 space-between">
                            <div className="width-282 height-258" style={{backgroundImage: 'url(' + HeadphonesImg + ')'}}/>
                            <div className="width-348 height-156" style={{backgroundImage: 'url(' + MouseImg + ')'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
);

export default StartlightSection2;
