import React from 'react';
import Header from '../Header/Header';

const Profile = () => {

    return (

        <div className="profile">
            <Header />
            <form className="profile__form" >
                <h2 className="profile__title">Привет, Виталий!</h2>
                <div className="profile__input-container">
                    <label className="profile__input-label" htmlFor="username">Имя</label>
                    <input
                        className="profile__input"
                        name="username"
                        type="text"
                        required
                    />
                </div>
                <div className="profile__input-container">
                    <label className="profile__input-label" htmlFor="email">Email</label>
                    <input
                        className="profile__input"
                        type="email"
                        name="email"
                        required
                    />
                </div>
                <button type="submit" className="profile__submit-button">Редактировать</button>
                <button type="submit" className="profile__out-button">Выйти из аккаунта</button>
            </form>
        </div>
    );
}

export default Profile;