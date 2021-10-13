import React from 'react';
import './StartlightSection5.css';
import Paragraph from "../../../../utils/Pharagraph/Paragraph";
import ColoredHeadline from "../../../../utils/ColoredHeadline/ColoredHeadline";
import img11 from '../../../../../images/projects/content/startlight/section-5/img-1-1.svg';
import img12 from '../../../../../images/projects/content/startlight/section-5/img-1-2.svg'
import img13 from '../../../../../images/projects/content/startlight/section-5/img-1-3.svg'
import img14 from '../../../../../images/projects/content/startlight/section-5/img-1-4.svg'
import img15 from '../../../../../images/projects/content/startlight/section-5/img-1-5.svg'
import img16 from '../../../../../images/projects/content/startlight/section-5/img-1-6.svg'
import middleImg from '../../../../../images/projects/content/startlight/section-5/img-1-middle.svg'
import arrowLeft from '../../../../../images/projects/content/kabuli/section-5/arrow-left.svg';

import img21 from '../../../../../images/projects/content/startlight/section-5/img-2-1.svg';
import img22 from '../../../../../images/projects/content/startlight/section-5/img-2-2.svg'
import img23 from '../../../../../images/projects/content/startlight/section-5/img-2-3.svg'
import img24 from '../../../../../images/projects/content/startlight/section-5/img-2-4.svg'
import img25 from '../../../../../images/projects/content/startlight/section-5/img-2-5.svg'


import img31 from '../../../../../images/projects/content/startlight/section-5/img-3-1.svg'
import img32 from '../../../../../images/projects/content/startlight/section-5/img-3-2.svg'

const section1 ={
    title: '# 1 - Labels on varying zoom levels',
    p1: [
        {
            text: 'In order to find the correct way for users the view the map, even at a load that is above average, I had to put my finger\n \n'
        },
        {
            text: 'First, the colors\n',
            bold: true,
            fontSize: 'font-30'
        },
        {
            text: 'to make the map readable on every screen and finding entities easily, the former system planners used neon color planes on the dark surface. I decided to use pastel color palette that was easy on the eyes, and added dark strokes to increase the contrast. '
        },
    ],
    pic2Description: [
        {
            text: 'After trying out the different labels, I realized the big change would come from ',
        },
        {
            text: 'adjusting the amount of data shown',
            bold: true,
        },{
            text: ' to the geographic scope on the screen. And so, I chose the label that was split to three.'
        }
    ],
    p2: [
        {
            text: 'Second, the labels\n',
            bold: true,
            fontSize: 'font-30'
        },
        {
            text: 'The labels’ purpose is to show reduced information on each plane, in order to give the users the needed data for recognizing them. When labels are messy and not intelligent enough, it’s hard to tell where a piece of data belongs. Here are three of the early design attempts for the new label, that focuses on organizing the data on the map.',
        }
    ],
    p3: [
        {
            text: 'Third, the zoom levels\n',
            bold: true,
            fontSize: 'font-30'
        },
        {
            text: 'I decided to divide the map display into '
        },
        {
            text: '3 zoom levels the users can move across',
            bold: true,
        },
        {
            text: '. Switching from one zoom level to the other transforms the label as well, meaning, ',
        },
        {
            text: ' more and more data is unraveled on each entity while zooming in',
            bold: true,
        },
        {
            text: ', and the other way around. While looking at a wider georaphic scope, more icons are shown, but only the name is revealed in a single glance, which makes the user’s job easier in maintaining wide status of the airspace.\n' +
                '\n' +
                'Lables are built as three different components, each component contains text fields and is revealed respectively to the zoom level the user is on at that time.'
        }
    ]
};

const section2 ={
    title: '# 2 - Snack bars, quick actions & meticulous forms',
    p1: [
        {
            text: 'After reducing the data shown on the map significantly, I needed to ',
        },
        {
            text: 'compensate and give users quick access to expanded information',
            bold: true
        },
        {
            text: '. Ways to do that:\n\n'
        },
        {
            text: 'Snack bar on one click',
            bold: true,
            fontSize: 'font-30'
        },
        {
            text: 'A single click on an entity selects it and shows more information, it does not require users to double-click for a full form and “commit” to the action. It’s easy, it’s fast and it’s just what they need most of the time.'
        }
    ],
    p2: [
        {
            text: 'Quick actions\n',
            bold: true,
            fontSize: 'font-30'
        },
        {
            text: 'User actions on the map are tools for further research and can be used through right click. Fast & easy access to a selected few can help users achieve more in less time. User testings after publishing proved the feature to be working and is the user’s first choice for operating the app.'
        }
    ],
    p3: [
        {
            text: 'Form\n',
            bold: true,
            fontSize: 'font-30'
        },
        {
            text: 'A form designed meticulously for deep diving into the entity. Opens on the left side and doesn’t hide the rest of the map, like a pop-up would. '
        }
    ]
};

