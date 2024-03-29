import React, { useState } from 'react';
import searchImg from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <form className="search-form">
            <div className="search-form__input-area">
                {inputValue === '' ? (
                    <>
                        <img src={searchImg} alt="Логотип" className="search-form__icon" />
                        <p className="search-form__title">Фильм</p>
                    </>
                ) : null}
            </div>
            <input
                className="search-form__input"
                required
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                minLength="2"
                maxlength="30"
                placeholder=''
            />
            <div className="search-form__input-info">
                <div className="search-form__input-group">
                    <button className="search-form__button" type="submit">Найти</button>
                </div>
                <div className="search-form__checkbox-group">
                    <FilterCheckbox />
                    <p className="search-form__checkbox-text">Короткометражки</p>
                </div>
            </div>
        </form>
    );
};

export default SearchForm;