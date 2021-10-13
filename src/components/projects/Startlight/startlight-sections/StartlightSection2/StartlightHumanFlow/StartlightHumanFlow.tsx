import React from 'react';
import './StartlightHumanFlow.css';

// @ts-ignore
const StartlightHumanFlow = ({humanContent}) => (
    <div className="flex-column">
        <div className="flex-row justify-content-center">
            <div className="flex-row humanFlowContainer border-radius-22 background-color-DFDFDF">
                <div className="flex-column full-width-capacity margin-40">
                    <div className="flex-row space-between align-items-center">
                        <div className="flex-row align-items-center justify-content-center humanFlowContainer_title border-radius-35 background-color-F69193">
                            <span className="font-color-3F3939 font-25">{humanContent.type}</span>
                        </div>
                        <div className="flex-column font-25 align-items-center">
                            <span className="font-weight-bolder">Age</span>
                            <span>{humanContent.ageRange}</span>
                        </div>
                        <div className="flex-column font-25 align-items-center">
                            <span className="font-weight-bolder">Level of Expertise</span>
                            <span className={humanContent.level.fontColor}>{humanContent.level.title}</span>
                        </div>
                    </div>
                    <div className="flex-column">
                        <ul className="bullets-padding-15 redesigning-bullets font-25">
                            {humanContent.bullets.map((bullet:string) => (<li>{bullet}</li>))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {humanContent.flowImage ? (
            <div className="flex-row justify-content-center">
                <div className="flex-row width-970 justify-content-end">
                    <img src={humanContent.flowImage.img}/>
                </div>
            </div>
        ) : null}

    </div>

);

export default StartlightHumanFlow;
