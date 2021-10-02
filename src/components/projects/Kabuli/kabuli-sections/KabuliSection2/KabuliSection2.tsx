import React from 'react';
import './KabuliSection2.css';
import Paragraph from "../../../../utils/Pharagraph/Paragraph";

const description = [
    {
        text: 'We conducted a brainstorming session with the team, people from the unit\'s innovation squad and representatives \n' +
            'from the community that hosted us, to uncover pains felt by individuals. \n' +
            'It was revealed that:'
    }
];

const bullets = [
    [
      {text: 'Flooded WhatsApp groups were filled with important information, but were '},
        {
            text: 'too messy to keep track of.',
            bold: true
        }
    ],
    [
        {text: 'Citizens are eager to help, but feel like sending pictures doesn\'t do much, and so, '},
        {
            text: 'lose motivation.',
            bold: true
        }
    ],
    [
        {text: 'Security forces can’t communicate back ', bold: true},
        {
            text: ' with the senders to ask questions or just thank them and encourage \n' +
                'them to keep it up.',
        }
    ]
];

const KabuliSection2 = () => (
    <div className="flex-column">
        <div className="flex-column">
            <h1 className="font-50 font-weight-bold">Understanding the problem</h1>
            <Paragraph paragraph={description}/>
            <ul className="bullets-padding-40 redesigning-bullets font-25">
                {
                    bullets.map((bullet) => {
                        return (<li>{bullet.map((sen) => {
                            return (<span className={sen.bold ? 'font-weight-bold' : ''}>{sen.text}</span>)
                        })}</li>)
                    })
                }
            </ul>
        </div>
    </div>
);


export default KabuliSection2;
