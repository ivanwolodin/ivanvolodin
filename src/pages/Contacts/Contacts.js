import React from 'react';
import { useTranslation } from "react-i18next";
import './Contacts.css';
import instituteImage from '../../images/icmm.png'; // Путь к фотографии института

function Contacts() {
  const { t } = useTranslation();

  return (
    <section className="contacts">
      <div className="contacts__container">
        <h1 className="contacts__title">{t("contacts")}</h1>
        <div className="contacts__section">
          <h2 className="contacts__subtitle">{t("workplace_title")}</h2>
            <p className="contacts__workplace">
              {t("workplace_address")}
            </p>
            <div className="contacts__sub-links">
              <a className="contacts__link" href="https://www.icmm.ru" target="_blank" rel="noopener noreferrer">{t("workplace_name")}</a>
            </div>
            <div className="contacts__sub-links">
              <a className="contacts__link" href="https://www.icmm.ru/ob-institute/struktura-instituta/nauchnye-podrazdeleniya/1209-laboratoriya-podzemnoj-utilizatsii-ugleroda" target="_blank" rel="noopener noreferrer">{t("workplace_lab_page")}</a>
            </div>
            <div className="contacts__sub-links">
              <a className="contacts__link" href="https://www.icmm.ru/cb-profile/340-volodin-i" target="_blank" rel="noopener noreferrer">{t("workplace_personal_page")}</a>
            </div>
            <div className="contacts__image-container">
              <img className="contacts__image" src={instituteImage} alt="ИМСС УрО РАН" />
            </div>
          </div>
          <div className="contacts__section">
          <h2 className="contacts__subtitle">{t("references")}</h2>
          <ul className="contacts__list">
            <li className="contacts__item">
              <span className="contacts__label">{t("alabuzhev_info")}</span> 
              <div className="contacts__sub-links">
                <a className="contacts__link" href="mailto:alabuzhev@icmm.ru">Email</a>
                {' | '}
                <a className="contacts__link" href="https://www.icmm.ru/cb-profile/alabuzhev" target="_blank" rel="noopener noreferrer">{t("alabuzhev_page")}</a>
              </div>
            </li>
            <li className="contacts__item">
              <span className="contacts__label">{t("goldobin_info")}</span> 
              <div className="contacts__sub-links">
                <a className="contacts__link" href="mailto:goldobin@icmm.ru">Email</a>
                {' | '}
                <a className="contacts__link" href="http://www2.icmm.ru/~goldobin/" target="_blank" rel="noopener noreferrer">{t("goldobin_page")}</a>
              </div>
            </li>
            <li className="contacts__item">
              <span className="contacts__label">{t("demin_info")}</span> 
              <div className="contacts__sub-links">
                <a className="contacts__link" href="mailto:dеmin@psu.ru">Email</a>
                {' | '}
                <a className="contacts__link" href="http://www.theorphys.psu.ru/?page_id=226" target="_blank" rel="noopener noreferrer">{t("demin_page")}</a>
              </div>
            </li>
          </ul>
        </div>
          <div className="contacts__section">
          <h2 className="contacts__subtitle">{t("contact_info")}</h2>
          <ul className="contacts__list">
            <li className="contacts__item">
              <span className="contacts__label">Email:</span>{' '}
              <a className="contacts__link" href="mailto:ivanwolodin@proton.me">
                ivanwolodin@proton.me
              </a>
            </li>
            <li className="contacts__item">
              <span className="contacts__label">Telegram:</span>{' '}
              <a className="contacts__link" href="https://t.me/ivanwolodin7" target="_blank" rel="noopener noreferrer">
                @ivanwolodin7
              </a>
            </li>
          </ul>
        </div>
        <div className="contacts__section">
          <h2 className="contacts__subtitle">{t("social_links")}</h2>
          <ul className="contacts__list">
            <li className="contacts__item">
              <span className="contacts__label">ORCID:</span>{' '}
              <a className="contacts__link" href="https://orcid.org/0000-0002-4315-956X" target="_blank" rel="noopener noreferrer">
                0000-0002-4315-956X
              </a>
            </li>
            <li className="contacts__item">
              <span className="contacts__label">Google Scholar:</span>{' '}
              <a className="contacts__link" href="https://scholar.google.com/citations?hl=ru&user=l_hyd9EAAAAJ" target="_blank" rel="noopener noreferrer">
                Scholar Profile
              </a>
            </li>
            <li className="contacts__item">
              <span className="contacts__label">ResearchGate:</span>{' '}
              <a className="contacts__link" href="https://www.researchgate.net/profile/Ivan-Volodin-3?ev=hdr_xprf" target="_blank" rel="noopener noreferrer">
                ResearchGate Profile
              </a>
            </li>
            <li className="contacts__item">
              <span className="contacts__label">GitHub:</span>{' '}
              <a className="contacts__link" href="https://github.com/ivanwolodin1" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li className="contacts__item">
              <span className="contacts__label">Lichess:</span>{' '}
              <a className="contacts__link" href="https://lichess.org/@/ivanwolodin" target="_blank" rel="noopener noreferrer">
                Lichess Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