const section3 ={
    title: '# 3 - Configuration: great minds sometimes need their own thing',
    p1: [
        {
            text: 'Since all users and roles are not the same - the three I exampled ealier and many more, and since all of them have different level of expertise and comprehension of visual imformation, we decided to '
        },
        {
            text: 'allow users to organize their map view for their own needs and convenience',
            bold: true
        },
        {
            text: '. Designing a window for selecting what data to show, when, and where to show it, is a ',
        },
        {
            text: 'complex UX task',
            bold: true
        },
        {
            text: '. I focused on making this flow usable and even fun, and so, I devided it into two steps:\n' +
                '\n',
        },
        {
            text: 'Step1\n',
            bold: true,
            fontSize: 'font-30'
        },
        {
            text: 'The user places the data they want to see on the label and selects up to 3 user actions',
            bold: true
        },
        {
            text: ' from the pool. To move the data fields around, users drag and drop into the desired place, they can add, remove and switch locations. Each field that was places is colored for indication and connot be placed on the label again. Clicking the “Quick Actions” tab or on the component will show the action pool and will function the same in a drag and drop technique, '
        }
    ],
    p2: [
        {
            text: 'Step2\n',
            bold: true,
            fontSize: 'font-30'
        },
        {
            text: 'After placing the wanted fields, the label is designed and ready to be configured. The user can '
        },
        {
            text: 'adjust the zoom levels using the side bar',
            bold: true
        },
        {
            text: ' with some help from simultaneous preview on the map. For each of the three zoom level the user can '
        },
        {
            text: 'choose what details will appear',
            bold: true
        },
        {
            text: ' and the sizes of the icon and the label themselves. '
        }
    ],
    p3: [
        {
            text: 'The user saves the design, which will be viewed automatically in the future uses of the app.'
        },
    ]
};

const StartlightSection5 = () => (
    <div className="flex-column padding-divs-bottom-40">
        <div className="flex-column">
            <h1>Designing a solution</h1>
            <h2>Targeting the top goal - map view</h2>
        </div>
        <div className="flex-column sections padding-divs-bottom-40">
            <div className="flex-column first-section">
                <ColoredHeadline text={section1.title}/>
                <Paragraph paragraph={section1.p1}></Paragraph>
                <div className="flex-row justify-content-center img-padding">
                    <img alt="s1" className="img-phone-full-capacity" src={img11}/>
                </div>
                <Paragraph paragraph={section1.p2}></Paragraph>
                <div className="flex-column align-items-center img-padding">
                    <img alt="s2" className="img-phone-full-capacity" src={img12}/>
                    <img alt="s3" className="section5_arrow" src={arrowLeft}/>
                    <div className="flex-row img1DesWidth">
                        <Paragraph paragraph={section1.pic2Description}/>
                    </div>
                </div>
                <Paragraph paragraph={section1.p3}></Paragraph>
                <div className="flex-row justify-content-center img-padding">
                    <img alt="s4" className="img-phone-full-capacity" src={img13}/>
                </div>
                <div className="flex-column align-items-center img-padding">
                    <h4>Furthest zoom level</h4>
                    <img alt="s5" className="img-phone-full-capacity" src={img14}/>
                </div>
                <div className="flex-row justify-content-center">
                    <img alt="s6" className="middle-img-size" src={middleImg}/>
                </div>
                <div className="flex-column align-items-center img-padding">
                    <h4>Medium zoom level</h4>
                    <img alt="s7" className="img-phone-full-capacity" src={img15}/>
                </div>
                <div className="flex-row justify-content-center">
                    <img alt="s8" className="middle-img-size" src={middleImg}/>
                </div>
                <div className="flex-column align-items-center img-padding">
                    <h4>Closest zoom level</h4>
                    <img alt="s9" className="img-phone-full-capacity" src={img16}/>
                </div>
            </div>
            <div className="flex-column second-section">
                <ColoredHeadline text={section2.title}/>
                <Paragraph paragraph={section2.p1}/>
                <div className="flex-row justify-content-center img-padding">
                    <img alt="s10" className="img-phone-full-capacity" src={img21}/>
                </div>
                <div className="flex-row justify-content-center img-padding">
                    <img alt="s11" className="img-phone-full-capacity" src={img22}/>
                </div>
                <Paragraph paragraph={section2.p2}/>
                <div className="flex-row justify-content-center img-padding">
                    <img alt="s12" className="img-phone-full-capacity" src={img23}/>
                </div>
                <Paragraph paragraph={section2.p3}/>
                <div className="flex-row justify-content-center img-padding">
                    <img alt="s13" className="img-phone-full-capacity" src={img24}/>
                </div>
                <div className="flex-row justify-content-center img-padding">
                    <img alt="s14" className="img-phone-full-capacity" src={img25}/>
                </div>
            </div>
            <div className="flex-column second-section">
                <ColoredHeadline text={section2.title}/>
                <Paragraph paragraph={section3.p1}/>
                <div className="flex-row justify-content-center img-padding">
                    <img alt="s15" className="img-phone-full-capacity" src={img31}/>
                </div>
                <Paragraph paragraph={section3.p2}/>
                <div className="flex-row justify-content-center img-padding">
                    <img alt="s16" className="img-phone-full-capacity" src={img32}/>
                </div>
                <Paragraph paragraph={section3.p3}/>
            </div>
        </div>
    </div>
);

export default StartlightSection5;
