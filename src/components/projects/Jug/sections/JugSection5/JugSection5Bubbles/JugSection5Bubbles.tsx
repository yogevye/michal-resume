import React from 'react';
import './JugSection5Bubbles.css';
import Paragraph from "../../../../../utils/Pharagraph/Paragraph";

// @ts-ignore
const JugSection5Bubbles = ({params}) => (
    <div className="flex-row">
        <div className="flex-column">
            <div className="border-radius-35 background-color-E1D6F0">
                {params.title}
            </div>
            <div className="flex-row">
                <Paragraph paragraph={params.description}/>
            </div>
            <div className="flex-row full-width-capacity justify-content-center">
                    {params.imgs.map((imgSrc: string | undefined) => (
                        <div>
                            <img alt="6" src={imgSrc}/>
                        </div>

                    ))}
            </div>
        </div>
    </div>
);

export default JugSection5Bubbles;
