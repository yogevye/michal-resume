import React from 'react';
import './JugSection1.css';

const description = 'Jug is a closed circle VOD app that allows users to save and watch videos that were recorded by surveillance cameras. This project was created by the IAF for investigating security incidents and other irregular events that are caught on camera in filmed locations and for saving massive amount of data for years and years. The app is used as a tool for homeland security purposes, but could be used as a surveillance footage navigator of all kinds.'

const bullets = [
        {text: 'PO'},
        {text: 'Back-end team',},
        {text: 'Frond-end team'},
        {text: 'UX\\UI designer (me)', bold:true}
];

const JugSection1 = () => (
  <div className="flex-row">
    <div className="flex-column jug-overview">
        <h1 className="font-25 font-weight-normal font-color-878787">OVERVIEW</h1>
        <p className="font-25">{description}</p>
    </div>
      <div className="flex-column">
        <h1 className="font-25 font-weight-normal font-color-878787">TEAM</h1>
          <ul className="redesigning-bullets font-25">
              {
                  bullets.map((bullet) => {
                      return (<li>{<span className={bullet.bold ? 'font-weight-bold' : ''}>{bullet.text}</span>}</li>)
                  })
              }
          </ul>
      </div>
  </div>
);

export default JugSection1;
