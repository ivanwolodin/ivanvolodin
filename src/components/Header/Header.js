import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { Github, Linkedin, Mail, Cloud, BookOpen } from 'lucide-react';
import './Header.css';

function Header() {
  const location = useLocation();

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Функция для подсветки активного пункта
  const getLinkClass = (path) =>
    `header__link ${location.pathname === path ? 'header__link_active' : ''}`;

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__info">
          <h1 className="header__title">{t("header.title")}</h1>
          <p className="header__subtitle">{t("header.position")}</p>
        </div>
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
      </div>

      <nav className="header__nav">
        <Link to="/" className={getLinkClass('/')}>{t("header.nav.home")} </Link>
        <Link to="/about-me" className={getLinkClass('/about-me')}>{t("header.nav.about")}</Link>
        <Link to="/publications" className={getLinkClass('/publications')}>{t("header.nav.publications")}</Link>
        <Link to="/talk" className={getLinkClass('/talk')}>{t("header.nav.talks")}</Link>
        <Link to="/contact" className={getLinkClass('/contact')}>{t("header.nav.contacts")}</Link>
      </nav>

      {/* <div className="header__icons">
        <a href="https://github.com/ivanwolodin1" target="_blank" rel="noreferrer" className="header__icon" title="GitHub">
          <Github size={22} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="header__icon" title="LinkedIn">
          <Linkedin size={22} />
        </a>
        <a href="mailto:ivanwolodin@proton.me" className="header__icon" title="Email">
          <Mail size={22} />
        </a>
        <a href="https://cloud.yandex.ru/" target="_blank" rel="noreferrer" className="header__icon" title="Yandex Cloud">
          <Cloud size={22} />
        </a>
        <a href="https://scholar.google.com" target="_blank" rel="noreferrer" className="header__icon" title="Google Scholar">
          <BookOpen size={22} />
        </a>
      </div> */}
    </header>
  );
}

export default Header;
