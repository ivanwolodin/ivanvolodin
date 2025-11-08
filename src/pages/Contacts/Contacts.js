import React from 'react';
import './Contacts.css';

function Contacts() {
  return (
    <section className="contacts">
      <div className="contacts__container">
        <h1 className="contacts__title">Контакты</h1>
        <ul className="contacts__list">
          <li className="contacts__item">
            <span className="contacts__label">Email:</span>{' '}
            <a className="contacts__link" href="mailto:ivanwolodin@proton.me">
              ivanwolodin@proton.me
            </a>
          </li>
          <li className="contacts__item">
            <span className="contacts__label">GitHub:</span>{' '}
            <a
              className="contacts__link"
              href="https://github.com/ivanwolodin1"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/ivanwolodin1
            </a>
          </li>
          <li className="contacts__item">
            <span className="contacts__label">LinkedIn:</span>{' '}
            <a
              className="contacts__link"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contacts;
