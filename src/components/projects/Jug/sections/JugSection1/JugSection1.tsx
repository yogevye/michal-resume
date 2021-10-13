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
  <div className="jug-section-1">
    <div className="flex-row jug-overview">
        <div className="flex-column jug-section-1__overview-content">
            <h1 className="jug-section-1__header">OVERVIEW</h1>
            <p>{description}</p>
        </div>

    </div>
      <div className="flex-column">
        <h1 className="jug-section-1__header">TEAM</h1>
          <ul className="redesigning-bullets">
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
