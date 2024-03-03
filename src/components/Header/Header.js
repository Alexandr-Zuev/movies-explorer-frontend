import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';
import NavTabProfile from '../NavTabProfile/NavTabProfile';

const Header = () => {
  const location = useLocation();
  const isMoviesPage = location.pathname === '/';

  const NavTabComponent = isMoviesPage ? NavTab : NavTabProfile;

  return (
    <header className={`header ${isMoviesPage ? 'header__background' : ''}`}>
      <div className="header__content">
        <div className="logo">
          <img src={logo} alt="Логотип" />
        </div>
        <Navigation />
        <NavTabComponent />
      </div>
    </header>
  );
};

export default Header;
