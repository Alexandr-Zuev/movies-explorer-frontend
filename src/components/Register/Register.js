import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import * as auth from '../../utils/auth.js';

const Register = ({ handleLogin }) => {
  const navigate = useNavigate();
  
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [formNameValid, setFormNameValid] = useState(false);
  const [formEmailValid, setFormEmailValid] = useState(false);
  const [formPasswordValid, setFormPasswordValid] = useState(false);
  const [registrationError, setRegistrationError] = useState('');

  useEffect(() => {
    setIsFormValid(
      formNameValid &&
      formEmailValid &&
      formPasswordValid
    );
  }, [formNameValid, formEmailValid, formPasswordValid]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    });

    if (name === 'name') {
      if (value.length < 2) {
        setNameError('Имя должно содержать не менее 2 символов');
        setFormNameValid(false);
      } else {
        setNameError('');
        setFormNameValid(true);
      }
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setEmailError('Пожалуйста, введите корректный email');
        setFormEmailValid(false);
      } else {
        setEmailError('');
        setFormEmailValid(true);
      }
    } else if (name === 'password') {
      if (value.length < 6) {
        setPasswordError('Пароль должен содержать не менее 6 символов');
        setFormPasswordValid(false);
      } else {
        setPasswordError('');
        setFormPasswordValid(true);
      }
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
        const signUpResponse = await auth.signUp(formValue.name, formValue.email, formValue.password);
        console.log("Sign up response:", signUpResponse);

        if (signUpResponse) {
            if (signUpResponse._id) {
                setFormValue({
                    name: '',
                    email: '',
                    password: ''
                });
                console.log('Регистрация успешна');

                const signInResponse = await auth.signIn(formValue.email, formValue.password);
                console.log("Sign in response:", signInResponse);

                if (signInResponse && signInResponse.token) {
                    handleLogin();
                    navigate('/movies');
                    console.log('Вход успешен');
                } else {
                    throw new Error('Ошибка регистрации');
                }
            } else {
                throw new Error(signUpResponse.message);
            }
        } else {
            throw new Error('Ошибка регистрации');
        }
    } catch (error) {
        setRegistrationError(error.message || 'Ошибка сервера. Пожалуйста, попробуйте еще раз.');
        console.error('Ошибка сервера:', error);
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
            name="name"
            type="text"
            required
            minLength="2"
            maxLength="30"
            onChange={handleChange}
            value={formValue.name}
            placeholder=''
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
            onChange={handleChange}
            value={formValue.email}
            placeholder=''
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
            minLength="6"
            maxLength="30"
            onChange={handleChange}
            value={formValue.password}
            placeholder=''
          />
          <span className="register__error-message">{passwordError}</span>
        </div>
        <div className='register__submit-conteiner'>
          {registrationError && <span className="register__error-message">{registrationError}</span>}
          <button type="submit" className={`register__button ${isFormValid ? '' : 'register__button--disabled'}`} disabled={!isFormValid}>Зарегистрироваться</button>
          <p className="register__span">Уже зарегистрированы?&nbsp;<Link to="/signin" className="register__link">Войти</Link></p>
        </div>
      </form>
    </main>
  );
}

export default Register;
