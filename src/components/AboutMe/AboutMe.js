import React from 'react';
import linkImg from '../../images/link-img.svg';

function AboutMe() {
    return (
        <section className="about-me">
            <h3 className="section__title">Студент</h3>
            <div className="section__line"></div>
            <div className="about-me__columns">
                <div className="about-me__text">
                    <h2 className="about-me__title">Александр</h2>
                    <p className="about-me__info">Веб-разработчик, 33 года</p>
                    <p className="about-me__description">
                        Я родился и живу в Санкт-Петербурге, закончил авиационный факультет ВГТУ.  У меня есть сын.
                        Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                        С 2012 года работал в разных компаниях инженером-конструктором.
                    </p>
                    <a className="about-me__contact" href="https://github.com/Alexandr-Zuev">GitHub</a>
                </div>
                <img className="about-me__photo" src="https://avatars.githubusercontent.com/u/127013890?v=4" alt="Фото" />
            </div>
            <h3 className="about-me__portfolio-title" >Портфолио</h3>
            <p className="about-me__portfolio-link">Статичный сайт<a className='about-me__portfolio-link-img' href="https://github.com/Alexandr-Zuev/russian-travel"><img src={linkImg} alt="Изображение ссылки" /></a></p>
            <div className="section__between-line"></div>
            <p className="about-me__portfolio-link">Адаптивный сайт<a className='about-me__portfolio-link-img' href="https://github.com/Alexandr-Zuev/mesto"><img src={linkImg} alt="Изображение ссылки" /></a></p>
            <div className="section__between-line"></div>
            <p className="about-me__portfolio-link">Одностраничное приложение<a className='about-me__portfolio-link-img' href="https://github.com/Alexandr-Zuev/mesto-react"><img  src={linkImg} alt="Изображение ссылки" /></a></p>
        </section>
    );
};
export default AboutMe;