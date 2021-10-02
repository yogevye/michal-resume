import React from 'react';
import './AirtoolSection6.css';
import optionAImg from '../../../../../images/projects/content/airtool/section6/optionA.svg';
import optionBImg from '../../../../../images/projects/content/airtool/section6/optionB.svg';

// @ts-ignore
const sectionHeader = 'Ideation \n' +
    'and storyboard';

const text = 'The main goal was to make an app that would feel natural to the machanics, as if they already know it from their \n' +
    'everyday lives, and hopefully make this “boring” duty into a positive experience.\n' +
    '\n' +
    'I started with two options. '

const options = [
    {
        title: 'Option A - georaphic board design',
        description: 'Focuses on the physical location of each tool on the tool room walls.\n' +
            'platform - web app',
        img: optionAImg
    },{
        title: 'Option B - QR scan & shopping cart',
        description: 'Mimics an online shopping experience using QR code scanning.\n' +
            'platform - tablet.',
        img: optionBImg
    }
];

const AirtoolSection6 = () => (
    <div className="flex-column font-25 font-color-3F3939 padding-bottom-40">
        <h1 className="new-line font-50 bold-text">{sectionHeader}</h1>
        <p className="new-line font-25">{text}</p>
        <div className="flex-row">
            <div className="flex-column options-sections">
                {options.map((option) => (
                    <div className="flex-column">
                        <span className="font-40 font-weight-bolder">{option.title}</span>
                        <span className="font-25 new-line padding-bottom-40">{option.description}</span>
                        <div className="flex-row full-width-capacity full-width-capacity">
                            <div className="background-image width-982 height-509" style={{backgroundImage: 'url(' + option.img + ')'}}/>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </div>
);

export default AirtoolSection6;