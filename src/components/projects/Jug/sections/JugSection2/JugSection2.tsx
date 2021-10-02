import React from 'react';
import './JugSection2.css';
import Paragraph from "../../../../utils/Pharagraph/Paragraph";

const WorkEnvironmentDescription = [
    {
        text: 'Areas of interest are tracked at all times and are being observed and recorded. While lookouts watch live streaming of the footage non-stop, teams of investigators are performing research through gathering all data possible, in order to understand what happened and give the correct conclusions. The teams watch the surveillance footage together, use other gathered information to build a picture and pass it on to the handlers.\n' +
            '\n' +
            'Jug was created to give users ',
    },
    {
        text: 'access to recorded footage from the near and far past',
        bold: true
    },
    {
        text: ', whether it was seconds, days or years ago. The app was also aimed to help ',
    },
    {
        text: 'take all the data that is collected from the cameras and arrange it, for the sake of improving capabilities.',
        bold: true
    },
];

const JugSection2 = () => (
    <div className="flex-column">
        <h1 className="font-50 font-weight-bold">The mission</h1>
        <Paragraph paragraph={WorkEnvironmentDescription}/>
    </div>
);

export default JugSection2;
