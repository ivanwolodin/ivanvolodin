import React from 'react';
import './Talks.css';

function Talks() {
  return (
    <section className="talks">
      <h2 className="talks__title">Выступления</h2>
      <ul className="talks__list">
        <li className="talks__item">"Турбулентность и плёнки" — конференция в Перми, 2023</li>
        <li className="talks__item">"Модели истечения жидкости" — семинар в Москве, 2024</li>
      </ul>
    </section>
  );
}

export default Talks;
