import React from 'react';
import './JugSection6.css';
import logo from '../../../../../images/projects/content/jug/section-6/logo.svg'
import colors from '../../../../../images/projects/content/jug/section-6/colors.svg'
import Paragraph from "../../../../utils/Pharagraph/Paragraph";

import img11 from '../../../../../images/projects/content/jug/section-6/img-1-1.svg';
import img12 from '../../../../../images/projects/content/jug/section-6/img-1-2.svg';
import img21 from '../../../../../images/projects/content/jug/section-6/img-2-1.svg';
import img22 from '../../../../../images/projects/content/jug/section-6/img-2-2.svg';
import img23 from '../../../../../images/projects/content/jug/section-6/img-2-3.svg';
import img24 from '../../../../../images/projects/content/jug/section-6/img-2-4.svg';
import img31 from '../../../../../images/projects/content/jug/section-6/img-3-1.svg';
import img32 from '../../../../../images/projects/content/jug/section-6/img-3-2.svg';
import img33 from '../../../../../images/projects/content/jug/section-6/img-3-3.svg';
import img34 from '../../../../../images/projects/content/jug/section-6/img-3-4.svg';
import img35 from '../../../../../images/projects/content/jug/section-6/img-3-5.svg';
import img41 from '../../../../../images/projects/content/jug/section-6/img-4-1.svg';
import img42 from '../../../../../images/projects/content/jug/section-6/img-4-2.svg';
import img43 from '../../../../../images/projects/content/jug/section-6/img-4-3.svg';

const description = 'While the back-end and frond-end teams started developing based on the wireframes and written documents, I drilled down into every detail and brought a pixel perfect design.'

const timelineP1 = [
    {
        text: 'This is the most important feature is the app, the timeline in the central tool and is shown at all times. While designing, it was important to focus on making it ',
    },
    {
        text: 'readable and useable',
        bold: true
    },
    {
        text: 'Using the timeline is a way of passing through time and setting into a "new reality", and so, it was important to make sure ',
    },
    {
        text: 'the timeline is indicative of the time you see',
        bold: true
    },
    {
        text: '. The timeline shows start, end and "present" time in the center, to make sure there is no confusion ' +
            'regarding the footage that is shown on the screen. I decided to set the default time frame into a two-hour window after realizing from the users what they usually want to watch and in what time frame it would be easy to skip with a click of the mouse. Returning back to the "live" display is a one-click option on the bar itself. The speed buttons are accessible, so they are always on display and often switched. ',
    }
];

const timelineP2 = [
    {
        text: 'Besides a regular popup window for setting start and end time through inputting numbers, I wanted to give another ' +
                'way of setting the time '
    },
    {
        text: 'for the users whose keyboards are hard to reach',
        bold: true
    },
    {
        text: '. Hovering on any area of the timeline ' +
            'besides the bar itself and the action buttons opens a component for setting the time frame. Users choose a year, ' +
            'then a month, a day and hours, based on the availability of the recorded footage in the server. After selecting time, ' +
            'the choice would appear above and allow to go back at any time with the arrow on the side. This special nav bar was ' +
            'a challenge for the client developers, but ',
    },
    {
        text: 'has been proven to work wonderfully during user testing.',
        bold: true
    }
];

const timelineP3 = [
    {
        text: 'Users can select start and end time on the timeline directly, or type in these times, in order to save a new event. ' +
            'Giving a name to the event and selecting a geographic area is mandatory. users are also encouraged to add tags, ' +
            'to make the event pool more helpful and organized. At all times, users can open the folder to watch the lists of ' +
            'all events and flag events (those which are marked as flags for all kinds of reasons), scroll down to see what\'s ' +
            'new and search by name and/or tags. '
    }
];

