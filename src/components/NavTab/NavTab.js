import React from 'react';
import { Link } from 'react-router-dom';

const NavTab = () => {
  return (
    <nav className="navtab">
      <Link to="/signup" className='navtab__register-button'>Регистрация</Link>
      <Link to="/signin" className="navtab__login-button">Войти</Link>
    </nav>
  );
}

export default NavTab;
