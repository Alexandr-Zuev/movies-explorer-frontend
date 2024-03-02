import React from 'react'
import { useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';

const Header = () => {
  const location = useLocation();
  const isMoviesPage = location.pathname === '/';
  const headerColor = isMoviesPage ? 'header__background' : '';

  return (
    <header className={`header ${headerColor}`}>
      <div className="logo">
        <img src={logo} alt="Логотип" />
      </div>
      <Navigation/>
      <NavTab/>
    </header>
  );
};

export default Header;

