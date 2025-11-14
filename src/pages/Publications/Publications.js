import React, { useState, useEffect, useRef } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

import './Publications.css';

function Publications({ soundEnabled }) {
  const [openId, setOpenId] = useState(null);
  const { t } = useTranslation();

  const hoverSound = useRef(new Audio("/sounds/click2.mp3"));
  const clickSound = useRef(new Audio("/sounds/click.mp3"));

  const playClick = () => {
    if (!soundEnabled) return;
    clickSound.current.currentTime = 0;
    clickSound.current.play();
  };

  const playHover = () => {
    if (!soundEnabled) return;
    hoverSound.current.currentTime = 0;
    hoverSound.current.play();
  };
  
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
    playClick();
    setOpenId(openId === id ? null : id);
    // Обновляем URL
    window.history.replaceState(null, '', `#${id}`);
  };

  const publications = t('publications.items', { returnObjects: true });


  return (
    <section className="publications">
      <h2 className="publications__title">{t('publications.title')}</h2>
      <ul className="publications__list">
        {publications.slice().reverse().map(pub => (
          <li
            key={pub.id}
            id={pub.id}
            className={`publications__item ${openId === pub.id ? 'publications__item_open' : ''}`}
            onClick={() => toggleOpen(pub.id)}
            onMouseEnter={playHover}
          >
            <div className="publications__header">
              <span className="publications__title-text">{pub.title}</span>
              {' — '}
              <span className="publications__journal">{pub.journal}</span>
            </div>

            {openId === pub.id && (
              <div className="publications__details">
                <p className="publications__description">{pub.description}</p>
                {pub.abstract && (
                  <p className="publications__abstract">
                    <strong>{t('publications.abstract')}: </strong>{pub.abstract}
                  </p>
                )}
                <div className="publications__links">
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="publications__doi"
                    >
                      DOI: {pub.doi}
                    </a>
                  )}
                  {pub.pdf && (
                    <a
                      href={pub.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="publications__pdf"
                      title="Скачать PDF"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaFilePdf size={18} />
                    </a>
                  )}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Publications;
