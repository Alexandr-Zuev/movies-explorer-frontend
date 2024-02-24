import React from 'react'
import logo from '../../images/logo.svg';

function Header() {

  return (
    <header className='header'>
      <div className="logo">
        <img src={logo} alt="Логотип" />
      </div>
      <nav className="header__navigation">
        <a href="/movies">Фильмы</a>
        <a href="/saved-movies">Сохраненные фильмы</a>
      </nav>
      <div className="header__user-actions">
        <a className='register-button' href="/movies">Регистрация</a>
        <button className="login-button">Войти</button>
      </div>
    </header>
  );
};

export default Header;