import React from 'react';
import linkImg from '../../images/link-img.svg';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Alexandr-Zuev/russian-travel">
                        Статичный сайт <img className="portfolio__link-img" src={linkImg} alt="Изображение ссылки" /></a>
                </li>
                <li className="portfolio__item">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Alexandr-Zuev/mesto">
                        Адаптивный сайт <img className="portfolio__link-img" src={linkImg} alt="Изображение ссылки" /></a>
                </li>
                <li className="portfolio__item">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Alexandr-Zuev/mesto-react">
                        Одностраничное приложение <img className="portfolio__link-img" src={linkImg} alt="Изображение ссылки" /></a>
                </li>
            </ul>
        </section>
    );
};

export default Portfolio;