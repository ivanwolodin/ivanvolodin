import React, { useState, useRef } from 'react';
import { useTranslation } from "react-i18next";
import './Talks.css';

function Talks({ soundEnabled }) {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState(null);

  const hoverSound = useRef(new Audio("/sounds/click2.mp3"));
  const clickSound = useRef(new Audio("/sounds/click.mp3"));
  
  const playClick = () => {
    if (!soundEnabled) return;
    clickSound.current.currentTime = 0;
    clickSound.current.play();
  };

  const toggleOpen = (id) => {
    playClick();
    setOpenId(openId === id ? null : id);
  };

  const playHover = () => {
    if (!soundEnabled) return;
    hoverSound.current.currentTime = 0;
    hoverSound.current.play();
  };

  const talks = t('talks.items', { returnObjects: true });

  return (
    <section className="talks">
      <h2 className="talks__title">{t('talks.title')}</h2>
      <ul className="talks__list">
        {talks.slice().reverse().map(talk => (
          <li
            key={talk.id}
            className={`talks__item ${openId === talk.id ? 'talks__item_open' : ''}`}
            onClick={() => toggleOpen(talk.id)}
            onMouseEnter={() => playHover()}
          >
            <div className="talks__header">
              <span className="talks__title-text">{talk.title}</span>
              {'  '}
              <span className="talks__place">{talk.place}</span>
            </div>

            {openId === talk.id && (
              <div className="talks__details">
                {talk.description && (
                  <p className="talks__description">{talk.description}</p>
                )}

                {talk.img && (
                  <img
                    src={talk.img}
                    alt={talk.title}
                    className="talks__image"
                    onClick={(e) => e.stopPropagation()}
                  />
                )}

                {talk.presentations?.length > 0 && (
                  <ul className="talks__presentations">
                    {talk.presentations.map((p, index) => (
                      <li key={index}>
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="talks__presentation-link"
                        >
                          {p.title || t('talks.presentationLink')}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {talk.funfact && (
                  <p className="talks__funfact">
                    <strong>{t('talks.funfactLabel')}: </strong>{talk.funfact}
                  </p>
                )}

                {talk.conferenceLink && (
                  <div className="talks__conference">
                    <a
                      href={talk.conferenceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="talks__conference-link talks__conference-link_bottom"
                    >
                      🌐 {talk.conferenceLink || 'Сайт конференции'}
                    </a>
                  </div>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Talks;
