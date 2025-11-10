import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, Cloud, BookOpen } from 'lucide-react';
import './Header.css';

function Header() {
  const location = useLocation();

  // Функция для подсветки активного пункта
  const getLinkClass = (path) =>
    `header__link ${location.pathname === path ? 'header__link_active' : ''}`;

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__info">
          <h1 className="header__title">Иван Володин</h1>
          <p className="header__subtitle">Младшний научный сотрудник (ИМСС УрО РАН)</p>
        </div>

        {/* 🔤 Переключатель языка */}
        <div className="header__lang">
          <button className="header__lang-btn header__lang-btn_active">Ru</button>
          <span>/</span>
          <button className="header__lang-btn">En</button>
        </div>
      </div>

      <nav className="header__nav">
        <Link to="/" className={getLinkClass('/')}>Главная</Link>
        <Link to="/about-me" className={getLinkClass('/about-me')}>Обо мне</Link>
        <Link to="/publications" className={getLinkClass('/publications')}>Публикации</Link>
        <Link to="/talk" className={getLinkClass('/talk')}>Выступления</Link>
        <Link to="/contact" className={getLinkClass('/contact')}>Контакты</Link>
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
