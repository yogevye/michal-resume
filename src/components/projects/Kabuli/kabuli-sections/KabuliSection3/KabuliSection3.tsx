import React from 'react';
import './KabuliSection3.css';

const bullets = [
    [
        {text: 'We want to '},
        {
            text: 'encourage the users',
            bold: true
        },
        {text: ' to send reports and be part of the full process.'}
    ],
    [
        {text: 'We want the app to make this stressful topic into a '},
        {
            text: 'light experience.',
            bold: true
        }
    ],
    [
        {text: 'We want to help the security forces by giving an organized pool of reports, including time, location and photos.'},
    ]
];

const KabuliSection3 = () => (
    <div className="flex-column">
        <div className="flex-column">
            <h1 className="font-50 font-weight-bold">Product vision</h1>
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

export default KabuliSection3;
