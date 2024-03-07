import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__text">
                <p className="footer__date">© 2024</p>
                <div className="footer__links">
                    <a href="https://practicum.yandex.ru" className="footer__link">Яндекс.Практикум</a>
                    <a href="https://github.com/Alexandr-Zuev" className="footer__link">Github</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;