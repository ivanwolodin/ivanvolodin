import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { Volume2, VolumeX } from 'lucide-react';
import sunIcon from '../../assets/icons/day.png';
import moonIcon from '../../assets/icons/night.png';
import './Header.css';

function Header({ soundEnabled, setSoundEnabled, theme, toggleTheme }) {

  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const toggleSound = () => {
    setSoundEnabled(prev => {
      const next = !prev;
      localStorage.setItem("soundEnabled", next ? "1" : "0");
      return next;
    });
  };

  const getLinkClass = (path) =>
    `header__link ${location.pathname === path ? 'header__link_active' : ''}`;

  return (
    <header className="header">
      <div className="header__top">

        {/* Левая часть */}
        <div className="header__info">
          <h1 className="header__title">{t("header.title")}</h1>
          <p className="header__subtitle">{t("header.position")}</p>
        </div>

        <div className="header__controls-wrapper">
          <div className="header__lang">
            <button
              className={`header__lang-btn ${i18n.language === "ru" ? "header__lang-btn_active" : ""}`}
              onClick={() => changeLanguage("ru")}
            >
              Ru
            </button>
            <span>/</span>
            <button
              className={`header__lang-btn ${i18n.language === "en" ? "header__lang-btn_active" : ""}`}
              onClick={() => changeLanguage("en")}
            >
              En
            </button>
          </div>

          <div className="header__icons">
            <button className="header__sound-btn" onClick={toggleSound} title="Sound on/off">
              {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
            <button className="header__theme-btn" onClick={toggleTheme} title="Toggle theme">
              {theme === "dark" ? (
                <img src={sunIcon} alt="Sun" width={20} height={20} />
              ) : (
                <img src={moonIcon} alt="Moon" width={20} height={20} />
              )}
            </button>
          </div>
        </div>


      </div>

      <nav className="header__nav">
        <Link to="/" className={getLinkClass('/')}>{t("header.nav.home")} </Link>
        <Link to="/about-me" className={getLinkClass('/about-me')}>{t("header.nav.about")}</Link>
        <Link to="/publications" className={getLinkClass('/publications')}>{t("header.nav.publications")}</Link>
        <Link to="/presentations" className={getLinkClass('/presentations')}>{t("header.nav.talks")}</Link>
        <Link to="/contact" className={getLinkClass('/contact')}>{t("header.nav.contacts")}</Link>
      </nav>
    </header>
  );
}

export default Header;
