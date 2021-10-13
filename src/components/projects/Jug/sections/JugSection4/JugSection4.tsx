import React from 'react';
import './JugSection4.css';

const bullets1 = [
    [
        {text: 'The past work method '},
        {
            text: 'lacks knowledge preservation for long periods of time.',
            bold: true
        },
    ],
    [
        {text: 'Switching between shifts is '},
        {
            text: 'inefficient, relies on memory and misses important details',
            bold: true
        },
        {text: ' regularly.'},
    ],
    [
        {text: 'Reaching past footage is through Windows Explorer in hundreds of folders and files.'},
    ]
];

const bullets2 = [
    [
        {
            text: 'Quick access ',
            bold: true
        },
        {text: 'to all saved footage from day-one of recording.'},
    ],
    [
        {
            text: 'Knowledge preservation',
            bold: true
        },
        {text: ' based on times and categories, for all time events.'},
    ],
    [
        {text: 'Automating changing the shift as much as possible, to '},
        {
            text: 'avoid reliance of memory or external tools.',
            bold: true
        },
    ]
];

const goalsDescription = 'After getting to know the users and understanding their work method, struggles and dreams from the new app, the PO and I set goals for the new app to achieve.'

const JugSection4 = () => (
    <div className="flex-column padding-divs-bottom-40">
        <div className="flex-column">
            <h1 className="font-50 font-weight-bold">Challenges</h1>
            <ul className="bullets-padding-40 redesigning-bullets font-25">
                {
                    bullets1.map((bullet) => {
                        return (<li>{bullet.map((sen) => {
                            return (<span className={sen.bold ? 'font-weight-bold' : ''}>{sen.text}</span>)
                        })}</li>)
                    })
                }
            </ul>
        </div>
        <div className="flex-column">
            <h1 className="font-50 font-weight-bold">Goals</h1>
            <p>
                {goalsDescription}
            </p>
            <ul className="bullets-padding-40 redesigning-bullets font-25">
                {
                    bullets2.map((bullet) => {
                        return (<li>{bullet.map((sen) => {
                            return (<span className={sen.bold ? 'font-weight-bold' : ''}>{sen.text}</span>)
                        })}</li>)
                    })
                }
            </ul>
        </div>
    </div>
);

export default JugSection4;
