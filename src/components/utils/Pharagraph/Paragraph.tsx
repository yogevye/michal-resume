import React from 'react';
import './Pharagraph.css'

// @ts-ignore
const Paragraph = ({paragraph, fontClass = 'font-25'}) => (
    <p className={'new-line ' + fontClass}>
        {
            paragraph.map((textObj: {text:string, bold?:boolean, fontSize?:string}) => {
                let className = textObj.bold? 'font-weight-bolder ' :''
                className+= textObj.fontSize ? textObj.fontSize : '';
                return (<span className={className}>{textObj.text}</span>)
            })
        }
    </p>
);

export default Paragraph;
