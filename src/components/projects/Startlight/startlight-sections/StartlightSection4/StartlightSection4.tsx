import React from 'react';
import './StartlightSection4.css';
import Paragraph from "../../../../utils/Pharagraph/Paragraph";
import img1 from '../../../../../images/projects/content/startlight/section-4/img1.svg'
import img2 from '../../../../../images/projects/content/startlight/section-4/img2.svg'

const description = [
    {
        text: 'To face the biggest concerns that may be carried on from the former sysem to the developing app, I started to come up with basic ways to '
    },
    {
        bold: true,
        text: 'lower the data load level'
    },
    {
        text: ' in both the map and the table view.\n' +
            '\n' +
            'First, minimizing the details on each label by '
    },
    {
        text: 'adding a snack bar',
        bold: true,
    },
    {
        text: ' on one click to every entity. In addition, creating an '
    },
    {
        text: 'accessible layers side bar',
        bold: true
    },
    {
        text: ', to control helpful layers of data easily.'
    }
];

const description2 = [
    {
        text: 'Second, dividing the endless-scrolling table into '
    },
    {
        bold: true,
        text: 'mini-tables, filtered by countries and types, in similarity to the\n' +
            'thinking process of the users'
    },
    {
        text: '. In addition, creating a “Favorites” panel for joint conversation between people in the shift. Each row is designed as a card, instead of a table row, for dragging rows over and making the app a tool that '
    },
    {
        text: 'gives users the ability to organize their data according to their role.',
        bold: true,
    },
];

const StartlightSection4 = () => (
    <div className="flex-column">
        <h1>Ideation - first steps</h1>
        <div className="flex-column padding-divs-bottom-50">
            <div className="flex-column">
                <Paragraph paragraph={description}/>
                <img alt="y2" className="section-4_img" src={img1}/>
            </div>
            <div className="flex-column">
                <Paragraph paragraph={description2}/>
                <img alt="y1" className="section-4_img"  src={img2}/>
            </div>
        </div>
    </div>
);

export default StartlightSection4;
