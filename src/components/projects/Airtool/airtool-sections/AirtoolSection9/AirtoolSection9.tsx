import React from 'react';
import './AirtoolSection9.css';
import dashboardImg from '../../../../../images/projects/content/airtool/section9/dashboard1.svg';
import scanningImg from '../../../../../images/projects/content/airtool/section9/scanning1.svg';
import scanning2Img from '../../../../../images/projects/content/airtool/section9/scanning2.svg';
import shpppingImg from '../../../../../images/projects/content/airtool/section9/shppping1.svg';
import returnByUser1 from '../../../../../images/projects/content/airtool/section9/return-by-user-1.svg'
import returnByUser2 from '../../../../../images/projects/content/airtool/section9/return-by-user-2.svg'
import Paragraph from "../../../../utils/Pharagraph/Paragraph";

const sectionHeader = 'New features';
const text = 'I brainstormed a couple of changes and additions that are simple, yet powerful, to simplify the current user flow \n' +
    'and allow for drastic improvements in user experience and process speed.';
const dashboardText1 = 'When tools are all over the place, taken by multiple machanics and located at different areas of the hanger, Airtool’s\n' +
    'user is incharge of keeping the mess as orgenized as possible. Being on “Tool room duty” means managing the tools\n' +
    'and performing audits a few times a day, some schedualed and some surprises.  \n' +
    'Therefore, I decided to provide a ';
const dashboardText2 = 'dashboard with accessibility to all needed information';
const dashboardText3 = ' - the app works for the user \n' +
    'and not the other way around. All components are clickable and navigate the user directly to the correct page.';

const scanningText1 = 'Unlike many other apps we know, this app goes hand in hand with the physical world. To speed up the issue and \n' +
    'return process, which was one of the main goals of the redesign and a big pain point in the users’ experience, \n' +
    'I added a ';
const scanningText2 = 'QR scanning feature';
const scanningText3 = '. This feature unites the 2 actions users do when issuing or returning - in ';
const scanningText4 = 'the physical\n' +
    'and in the digital world';
const scanningText5 = '. By doing so, the process got shorter and the app allowed a less stressful work environment.';

const shoppingText = [
    {
        text: 'This feature mimics an ',
    }, {
        text: 'online shopping experience',
        bold: true
    },{
       text: ' and enables users to be aware of which items were taken and \n' +
           'edit the list easily. One of the dangers in the former system was the reliance on users’ memmory in such a messy and\n' +
           'noisy environment, a mistake that is made in the app can cost in human life. To make tool management clearer, \n' +
           'I added a '
    },{
        text: 'drag and drop feature',
        bold: true
    },{
        text: ' into the cart, an accessible search bar and a status indication on each item.\n' +
            'Also, to reach one of the main goals of the new app, '
    },{
        text: 'I tried to design the app in resemblance to apps the users know',
        bold: true
    },{
        text: ' in order to make it easy to master.'
    }
];

const ReturnByUserText = [
    {
        text: 'When returning tools to the storage, most times one person returns all the items that he/she signed for. In the \n' +
            'former system, returning process took a long time and didn’t consider the possibilities of using the data given \n' +
            'earlier - who took which tools. This feature enables to filter the issued tools by machanics, and therefore ',
    }, {
        text: 'shortening\n' +
            'the return process drastically',
        bold: true
    },{
        text: '. The user chooses which person is returning, goes through the pre-made list and \n' +
            'completes - it’s as simple as that!'
    }
];

const AirtoolSection9 = () => (
    <div className="flex-column font-25 font-color-3F3939 padding-bottom-40">
        <h1 className="new-line font-50 bold-text">{sectionHeader}</h1>
        <p className="new-line font-25">{text}</p>
        <div className="flex-column">
            <div className="flex-column">
                <h2 className="font-40 font-weight-bolder">Dashboard</h2>
                <p className="font-25">
                    {dashboardText1}
                    <span className="font-weight-bolder">{dashboardText2}</span>
                    {dashboardText3}
                </p>
                <div className="flex-row justify-content-center">
                    <div className="background-image width-880 height-614" style={{backgroundImage: 'url(' + dashboardImg + ')'}}/>
                </div>
            </div>
            <div className="flex-column">
                <h2 className="font-40 font-weight-bolder">Scanning</h2>
                <p className="font-25">
                    {scanningText1}
                    <span className="font-weight-bolder">{scanningText2}</span>
                    {scanningText3}
                    <span className="font-weight-bolder">{scanningText4}</span>
                    {scanningText5}
                </p>
                <div className="flex-column align-items-center scanning-container">
                    <div className="flex-row">
                        <div className="background-image width-880 height-614" style={{backgroundImage: 'url(' + scanningImg + ')'}}/>
                    </div>
                    <div className="flex-row">
                        <div className="background-image width-880 height-614" style={{backgroundImage: 'url(' + scanning2Img + ')'}}/>
                    </div>
                </div>
            </div>
            <div className="flex-column">
                <h2 className="font-40 font-weight-bolder">Shopping cart experience</h2>
                <Paragraph paragraph={shoppingText}/>
                <div className="flex-column align-items-center scanning-container">
                    <div className="background-image width-880 height-614" style={{backgroundImage: 'url(' + shpppingImg + ')'}}/>
                </div>
            </div>
            <div className="flex-column">
                <h2 className="font-40 font-weight-bolder">Return by user</h2>
                <Paragraph paragraph={ReturnByUserText}/>
                <div className="flex-column align-items-center scanning-container">
                    <div className="flex-row">
                        <div className="background-image width-880 height-614" style={{backgroundImage: 'url(' + returnByUser1 + ')'}}/>
                    </div>
                    <div className="flex-row">
                        <div className="background-image width-880 height-614" style={{backgroundImage: 'url(' + returnByUser2 + ')'}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AirtoolSection9;
