import React from 'react';
import './AirtoolSection4.css';

const sectionHeader = 'Findings from\n' +
    'observations and interviews';
const sections = [
    {
        index: '#1',
        title: 'Many machanics are not pleased with their job',
        description: 'Machanics are in mandatory army service and many of them feel resentful.\n' +
            '“Tool room duty” is a shift they must complete every 2 weeks, and is concieved as boring.'
    },
    {
        index: '#2',
        title: 'Machanics spend a lot of time learning how to use the system',
        description: 'Negative emotions towards “Tool room duty” is primarily due to difficulties performing\n' +
            'fast actions in a stressful environment, because of the flat learning curve of the old system.'
    },
    {
        index: '#3',
        title: 'Machanics know where each tool is located',
        description: 'Although there are handreds of tools in the room, machanics are trained to fetch them\n' +
            'as quick as possible and remember locations, names and even serial numbers.'
    }
];

const AirtoolSection4 = () => {
    return (
        <div className="flex-column font-25 font-color-3F3939">
            <h1 className="new-line font-50 bold-text">{sectionHeader}</h1>
            <div className="flex-row justify-content-center">
                <div className="width-982 flex-column padding-bottom-40">
                    {sections.map((section) => (
                        <div className="flex-row padding-bottom-40">
                            <div className="flex-column width-837 height-196 background-color-green border-radius-22 padding-content-30 space-between">
                                <span className="new-line font-20">{section.index }</span>
                                <span className="new-line font-25 font-weight-bolder">{section.title }</span>
                                <span className="new-line font-20">{section.description }</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AirtoolSection4;