import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        © {new Date().getFullYear()} Иван Володин · Некоторые права защищены
      </p>
    </footer>
  );
}

export default Footer;
