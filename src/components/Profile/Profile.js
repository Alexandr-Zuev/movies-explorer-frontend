import React, { useContext, useState, useEffect } from 'react';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import { api } from '../../utils/MainApi.js';
import * as auth from '../../utils/auth.js';

const Profile = ({ loggedIn, loggedOut }) => {
    const currentUser = useContext(CurrentUserContext);
    const [profileTitle, setprofileTitle] = useState(currentUser.name);
    const [profileError, setProfileError] = useState('');
    const [formData, setFormData] = useState({
        name: currentUser.name,
        email: currentUser.email
    });
    const [isFormValid, setIsFormValid] = useState(true);
    const [formNameValid, setFormNameValid] = useState(true);
    const [formEmailValid, setFormEmailValid] = useState(true);

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: ''
    });

    useEffect(() => {
        setIsFormValid(formNameValid && formEmailValid);
    }, [formNameValid, formEmailValid]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.editProfile(formData);
            setprofileTitle(res.name);
            setProfileError('');
        } catch (error) {
            setProfileError(error.message || 'Ошибка сервера. Пожалуйста, попробуйте еще раз.');
            console.error('Ошибка входа:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === 'name') {
            if (value.length >= 2) {
                setFormNameValid(true);
                setFormErrors({
                    ...formErrors,
                    name: ''
                });
            } else {
                setFormNameValid(false);
                setFormErrors({
                    ...formErrors,
                    name: 'Имя должно содержать не менее 2 символов'
                });
            }
        } else if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(value)) {
                setFormEmailValid(true);
                setFormErrors({
                    ...formErrors,
                    email: ''
                });
            } else {
                setFormEmailValid(false);
                setFormErrors({
                    ...formErrors,
                    email: 'Пожалуйста, введите корректный email'
                });
            }
        }
    };

    const handleLogout = () => {
        auth.signOut();
        localStorage.clear();
        loggedOut();
        console.log('Пользователь вышел');
    };


    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className="profile">
                <form className="profile__form" onSubmit={handleSubmit}>
                    <h1 className="profile__title">Привет, {profileTitle}!</h1>
                    <div className="profile__input-container">
                        <label className="profile__input-label">Имя</label>
                        <input
                            className="profile__input"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder='Имя'
                            minLength="2"
                            maxLength="30"
                        />

                    </div>
                    <span className="profile__error-message">{formErrors.name}</span>
                    <div className="profile__input-container">
                        <label className="profile__input-label">E-mail</label>
                        <input
                            className="profile__input"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder='pochta@yandex.ru'
                        />

                    </div>
                    <span className="profile__error-message">{formErrors.email}</span>
                    <div className='profile__submit-conteiner'>
                        {profileError && <span className="login__error-message">{profileError}</span>}
                        <button type="submit" className={`profile__submit-button ${isFormValid ? '' : 'profile__submit-button--disabled'}`} disabled={!isFormValid}>Редактировать</button>
                    </div>
                </form>
                <button onClick={handleLogout} className="profile__out-button">Выйти из аккаунта</button>
            </main>
        </>
    );
}

export default Profile;