import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Login = () => {

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // логика валидации здесь
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('Пожалуйста, введите корректный email');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    if (value.length < 6) {
      setPasswordError('Пароль должен содержать не менее 6 символов');
    } else {
      setPasswordError('');
    }
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <Link to="/"><img className="login__logo" src={logo} alt="Логотип" /></Link>
        <h1 className="login__title">Рады видеть!</h1>

        <div className="login__input-container">
          <label className="login__input-label" htmlFor="email">Email</label>
          <input
            className="login__input"
            type="email"
            name="email"
            required
            onChange={handleEmailChange}
          />
          <span className="login__error-message">{emailError}</span>
        </div>

        <div className="login__input-container">
          <label className="login__input-label" htmlFor="password">Пароль</label>
          <input
            className="login__input"
            type="password"
            name="password"
            minLength="6"
            maxlength="30"
            required
            onChange={handlePasswordChange}
          />
          <span className="login__error-message">{passwordError}</span>
        </div>
        <button type="submit" className="login__button">Войти</button>
        <p className="login__span">Ещё не зарегистрированы?&nbsp;<Link to="/signup" className="login__link ">Регистрация</Link></p>
      </form>
    </div>
  );
}

export default Login;