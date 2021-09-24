import React from 'react';
import './AirtoolSection7.css';

const sectionHeader = 'Back to the field - \n' +
    'usability testing';
const description = 'After making wireframes for both options, I printed out screens on paper and went testing them with machanins \n' +
    'in two bases. I tested one user at a time by giving them tasks and watching them perform it on the “app”.\n' +
    'It was important to test at the hanger itself, since'
const boldDescription = 'no office can reflect the conditions in which the work happens.';

const conclusionText = 'Users performed the tasks much faster with the QR scanning and used the cart to edit their choises.\n' +
    'The location of tools in the tool room was so well known, that swiping trough boards was irrelevant and\n' +
    'time consuming.\n' +
    '\n' +
    'From the usability testing results we decided to design and develop the app on tablet. '

const AirtoolSection7 = () => (
    <div className="flex-column font-25 font-color-3F3939 padding-bottom-40">
        <h1 className="new-line font-50 bold-text">{sectionHeader}</h1>
        <p className="font-25 new-line">
            {description}
            <span className="font-weight-bolder"> {boldDescription} </span>
        </p>
        <div className="flex-row space-between padding-bottom-40">
            <div className="flex-column">
                <div className="width-588 height-391 border-radius-22 background-color-DFDFDF"/>
                <span className="font-20 font-color-656565">Usability test option A</span>
            </div>
            <div className="flex-column">
                <div className="width-588 height-391 border-radius-22 background-color-DFDFDF"/>
                <span className="font-20 font-color-656565">Usability test option B</span>
            </div>
        </div>
        <div className="flex-column">
            <h1 className="font-40 font-weight-bolder">Conclusion</h1>
            <p className="font-25 new-line">
                {conclusionText}
            </p>
        </div>
    </div>
);

export default AirtoolSection7;
