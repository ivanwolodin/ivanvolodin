import React, { useState, useEffect } from 'react';
import './Publications.css';

const publicationsData = [
  {
    id: 'pub1',
    title: 'Гидродинамическая устойчивость тонких плёнок',
    journal: 'Журнал Физики Жидкости, 2024',
    description: 'В этой статье исследуется устойчивость тонких плёнок жидкости на основе вычислительных моделей. Приводятся результаты численного моделирования и экспериментальных наблюдений.'
  },
  {
    id: 'pub2',
    title: 'Моделирование турбулентности в тонких слоях',
    journal: 'Теоретическая Гидродинамика, 2023',
    description: 'Статья посвящена моделированию турбулентных процессов в тонких жидкостных слоях с использованием методов CFD. Обсуждаются влияние вязкости и граничных условий на стабильность течений.'
  }
];

function Publications() {
  const [openId, setOpenId] = useState(null);

  // Проверка якоря при заходе на страницу
  useEffect(() => {
    const hash = window.location.hash.slice(1); // убираем #
    if (hash) {
      setOpenId(hash);
      // Прокрутка к элементу
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
    // Обновляем URL
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <section className="publications">
      <h2 className="publications__title">Публикации</h2>
      <ul className="publications__list">
        {publicationsData.map(pub => (
          <li
            key={pub.id}
            id={pub.id}
            className={`publications__item ${openId === pub.id ? 'publications__item_open' : ''}`}
            onClick={() => toggleOpen(pub.id)}
          >
            <div className="publications__header">
              {pub.title} — <span className="publications__journal">{pub.journal}</span>
            </div>
            {openId === pub.id && (
              <div className="publications__description">
                {pub.description}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Publications;
