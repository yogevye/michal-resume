import React from 'react';
import './KabuliSection1.css';
import Paragraph from "../../../../utils/Pharagraph/Paragraph";
import balloonsImg from "../../../../../images/projects/content/kabuli/section1/balloons.svg";

const overviewDesctiprion = [
    {
        text:  'Kabuli is an application for reporting fires or Incendiary balloons and kites by citizens living in Gaza envelope. The app \n' +
            'enables users to follow-up on incidents and be in touch with the security forces.\n' +
            '\n' +
            'This was created as part of a two-week hackathon during my service in the army. ',
    }];

const backgroundDecription = 'Since May 2018, balloons and kites with explosives attached to them began \n' +
    'dispatching from the Gaza strip into the Gaza envelope territory, mostly to \n' +
    'start fires in forests and Agricultural fields. As of that time, The IDF did not \n' +
    'yet develop a technological tool to fight such a primitive weapon. All that \n' +
    'was left to do after a fire started or a suspicious object was found, was to \n' +
    'report to the security forces and hope that it helps.\n' +
    '\n' +
    'Civilians opened multiple WhatsApp groups that filled up quickly with \n' +
    'representatives from the relevant forces and started flowing them with \n' +
    'images and locations of suspicious objects or fires they find.\n' +
    '\n' +
    'A special team of developers from the unit and me (UX designer) were assembled in order to give a fast solution for \n' +
    'civilian reporting of such incidents. We packed our bags in a day\'s notice and moved for two weeks to a settlement \n' +
    'near the Gaza border, in order to develop this app for the people around us. ';

const KabuliSection1 = () => (
    <div className="flex-column padding-semi-sections-bottom">
        <div className="flex-column">
            <h1 className="font-25 font-color-878787 font-regular">OVERVIEW</h1>
            <Paragraph paragraph={overviewDesctiprion}/>
        </div>
        <div className="flex-column">
            <h1 className="font-25 font-color-878787 font-regular">BACKGROUND</h1>
            <div className="flex-row justify-content-center">
                <span className="font-25 new-line flex-1">{backgroundDecription}</span>
                <div className="balloonsImg" style={{backgroundImage: 'url(' + balloonsImg + ')'}}/>
            </div>
        </div>
    </div>
);

export default KabuliSection1;
