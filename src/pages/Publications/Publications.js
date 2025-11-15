import React, { useState, useEffect, useRef } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

import elibraryIcon from '../../assets/icons/elibrary.png';
import orcidIcon from '../../assets/icons/orcid.png';
import researchGateIcon from '../../assets/icons/research_gate.png';
import googleScholarIcon from '../../assets/icons/google_scholar.png'

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
      <div className="publications__more">
        <p className="publications__more-text">
          {t('publications.after_selected')}
        </p>
        <ul className="publications__more-list">
          <li className="publications__more-item">
            <a 
              href="https://orcid.org/0000-0002-4315-956X" 
              target="_blank" 
              rel="noopener noreferrer"
              className="publications__more-link"
            >
              <img src={orcidIcon} alt="ORCID" className="publications__more-icon"/>
              ORCID
            </a>
          </li>
          <li className="publications__more-item">
            <a 
              href="https://www.researchgate.net/profile/Ivan-Volodin-3?ev=hdr_xprf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="publications__more-link"
            >
              <img src={researchGateIcon} alt="ResearchGate" className="publications__more-icon"/>
              ResearchGate
            </a>
          </li>
          <li className="publications__more-item">
            <a 
              href="https://scholar.google.com/citations?hl=ru&user=l_hyd9EAAAAJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="publications__more-link"
            >
              <img src={googleScholarIcon} alt="Google Scholar" className="publications__more-icon"/>
              Google Scholar
            </a>
          </li>
          <li className="publications__more-item">
            <a 
              href="https://www.elibrary.ru/author_items.asp?authorid=1052825&pubrole=100&show_refs=1&pubcat=risc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="publications__more-link"
            >
              <img src={elibraryIcon} alt="eLibrary" className="publications__more-icon"/>
              eLibrary [In Russian]
            </a>
          </li>
        </ul>
      </div>

    </section>
  );
}

export default Publications;
