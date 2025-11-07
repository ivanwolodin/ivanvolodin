import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home">
      <h2 className="home__title">Добро пожаловать</h2>
      <p className="home__text">
        Я исследую физические явления и создаю программные решения для моделирования и анализа данных. 
        Мои интересы включают вычислительную гидродинамику, устойчивость тонких плёнок и научное программирование.
      </p>
      <p className="home__text">
        На этом сайте вы можете найти мои публикации, выступления и проекты.
      </p>
    </section>
  );
}

export default Home;
