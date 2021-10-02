import React from 'react';
import './KabuliSection5.css';
import image1 from '../../../../../images/projects/content/kabuli/section-5/img1.svg';
import image5 from '../../../../../images/projects/content/kabuli/section-5/img5.svg';

import KabuliSection5SignUp from "./KabuliSection5SignUp/KabuliSection5SignUp";
import KabuliSectionNewReport from "./KabuliSectionNewReport/KabuliSectionNewReport";
import KabuliSectionMyReports from "./KabuliSectionMyReports/KabuliSectionMyReports";

const description = 'After mocking up a user journey and the team was busy with the first tasks, I went ahead with the designs. Each \n' +
    'screen was passed along the moment it was finished, so the work could keep going. In the design, I focused on \n' +
    'keeping the theme light and happy. With a heavy topic such a this, it was important to stay away from the \n' +
    'seriousness of it and make the app feel like a normal and fun experience.';

const semiSections = [
    {
        title: 'Splash screen',
        description: 'This screen was created to showcase our logo and explain the idea of the app.',
        img: image1
    },
    {
        title: 'Sign up page',
        description: 'Users can sign up with existing accounts or through email address. Entering the app without signing up is also an option, but will not allow the users to watch the status of their own reports and chat with the security forces. ',
        component: KabuliSection5SignUp
    },
    {
        title: 'Home page',
        description: 'Users can use the big CTA button to make a new report, call relevant security force or navigate to other screens.',
        img: image1
    },
    {
        title: 'New report',
        description: 'When creating a report, the most important information needed to treat the problem fast is the cause itself: a kite, a balloon or a fire that already started. Users select the cause, after that the options are shown accordingly.',
        component: KabuliSectionNewReport
    },
    {
        title: 'We want to chat!',
        description: 'We wanted to keep the sign up process quick, to avoid abandonment so early on. For that reason, users had only submitted an email address. Because time was limited, a chat option with the security forces on the other end was through Whatsapp only, so after sending a report, we ask users for their phone number. This screen is all about being thankful and adding the chat option for the benefit of citizens and security forces combined. ',
        img: image5
    },
    {
        title: 'My reports',
        description: 'In this page users can view the reports they sent out, be updated on their status and chat through Whatsapp on each specific report with the assigned handler.',
        component: KabuliSectionMyReports
    }
]

const KabuliSection5 = () => (
    <div className="flex-column">
        <div className="flex-column">
            <h1 className="font-50 font-weight-bold">Design</h1>
            <p>{description}</p>
            <div className="flex-column">
                {semiSections.map((semiSection) => {
                    const SemiSectionComponent = semiSection.component;

                    // @ts-ignore
                    return (
                        <div className="flex-column">
                            <h2>{semiSection.title}</h2>
                            <p>{semiSection.description}</p>
                            <div className="flex-row justify-content-center">
                                {SemiSectionComponent ? <SemiSectionComponent/> :  <img src={semiSection.img}/>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
);

export default KabuliSection5;
