import React from 'react';
import { useTranslation } from "react-i18next";
import './Footer.css';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <p className="footer__text">
        {new Date().getFullYear()} {t('footer.text')}
      </p>
    </footer>
  );
}

export default Footer;
