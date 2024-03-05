import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profile-icon.svg';



const NavTabProfile = () => {

    return (
        <div className="nav-tab-profile">
            <Link to="/profile" className="nav-tab-profile__link">Аккаунт</Link>
            <div className="nav-tab-profile__icon">
                <img src={profileIcon} alt="Account Icon" className="nav-tab-profile__icon" />
            </div>
        </div>
    );
}

export default NavTabProfile;

