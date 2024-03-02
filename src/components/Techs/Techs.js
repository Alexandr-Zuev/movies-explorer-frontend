import React from 'react';

const Techs = () => {
    return (
    <section className="techs">
      <h3 className="section__title">Технологии</h3>
      <div className="section__line"></div>
      <h2 className="techs__title">7 технологий</h2>
      <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="techs__list">
        <div className="techs__list-item">HTML</div>
        <div className="techs__list-item">CSS</div>
        <div className="techs__list-item">JS</div>
        <div className="techs__list-item">React</div>
        <div className="techs__list-item">Git</div>
        <div className="techs__list-item">Express</div>
        <div className="techs__list-item">MongoDB</div>
      </div>
    </section>
  );
};

export default Techs;