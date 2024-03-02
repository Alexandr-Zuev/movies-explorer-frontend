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
    <div className="register">
      <form className="register__form" onSubmit={handleSubmit}>
        <img className="register__logo" src={logo} alt="Логотип" />
        <h2 className="register__title">Рады видеть!</h2>

        <div className="register__input-container">
          <label className="register__input-label" htmlFor="email">Email</label>
          <input
            className="register__input"
            type="email"
            name="email"
            required
            onChange={handleEmailChange}
          />
          <span className="register__error-message">{emailError}</span>
        </div>

        <div className="register__input-container">
          <label className="register__input-label" htmlFor="password">Пароль</label>
          <input
            className="register__input"
            type="password"
            name="password"
            required
            onChange={handlePasswordChange}
          />
          <span className="register__error-message">{passwordError}</span>
        </div>
        <button type="submit" className="register__button">Войти</button>
        <p className="register__span">Ещё не зарегистрированы? <Link to="/signup" className="login__link">Регистрация</Link></p>
      </form>
    </div>
  );
}

export default Login;