import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';
import NavTabProfile from '../NavTabProfile/NavTabProfile';
import NavTabMenu from '../NavTabMenu/NavTabMenu';

const Header = () => {
  const location = useLocation();
  const isMoviesPage = location.pathname === '/';

  const NavTabComponent = () => {
    if (isMoviesPage) {
      return <NavTab />;
    } else {
      return (
        <>
          <NavTabProfile />
          <NavTabMenu />
        </>
      );
    }
  };

  return (
    <header className={`header ${isMoviesPage ? 'header__background' : ''}`}>
      <div className="header__content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Логотип" />
          </Link>
        </div>
        {!isMoviesPage && <Navigation />}
        <NavTabComponent />
      </div>
    </header>
  );
};

export default Header;
