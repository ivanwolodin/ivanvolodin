import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, Cloud, BookOpen } from 'lucide-react';
import './Header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__top">
        <h1 className="header__title">Иван Володин</h1>
        <p className="header__subtitle">Разработчик · Исследователь · Физик</p>
      </div>

      <nav className="header__nav">
        <Link
          to="/"
          className={`header__link ${location.pathname === '/' ? 'header__link_active' : ''}`}
        >
          Главная
        </Link>
        <Link
          to="/publications"
          className={`header__link ${location.pathname === '/publications' ? 'header__link_active' : ''}`}
        >
          Публикации
        </Link>
        <Link
          to="/talks"
          className={`header__link ${location.pathname === '/talks' ? 'header__link_active' : ''}`}
        >
          Выступления
        </Link>
      </nav>

      <div className="header__icons">
        <a href="https://github.com/ivanwolodin1" target="_blank" rel="noreferrer" className="header__icon">
          <Github size={22} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="header__icon">
          <Linkedin size={22} />
        </a>
        <a href="mailto:ivanwolodin@proton.me" className="header__icon">
          <Mail size={22} />
        </a>
        <a href="https://cloud.yandex.ru/" target="_blank" rel="noreferrer" className="header__icon">
          <Cloud size={22} />
        </a>
        <a href="https://scholar.google.com" target="_blank" rel="noreferrer" className="header__icon">
          <BookOpen size={22} />
        </a>
      </div>
    </header>
  );
}

export default Header;
