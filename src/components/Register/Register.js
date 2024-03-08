import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Register = () => {

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // логика валидации здесь
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    if (value.length < 2) {
      setNameError('Имя должно содержать не менее 2 символов');
    } else {
      setNameError('');
    }
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
    <main className="register">
      <form className="register__form" onSubmit={handleSubmit}>
      <Link to="/"><img className="register__logo" src={logo} alt="Логотип" /></Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <div className="register__input-container">
          <label className="register__input-label" htmlFor="username">Имя</label>
          <input
            className="register__input"
            name="username"
            type="text"
            required
            minLength="2"
            maxlength="30"
            onChange={handleNameChange}
          />
          <span className="register__error-message">{nameError}</span>
        </div>

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
        <button type="submit" className="register__button">Зарегистрироваться</button>
        <p className="register__span">Уже зарегистрированы?&nbsp;<Link to="/signin" className="register__link">Войти</Link></p>

      </form>
    </main>
  );
}

export default Register;