import React from 'react';
import './KabuliSection4.css';
import Paragraph from "../../../../utils/Pharagraph/Paragraph";
import KabuliSection4Bubble from "./KabuliSection4Bubble/KabuliSection4Bubble";
import image1 from "../../../../../images/projects/content/kabuli/section-4/kabuli-section-4-img-1.svg";
import image2 from "../../../../../images/projects/content/kabuli/section-4/kabuli-section-4-img-2.svg";
import image3 from "../../../../../images/projects/content/kabuli/section-4/kabuli-section-4-img-3.svg";


const paragraph1 = [
    {
        text:  'In this lightning-speed project, design and development were parallel, and so, the team conducted brainstorming \n' +
            'sessions with active citizens from the region in order to find our common vision. \n' +
            'We identified these user stories:',
    }];

const paragraph2 = [
    {
        text:  'In order for the developers to start, I mocked up the main screens for the MVP .',
    }];

const paragraph3 = [
    {
        text:  'Before the final designs, I created a user flow, to make sure all screen navigations and options are fogured out and in \n' +
            'a logical order.',
    }];

const bubbles = [
    {
        index: '#1',
        text: 'Log in – users can log in with Google/Facebook accounts, with E-mail or with a phone number.'
    },
    {
        index: '#2',
        text: 'Creating a report – users will fill out necessary details including photos and location.'
    },
    {
        index: '#3',
        text: 'Following up on your report – users can view report\'s status and chat with the receiver, the app will notify on any changes.'
    },
    {
        index: '#4',
        text: 'Reaching out to security forces – users can make a call at the press of a button.'
    },
    {
        index: '#5',
        text: 'Watching all recorded reports in map view – users can see reports on the map to be updated and avoid double-reporting.'
    }
]

const KabuliSection4 = () => (
    <div className="flex-column">
        <div className="flex-column">
            <h1 className="font-50 font-weight-bold">Defining the MVP</h1>
            <Paragraph paragraph={paragraph1}/>
            <div className="flex-column align-items-center padding-divs-bottom-40">
                {bubbles.map((bubble) => {
                    return (<KabuliSection4Bubble params={bubble}/>)
                })}
            </div>
            <Paragraph paragraph={paragraph2}/>
            <div className="flex-column align-items-center padding-divs-bottom-40">
                <img src={image1}/>
                <img src={image2}/>
            </div>
            <Paragraph paragraph={paragraph3}/>
            <img src={image3}/>
        </div>
    </div>
);

export default KabuliSection4;
