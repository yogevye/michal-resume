import React, {Component, useEffect, useState} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
} from 'react-router-dom';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import airtoolLogo from './images/projects/logos/airtool-logo.svg'
import JugLogo from './images/projects/logos/Jug-logo.svg'
import kabuliLogo from './images/projects/logos/kabuli-logo.svg'
import starlightLogo from './images/projects/logos/starlight-logo.svg'
import Airtool from './components/projects/Airtool/Airtool';
import Startlight from './components/projects/Startlight/Startlight';
import Kabuli from './components/projects/Kabuli/Kabuli';
import Jug from './components/projects/Jug/Jug';
import airtoolHeader from './images/projects/headers/airtool-header.svg';
import jugHeader from './images/projects/headers/jug-header.svg';
import kabuliHeader from './images/projects/headers/kabuli-header.svg';
import startlightHeader from './images/projects/headers/startlight-header.svg';
import AirToolLink from './images/projects/links/airtool-link.svg'
import JugLinklLink from './images/projects/links/jug-link.svg'
import kabuliLink from './images/projects/links/kabuli-link.svg'
import StartligtLink from './images/projects/links/startligt-link.svg'




// import Tail from './components/Tail/Tail';

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
        link: '/',
    }
];

const ProjectsComponents = {
    'airtool': {
        component: Airtool,
        header: airtoolHeader,
        title: 'AIRTOOL',
        description: '\nA tablet app designed to manage tools in aircraft hangars fast & easy'
    },
    'Startlight': {
        component: Startlight,
        header: startlightHeader,
        title: 'STARLIGHT',
        description: 'A geospatial web system for real-time air traffic control'
    },
    'Kabuli': {
        component: Kabuli,
        header: kabuliHeader,
        title: 'KABULI',
        description: 'A mobile app designed to help citizens be a part of their own security'
    },
    'jug': {
        component: Jug,
        header: jugHeader,
        title: 'JUG',
        description: 'A web app for organizing and watching surveillance camera footage'
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
    const [state, setState] = useState({currentLinkName: ''});
    const {currentLinkName} = state;

    useEffect(() => {
        const currentLinkNameFromStorage =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_CURRENT_LINK) as string);
        if(currentLinkNameFromStorage) setState({currentLinkName: currentLinkNameFromStorage})
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
            return {...prevState, currentLinkName: linkName}
        });
    }

  // @ts-ignore
  return (
      <div className='App'>
          <Router>
              <Header selectedNavbarLink = {selectedNavbarLink} currentLinkName={currentLinkName} basicLinks={BASIC_LINKS}/>
              <Body projectsLinks={PROJECTS_LINKS} ProjectsComponents={ProjectsComponents}/>
              {/*<Tail/>*/}
          </Router>
      </div>

  );
}

export default App;
