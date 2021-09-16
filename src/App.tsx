import React, {useEffect, useState} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
} from 'react-router-dom';

import Header from './components/Header/Header';
import Body from "./components/Body/Body";
import airtoolLogo from  './images/projects-logos/airtool-logo.svg'
import JugLogo from  './images/projects-logos/Jug-logo.svg'
import kabuliLogo from  './images/projects-logos/kabuli-logo.svg'
import starlightLogo from  './images/projects-logos/starlight-logo.svg'

// import Tail from "./components/Tail/Tail";

const PROJECTS_LINKS = [
    {
        name: 'airtool',
        link: '/airtool',
        logo: airtoolLogo,
        redesignText: 'REDESIGN / TABLET / UX / UI',
        headLine: 'Airtool',
        description: `A tablet app designed to manage \n
                      tools in aircraft hangars fast & easy.`
    },{
        name: 'Startlight',
        link: '/Startlight',
        logo: JugLogo,
        redesignText: 'REDESIGN / COMPLEX / DESKTOP / UX / UI',
        headLine: 'Startlight',
        description: `A geospatial web system for \n
            real-time air traffic control.`
    },{
        name: 'Kabuli',
        link: '/Kabuli',
        logo: kabuliLogo,
        redesignText: 'MOBILE / IDEATION / UX / UI',
        headLine: 'Kabuli',
        description: `A mobile app designed to help citizens \n
                      be a part of their own security.`
    },{
        name: 'jug',
        link: '/jug',
        logo: starlightLogo,
        redesignText: 'IDEATION / DESKTOP / UX / UI',
        headLine: 'Jug',
        description: `A web app for organizing and viewing \n
                      surveillance camera footage.`
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
      <div className="App">
          <Router>
              <Header selectedNavbarLink = {selectedNavbarLink} currentLinkName={currentLinkName}/>
              <Body projectsLinks={PROJECTS_LINKS}/>
              {/*<Tail/>*/}
          </Router>
      </div>

  );
}

export default App;
