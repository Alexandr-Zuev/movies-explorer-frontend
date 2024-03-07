import React from 'react'
import logo from '../../images/promo-logo.svg';

const Promo = () => {

  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <img src={logo} alt="Картинка" className="promo__logo" />
    </section>
  );
};

export default Promo;