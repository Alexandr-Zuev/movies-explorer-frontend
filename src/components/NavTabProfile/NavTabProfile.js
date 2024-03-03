import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profile-icon.svg';
import NavTabWindow from '../NavTabWindow/NavTabWindow';

const NavTabProfile = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isNavTabWindowOpen, setIsNavTabWindowOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleNavTabWindow = () => {
        setIsNavTabWindowOpen(true);

    };

    return (
        <React.Fragment>
            {windowWidth > 768 ? (
                <div className="nav-tab-profile">
                    <Link to="/profile" className="nav-tab-profile__link">Аккаунт</Link>
                    <div className="nav-tab-profile__icon">
                        <img src={profileIcon} alt="Account Icon" className="nav-tab-profile__icon" />
                    </div>
                </div>
            ) : (
                <button className="nav-tab-profile__menu" onClick={toggleNavTabWindow}></button>
            )}
            <NavTabWindow isWindowOpen={isNavTabWindowOpen}  />
        </React.Fragment>
    );
}

export default NavTabProfile;

