import React from 'react';
import linkImg from '../../images/link-img.svg';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title" >Портфолио</h3>
            <p className="portfolio__link">Статичный сайт<a className='portfolio__link-img' href="https://github.com/Alexandr-Zuev/russian-travel"><img src={linkImg} alt="Изображение ссылки" /></a></p>
            <div className="section__between-line"></div>
            <p className="portfolio__link">Адаптивный сайт<a className='portfolio__link-img' href="https://github.com/Alexandr-Zuev/mesto"><img src={linkImg} alt="Изображение ссылки" /></a></p>
            <div className="section__between-line"></div>
            <p className="portfolio__link">Одностраничное приложение<a className='portfolio__link-img' href="https://github.com/Alexandr-Zuev/mesto-react"><img  src={linkImg} alt="Изображение ссылки" /></a></p>
        </section>
    );
};
export default Portfolio;