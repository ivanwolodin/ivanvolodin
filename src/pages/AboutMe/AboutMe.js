import React from 'react';
import './AboutMe.css';
import ivPhoto from '../../images/AboutMe/IV.jpeg';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <div className="about-me__image-wrapper">
          <img
            src={ivPhoto}
            alt="Иван Володин"
            className="about-me__image"
          />
        </div>
        <div className="about-me__content">
          <h1 className="about-me__title">Обо мне</h1>
          <p className="about-me__text">
            Привет! Меня зовут Иван Володин. Я разработчик, интересующийся веб-технологиями, автоматизацией и умными системами.
          </p>
          <p className="about-me__text">
            Этот сайт — мой персональный проект, где я делюсь своими публикациями, выступлениями и идеями.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
