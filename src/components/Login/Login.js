import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import * as auth from '../../utils/auth.js';

const Login = ({ handleLogin }) => {
  const [formEmailValid, setFormEmailValid] = useState(false);
  const [formPasswordValid, setFormPasswordValid] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: ''
  });
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(formEmailValid && formPasswordValid);
  }, [formEmailValid, formPasswordValid]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setFormErrors(prevErrors => ({
          ...prevErrors,
          email: 'Пожалуйста, введите корректный email'
        }));
        setFormEmailValid(false);
      } else {
        setFormErrors(prevErrors => ({
          ...prevErrors,
          email: ''
        }));
        setFormEmailValid(true);
      }
    } else if (name === 'password') {
      if (value.length < 6) {
        setFormErrors(prevErrors => ({
          ...prevErrors,
          password: 'Пароль должен содержать не менее 6 символов'
        }));
        setFormPasswordValid(false);
      } else {
        setFormErrors(prevErrors => ({
          ...prevErrors,
          password: ''
        }));
        setFormPasswordValid(true);
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    auth.signIn(formData.email, formData.password)
      .then(res => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setFormData({
            email: '',
            password: ''
          });
          handleLogin();
          navigate('/movies');
        } else {
          throw new Error(res.message);
        }
      })
      .catch(error => {
        setLoginError(error.message || 'Ошибка сервера. Пожалуйста, попробуйте еще раз.');
        console.error('Ошибка входа:', error);
      });
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
            onChange={handleChange}
            value={formData.email}
            placeholder=''
          />
          <span className="login__error-message">{formErrors.email}</span>
        </div>

        <div className="login__input-container">
          <label className="login__input-label" htmlFor="password">Пароль</label>
          <input
            className="login__input"
            type="password"
            name="password"
            minLength="6"
            required
            onChange={handleChange}
            value={formData.password}
            placeholder=''
          />
          <span className="login__error-message">{formErrors.password}</span>
        </div>
        <div className='login__submit-conteiner'>
          {loginError && <span className="login__error-message">{loginError}</span>}
          <button type="submit" className={`register__button ${isFormValid ? '' : 'register__button--disabled'}`} disabled={!isFormValid}>Войти</button>
          <p className="login__span">Ещё не зарегистрированы?&nbsp;<Link to="/signup" className="login__link ">Регистрация</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Login;