import React, {useEffect, useState} from 'react';
import './App.css';
import './main.css'
import {
    BrowserRouter as Router,
} from 'react-router-dom';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import airtoolLogo from './images/projects/logos/airtool-logo.png'
import JugLogo from './images/projects/logos/Jug-logo.svg'
import kabuliLogo from './images/projects/logos/kabuli-logo.svg'
import starlightLogo from './images/projects/logos/starlight-logo.svg'
import Airtool from './components/projects/Airtool/Airtool';
import Startlight from './components/projects/Startlight/Startlight';
import Kabuli from './components/projects/Kabuli/Kabuli';
import Jug from './components/projects/Jug/Jug';

import airtoolHeader from './images/projects/headers/airtool-header.png';
import jugHeader from './images/projects/headers/jug-header.png';
import kabuliHeader from './images/projects/headers/kabuli-header.png';
import startlightHeader from './images/projects/headers/starlight-header.png';

import airtoolMobileHeader from './images/projects/headers/airtool-mobile-header.png';
import jugMobileHeader from './images/projects/headers/jug-mobile-header.png';
import kabuliMobileHeader from './images/projects/headers/kabuli-mobile-header.png';
import startlightMobileHeader from './images/projects/headers/startlight-mobile-header.png';

import AirToolLink from './images/projects/links/airtool-link.svg'
import JugLinklLink from './images/projects/links/jug-link.svg'
import kabuliLink from './images/projects/links/kabuli-link.svg'
import StartligtLink from './images/projects/links/startligt-link.svg'
import linkedIn from './images/linkdin.svg'

const BASIC_LINKS = [
    {
        title: 'HOME',
        link: '/',
    },
    {
        title: 'ABOUT',
        link: '/about',
    },
    {
        title: 'RESUME',
        link: '/',
    },
    {
        title: 'CONTACT',
        link: '/CONTACT',
    }
];

const ProjectsComponents = {
    'airtool': {
        component: Airtool,
        header: airtoolHeader,
        headerMobile: airtoolMobileHeader,
        title: 'AIRTOOL',
        description: 'A tablet app designed to manage\n tools in aircraft hangars fast & easy'
    },
    'Startlight': {
        component: Startlight,
        header: startlightHeader,
        headerMobile: startlightMobileHeader,
        title: 'STARLIGHT',
        description: 'A geospatial web system for\n real-time air traffic control'
    },
    'Kabuli': {
        component: Kabuli,
        header: kabuliHeader,
        headerMobile: kabuliMobileHeader,
        title: 'KABULI',
        description: 'A mobile app designed to help citizens\n be a part of their own security'
    },
    'jug': {
        component: Jug,
        header: jugHeader,
        headerMobile: jugMobileHeader,
        title: 'JUG',
        description: 'A web app for organizing and watching\n surveillance camera footage'
    }
};

const PROJECTS_LINKS = [
    {
        component: 'airtool',
        name: 'airtool',
        link: '/airtool',
        logo: airtoolLogo,
        redesignText: 'REDESIGN / TABLET / UX / UI',
        headLine: 'Airtool',
        description: `A tablet app designed to manage \n
                      tools in aircraft hangars fast & easy.`,
        linkLogo: AirToolLink

    },{
        component: 'Startlight',
        name: 'Startlight',
        link: '/Startlight',
        logo: starlightLogo,
        redesignText: 'REDESIGN / COMPLEX / DESKTOP / UX / UI',
        headLine: 'Startlight',
        description: `A geospatial web system for \n
            real-time air traffic control.`,
        header: startlightHeader,
        linkLogo: StartligtLink
    },{
        component: 'Kabuli',
        name: 'Kabuli',
        link: '/Kabuli',
        logo: kabuliLogo,
        redesignText: 'MOBILE / IDEATION / UX / UI',
        headLine: 'Kabuli',
        description: `A mobile app designed to help citizens \n
                      be a part of their own security.`,
        header: kabuliHeader,
        linkLogo: kabuliLink
    },{
        component: 'jug',
        name: 'jug',
        link: '/jug',
        logo: JugLogo,
        redesignText: 'IDEATION / DESKTOP / UX / UI',
        headLine: 'Jug',
        description: `A web app for organizing and viewing \n
                      surveillance camera footage.`,
        header: jugHeader,
        linkLogo: JugLinklLink
    }
];

const LOCAL_STORAGE_CURRENT_LINK = 'routes.currentLink';

function App() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, setState] = useState({currentLinkName: 'HOME', showNav: 'hide-nav'});
    const {currentLinkName, showNav} = state;


    useEffect(() => {
        const currentLinkNameFromStorage =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_CURRENT_LINK) as string);
        if(currentLinkNameFromStorage) setState({ currentLinkName: currentLinkNameFromStorage,  showNav: 'hide-nav' })
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_CURRENT_LINK, JSON.stringify(currentLinkName))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    function selectedNavbarLink(e: { target: { id: any; }; }) {
        const {id: linkName} = e.target;
        // @ts-ignore
        console.log(linkName);
        if(!linkName || linkName === '') return;
        setState((prevState: any) => {
            return {...prevState, currentLinkName: linkName, showNav: 'hide-nav'}
        });
    }

    function resetCurrentLink() {
        setState((prevState: any) => {
            return {...prevState, currentLinkName: ''}
        });
    }

    function showHeaderNav(e: { target: { id: any; }; }) {
        // @ts-ignore
        setState((prevState: any) => {
            let {showNav: currentShowNav} = prevState;
            if(currentShowNav === ''){
                currentShowNav = 'hide-nav';
            } else {
                currentShowNav = '';
            }
            return {...prevState, showNav: currentShowNav}
        });
    }

    const scrollToBottom = () => {
        setState((prevState: any) => {
            return {...prevState, showNav: 'hide-nav'}
        });
        window.scrollTo({
            top: document.documentElement.scrollHeight, behavior: "smooth"
        });
    };


  // @ts-ignore
  return (
          <div className='flex-column background-color-fafafa font-family-titillium font-25 font-color-3F3939 App padding-bottom-40'>
              <Router>
                  <Header selectedNavbarLink = {selectedNavbarLink} showHeaderNav= {showHeaderNav} showNav={showNav} scrollToBottom={scrollToBottom} currentLinkName={currentLinkName} basicLinks={BASIC_LINKS}/>
                  <div className="page-content">
                      <Body projectsLinks={PROJECTS_LINKS} ProjectsComponents={ProjectsComponents} resetCurrentLink={resetCurrentLink}/>
                  </div>


                  {/*<Tail/>*/}
              </Router>
              <div className="footer-wrapper">
                  <div id="contact" className="footer flex-column align-items-center">
                      <section className="footer__title font-40 font-weight-bold">
                          Let’s connect
                      </section>
                      <section className="padding-bottom-10 footer_mail">
                          <a href = "mailto: michal.d.amrami@gmail.com">michal.d.amrami@gmail.com</a>
                      </section>
                      <section className="font-40 font-weight-bold">
                          <a href="https://www.linkedin.com/in/michal-amrami/" target = "_blank" rel="noopener noreferrer"> <img alt="likedIn" src={linkedIn}/> </a>
                      </section>
                      <section className="footer_mail">
                          0547975122
                      </section>
                  </div>
              </div>

          </div>
  );
}

export default App;
