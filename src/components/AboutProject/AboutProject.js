import React from 'react'

const AboutProject = () => {
  return (
    <section className="about-project">
      <h2 className="section__title">О проекте</h2>

      <div className="about-project__columns">
        <div className="about-project__column">
          <h3 className='about-project__column-title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__column-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__column">
          <h3 className='about-project__column-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__column-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__scale">
        <div className="about-project__scale-back">
          <div className="about-project__scale-back-title">1 неделя</div>
          <span className="about-project__label-scale">Back-end</span>
        </div>
        <div className="about-project__scale-front">
          <div className="about-project__scale-front-title">4 недели</div>
          <span className="about-project__label-scale">Front-end</span>
        </div>
      </div>
    </section >
  );
};

export default AboutProject;