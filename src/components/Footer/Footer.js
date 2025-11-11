import React from 'react';

import { useTranslation } from "react-i18next";
import { Github, Cloud, Bot } from 'lucide-react';
import { FaReact } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__gradient" />

      <div className="footer__content">
        <div className="footer__icons">
          <a
            href="https://github.com/ivanwolodin1"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className='footer__icon'
          >
            <Github size={22} />
          </a>
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noreferrer"
            title="React"
            className="footer__icon footer__icon-react"
          >
            <FaReact size={22} />
          </a>
          <a
            href="https://chat.openai.com/"
            target="_blank"
            rel="noreferrer"
            title="ChatGPT"
            className='footer__icon'
          >
            <Bot size={22} />
          </a>
          <a
            href="https://cloud.yandex.ru/"
            target="_blank"
            rel="noreferrer"
            title="Yandex Cloud"
            className='footer__icon'
          >
            <Cloud size={22} />
          </a>
        </div>
      </div>

      <p className="footer__content">
        © {year} {t('footer.text')}
      </p>
    </footer>
  );
}

export default Footer;
