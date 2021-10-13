import React from 'react';
import './JugSection5.css';
import img11 from '../../../../../images/projects/content/jug/section-5/img-1-1.svg';
import img12 from '../../../../../images/projects/content/jug/section-5/img-1-2.svg';
import img21 from '../../../../../images/projects/content/jug/section-5/img-2-1.svg';
import img31 from '../../../../../images/projects/content/jug/section-5/img-3-1.svg';
import img32 from '../../../../../images/projects/content/jug/section-5/img-3-2.svg';
import ColoredHeadline from "../../../../utils/ColoredHeadline/ColoredHeadline";
import Paragraph from "../../../../utils/Pharagraph/Paragraph";

const title = 'Ideation and\n' +
    'wireframing';


const description = 'With the main goals in mind, we went for the blackboard and brainstormed ideas for achieving them. I focused on \n' +
    'improving user experience for the entire flow and creating a wholesome process from beginning to end.';

const section1 = {
    title: ' # 1 - Time navigation ',
    p1: [
        {
            text: 'Quick and fun navigator, which requires mouse only and includes image of all saved data, to let users know just how far to the past they can go. The bar would appear on hover and will give 2-hour windows for time selection. '
        }
    ]
};

const section2 = {
    title: '# 2 - Event saver',
    p1: [
        {
            text: 'Users can create events that are a piece of recorded time, add names and tags, for future use and for '
        },
        {
            text: 'categorizing their own investigation evidence',
            bold: true
        },
        {
            text: '. With that, all users from different eras and fields of expertise can benefit each other by saving organized information. '
        },
        {
            text: 'Users can find similar events from the past, connect related incidents',
            bold: true
        },
        {
            text: ' and more.'
        }
    ]
};

const section3 = {
    title: '# 3 - Stories',
    p1: [
        {
            text: 'Based on those events, saved pieces of time from the last 48 hours will be displayed like an '
        },
        {
         text: 'Instagram story',
         bold: true
        },
        {
            text: ', to help the new shift get all relevant information by watching what happened. This will encourage users the save events and will be an inside tool for '
        },
        {
            text: 'passing along important information.',
            bold: true
        }
    ]
};

const JugSection5 = () => (
    <div className="flex-column">
        <h1 className="font-50 font-weight-bold new-line">{title}</h1>
        <p className="font-25">
            {description}
        </p>

        <div className="flex-column padding-semi-sections-bottom padding-semi-sections-top">
            <div className="flex-column first-section">
                <ColoredHeadline text={section1.title} backgroudColor="background-color-E1D6F0"/>
                <Paragraph paragraph={section1.p1}/>
                <div className="jug-section-5__images-wrapper-1">
                    <img alt="1" className="jug-section-5__img" src={img11}/>
                    <img alt="2" className="jug-section-5__img" src={img12}/>
                </div>
            </div>
            <div className="flex-column second-section">
                <ColoredHeadline text={section2.title}  backgroudColor="background-color-E1D6F0"/>
                <Paragraph paragraph={section2.p1}/>
                <div className="flex-row justify-content-center">
                    <img alt="3" className="jug-section-5__img" src={img21}/>
                </div>
            </div>
            <div className="flex-column third-section">
                <ColoredHeadline text={section3.title}  backgroudColor="background-color-E1D6F0"/>
                <Paragraph paragraph={section3.p1}/>
                <div className="jug-section-5__images-wrapper-1">
                    <img alt="4" className="jug-section-5__img" src={img31}/>
                    <img alt="5" className="jug-section-5__img" src={img32}/>
                </div>
            </div>
        </div>
    </div>
);

export default JugSection5;
