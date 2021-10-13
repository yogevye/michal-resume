import React, { useState } from 'react';
import './Header.css';
import nameLogo from '../../images/name-logo.svg';
import {Link} from "react-router-dom";
import menuLogo from '../../images/menu.svg'
import useDocumentScrollThrottled from '../../utils/useDocumentScrollThrottled';


// @ts-ignore
const Header = ({selectedNavbarLink, currentLinkName, basicLinks}) => {
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);

    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 400;

    useDocumentScrollThrottled((callbackData: { previousScrollTop: any; currentScrollTop: any; }) => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setShouldShowShadow(currentScrollTop > 2);

        setTimeout(() => {
            setShouldHideHeader(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });


    const shadowStyle = shouldShowShadow ? 'shadow' : '';
    const hiddenStyle = shouldHideHeader ? 'hidden' : '';

    return (
        <div className={`bar ${shadowStyle} ${hiddenStyle}` }>
        <div className="bar__content">
                <img className="bar__logo" src={nameLogo} alt="name logo"/>
                <input type="checkbox" id="inputNavToggle"/>
                <label className="bar__nav-toggle" htmlFor="inputNavToggle">
                    <img className="menu-logo" src={menuLogo}/>
                </label>

            <nav className="nav">
                    {basicLinks.map((basicLink: {link: string, title: string}) => {
                        return (
                            <Link id={basicLink.title} onClick={selectedNavbarLink} className={'nav__link' + (currentLinkName === basicLink.title ? ' selected' : '')} to={basicLink.link}>{basicLink.title}</Link>
                        )
                    })}
                </nav>
            </div>
        </div>

    );
};

export default Header;
