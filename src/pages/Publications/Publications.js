import React from 'react';
import './Publications.css';

function Publications() {
  return (
    <section className="publications">
      <h2 className="publications__title">Публикации</h2>
      <ul className="publications__list">
        <li className="publications__item">
          Володин И. — "Гидродинамическая устойчивость тонких плёнок", Журнал Физики Жидкости, 2024
        </li>
        <li className="publications__item">
          Володин И. — "Моделирование турбулентности в тонких слоях", Теоретическая Гидродинамика, 2023
        </li>
      </ul>
    </section>
  );
}

export default Publications;
