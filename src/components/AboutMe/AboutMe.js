import React from 'react';

const AboutMe = () => {
    return (
        <section className="about-me">
            <h2 className="section-title">Студент</h2>
            <div className="about-me__columns">
                <div className="about-me__text">
                    <h3 className="about-me__title">Александр</h3>
                    <p className="about-me__info">Веб-разработчик, 33 года</p>
                    <p className="about-me__description">
                        Я родился и живу в Санкт-Петербурге, закончил авиационный факультет ВГТУ.  У меня есть сын.
                        Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                        С 2012 года работал в разных компаниях инженером-конструктором.
                    </p>
                    <a className="about-me__contact" target="_blank" rel="noopener noreferrer" href="https://github.com/Alexandr-Zuev">Github</a>
                </div>
                <img className="about-me__photo" src="https://avatars.githubusercontent.com/u/127013890?v=4" alt="Фото" />
            </div>
        </section>
    );
};
export default AboutMe;