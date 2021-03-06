import React from 'react';
import './About.css';
import profilePic from '../../../images/about-me-pic.jpg';

const paragraphs = [`
                Throughout my life I repeatedly chose art as a way to express myself.\n
                I draw, act, craft and sew.\n
                To no one’s surprise I ended up designing as my army service and\n
                fell in love with the awesome thought process behind the experiences\n
                we all share as users of this world.\n
`,
`
                When joining the establishment of the UX team in the Israeli air Force,\n 
                I self tought UX/UI design and had the pleasure of experimenting my\n
                knowledge on real working apps, for real operational needs and for\n
                real users. I proceeded to the role of UX team lead and was part of design\n 
                processes for countless projects.\n
`,
`
                Currently, I work on a project in the IAF as an External consultant and\n
                specialize in designing simple solutions for comlplex systems.\n
`,
`
                Today I'm feeling ready for my next opportunity and excited to learn\n
                new things everyday. I hope to work with talented people on world\n
                changing technologies and make people’s lives easier.\n
`];

const About = () => (
  <div className="flex-row justify-content-center">
    <div className="About">
        <img alt="8" className="profile-pic padding-bottom-40" src={profilePic}/>
        <div className="about-text-wrap">
            <h1 className="about-headline font-50">
                A little bit about myself.
            </h1>
            {paragraphs.map((paragraph) => (
                <p className="about-paragraph new-line font-25">
                    {paragraph}
                </p>
            ))}
        </div>
    </div>
  </div>
);

export default About;
