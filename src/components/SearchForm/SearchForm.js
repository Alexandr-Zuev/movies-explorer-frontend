import React, { useState } from 'react';
import searchImg from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = ({ onSearch, onChecked, handleCheckboxChange, searchKeyword}) => {

    const [inputValue, setInputValue] = useState(searchKeyword !== null ? searchKeyword : '');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(inputValue);
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
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
                maxLength="30"
                placeholder=''
            />
            <div className="search-form__input-info">
                <div className="search-form__input-group">
                    <button className="search-form__button" type="submit">Найти</button>
                </div>
                <div className="search-form__checkbox-group">
                    <FilterCheckbox  isChecked={onChecked} onChange={handleCheckboxChange}/>
                    <p className="search-form__checkbox-text">Короткометражки</p>
                </div>
            </div>
        </form>
    );
};

export default SearchForm;