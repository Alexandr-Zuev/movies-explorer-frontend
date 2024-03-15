import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';


const Profile = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); 
       
    };

    const handleLogout = () => {
      
        navigate('/signin');
    };

    return (
        <>
        <Header />
        <main className="profile">
            <form className="profile__form" onSubmit={handleSubmit}>
                <h1 className="profile__title">Привет, Виталий!</h1>
                <div className="profile__input-container">
                    <label className="profile__input-label">Имя</label>
                    <input
                        className="profile__input"
                        name="username"
                        type="text"
                        required
                        placeholder='Виталий'
                        minLength="2"
                        maxLength="30"
                    />
                </div>
                <div className="profile__input-container">
                    <label className="profile__input-label">E-mail</label>
                    <input
                        className="profile__input"
                        type="email"
                        name="email"
                        required
                        placeholder='pochta@yandex.ru'
                    />
                </div>
                <button type="submit" className="profile__submit-button">Редактировать</button>
            </form>
            <button onClick={handleLogout} className="profile__out-button">Выйти из аккаунта</button>
        </main>
        </>
    );
}

export default Profile;
