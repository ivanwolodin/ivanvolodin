import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import './Talks.css';

function Talks({ }) {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState(null);

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
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
          >
            <div className="talks__header">
              <span className="talks__title-text">{talk.title}</span>
              {' — '}
              <span className="talks__place">{talk.place}</span>

              {/* {talk.conferenceLink && (
                <a
                  href={talk.conferenceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="talks__conference-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  🌐
                </a>
              )} */}
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
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Talks;
