import React from 'react';
import './AirtoolSection5.css';

const sectionHeader:string = 'Challenges\n' +
    'and goals';

const bullets = [
    'Creating a positive experience for users who are forced to use the app.',
    'Adding new features to speed up the main processes.',
    'Eliminating the need for app training.'
];

// @ts-ignore
const AirtoolSection5 = () => (
    <div className="flex-column font-25 font-color-3F3939 padding-bottom-40">
        <h1 className="new-line font-50 bold-text">{sectionHeader}</h1>
        <ul className="section-5-bullets redesigning-bullets font-25">
            {bullets.map((bullet:string) => (<li>{bullet}</li>))}
        </ul>
    </div>
);

export default AirtoolSection5;