const timelineP4 = [
    {
        text: 'The events saved earlier are used in Jug as an ',
    },
    {
        text: 'in-app solution for switching shifts and keeping the new lookouts up to ' +
            'date on the daily occurrences',
        bold: true
    },
    {
        text: '. When opening the app, events from the last 48 hours will be displayed in a "story" ' +
            'form, divided into areas and including the names, notes and tags. All events from recent time will be added to the ' +
            'story, and will be saved in the all-time-events list. Pressing an area will move the timeline to the time saved and ' +
            'show all stories one after the other. '
    }
]

const JugSection6 = () => (
    <div className="flex-column padding-divs-bottom-50">
        <div className="flex-column">
            <h1 className="font-50">Design</h1>
            <p>
                {description}
            </p>
        </div>
        <div className="flex-column">
            <h2>Visual Interface</h2>
            <div className="flex-column padding-divs-bottom-20">
                <div className="flex-row align-items-center">
                    <span className="padding-right-20 font-25">Logo</span>
                    <img alt="30" className="jug-section-6_logo-img" src={logo}/>
                </div>
                <div className="flex-row align-items-center">
                    <span className="padding-right-20 font-25">Color palette</span>
                    <img alt="31" className="jug-section-6_color-img" src={colors}/>
                </div>
            </div>
        </div>
        <div className="flex-column">
            <h2>Time line</h2>
            <Paragraph paragraph={timelineP1}/>
            <div className="flex-row justify-content-center img-padding">
                <img alt="33" className="img-phone-full-capacity" src={img11}/>
            </div>
            <div className="flex-row justify-content-center img-padding">
                <img alt="32" className="img-phone-full-capacity" src={img12}/>
            </div>
        </div>
        <div className="flex-column">
            <h2>Time navigation</h2>
            <Paragraph paragraph={timelineP2}/>
            <div className="flex-column align-items-center img-padding">
                <h4>Select a year</h4>
                <img alt="34" className="img-phone-full-capacity" src={img21}/>
            </div>
            <div className="flex-column align-items-center img-padding">
                <h4>Select a month</h4>
                <img alt="35" className="img-phone-full-capacity" src={img22}/>
            </div>
            <div className="flex-column align-items-center img-padding">
                <h4>Select a day</h4>
                <img alt="36" className="img-phone-full-capacity" src={img23}/>
            </div>
            <div className="flex-column align-items-center img-padding">
                <h4>Select an hour</h4>
                <img alt="37" className="img-phone-full-capacity" src={img24}/>
            </div>
        </div>
        <div className="Saving and viewing events">
            <h2>Saving and viewing events</h2>
            <Paragraph paragraph={timelineP3}/>
            <div className="flex-column align-items-center img-padding">
                <h4>Pick time frame</h4>
                <img alt="38" className="img-phone-full-capacity" src={img31}/>
            </div>
            <div className="flex-column align-items-center img-padding">
                <h4>Create event</h4>
                <img alt="39" className="img-phone-full-capacity" src={img32}/>
            </div>
            <div className="flex-row justify-content-center img-padding">
                <img alt="40" className="img-phone-full-capacity" src={img33}/>
            </div>
            <div className="flex-column align-items-center img-padding">
                <h4>Event list</h4>
                <img alt="41" className="img-phone-full-capacity" src={img34}/>
            </div>
            <div className="flex-column align-items-center img-padding">
                <img alt="42" className="img-phone-full-capacity" src={img35}/>
            </div>
        </div>

        <div className="Saving and viewing events">
            <h2>Story</h2>
            <Paragraph paragraph={timelineP4}/>
            <div className="flex-column align-items-center img-padding">
                <img alt="43" className="img-phone-full-capacity" src={img41}/>
            </div>
            <div className="flex-column align-items-center img-padding">
                <img alt="44" className="img-phone-full-capacity" src={img42}/>
            </div>
            <div className="flex-column align-items-center img-padding">
                <img alt="45" className="img-phone-full-capacity" src={img43}/>
            </div>
        </div>
    </div>
);

export default JugSection6;
