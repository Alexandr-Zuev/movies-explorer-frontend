import React from 'react'

const AboutProject = () => {
  return (
    <section className="about-project">
      <h3 className="section__title">О проекте</h3>
      <div className="section__line"></div>
      <div className="about-project__columns">
        <div className="about-project__column">
          <h4 className='about-project__column-title'>Дипломный проект включал 5 этапов:</h4>
          <p className='about-project__column-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__column">
          <h4 className='about-project__column-title'>На выполнение диплома ушло 5 недель</h4>
          <p className='about-project__column-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__scale">
        <div className="about-project__scale-back">
          <div class="about-project__title-back">1 неделя</div>
          <span className="about-project__label-scale">Back-end</span>
        </div>
        <div className="about-project__scale-front">
          <div class="about-project__title-front">4 недели</div>
          <span className="about-project__label-scale">Front-end</span>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;