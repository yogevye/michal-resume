import React from 'react';
import './KabuliSection4Bubble.css';


const KabuliSection4Bubble = ({params = {index : '#1', text: 'Log in – users can log in with Google/Facebook accounts, with E-mail or with a phone number.'}}) => (
  <div className="flex-row">
      <div className="flex-row bubble-size border-radius-22 background-color-FCFCFC">
          <div className="flex-column margin-25">
              <span className="font-color-C59402 font-20">{params.index}</span>
              <span className="font-25">{params.text}</span>
          </div>
      </div>
  </div>

);

export default KabuliSection4Bubble;
