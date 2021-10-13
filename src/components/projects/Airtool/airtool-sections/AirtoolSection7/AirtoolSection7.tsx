import React from 'react';
import './AirtoolSection7.css';
import img1 from '../../../../../images/projects/content/airtool/section7/img1.svg'
import img2 from '../../../../../images/projects/content/airtool/section7/img2.svg'
import Paragraph from "../../../../utils/Pharagraph/Paragraph";

const sectionHeader = 'Back to the field - ' +
    'usability testing';
const description = 'After making wireframes for both options, I printed out screens on paper and went testing them with machanins \n' +
    'in two bases. I tested one user at a time by giving them tasks and watching them perform it on the “app”.\n' +
    'It was important to test at the hanger itself, since'
const boldDescription = 'no office can reflect the conditions in which the work happens.';

const conclusionText = [
    {
        text: 'Users performed the tasks much faster with the '
    },
    {
        text: 'QR scanning',
        bold: true
    },
    {
        text: ' scanning and used the cart to edit their choises.\n' +
            'The location of tools in the tool room was so well known, that swiping trough boards was irrelevant and\n' +
            'time consuming.\n' +
            '\n' +
            'From the usability testing results we decided to design and develop the app on '
    },
    {
        text: 'tablet.',
        bold: true
    },
];

const AirtoolSection7 = () => (
    <div className="flex-column font-25 font-color-3F3939">
        <h1 className="new-line font-50 bold-text">{sectionHeader}</h1>
        <p className="font-25 new-line">
            {description}
            <span className="font-weight-bolder"> {boldDescription} </span>
        </p>
        <div className="section-7__img-container">
            <div className="flex-column">
                <img alt="13" className="section-7__img" src={img1}/>
                <span className="font-20 font-color-656565">Usability test option A</span>
            </div>
            <div className="flex-column">
                <img alt="14" className="section-7__img" src={img2}/>
                <span className="font-20 font-color-656565">Usability test option B</span>
            </div>
        </div>
        <div className="flex-column">
            <h1 className="font-40 font-weight-bolder">Conclusion</h1>
            <Paragraph paragraph={conclusionText}/>
        </div>
    </div>
);

export default AirtoolSection7;
