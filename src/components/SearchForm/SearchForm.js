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

            <div className="search-form__input-info">
                <input
                    className="search-form__input"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button className="search-form__button" type="submit">Найти</button>
                <div className="search-form__line"></div>
                <FilterCheckbox />
                <p className="search-form__text-checkbox">Короткометражки</p>
            </div>
        </form>
    );
};

export default SearchForm;