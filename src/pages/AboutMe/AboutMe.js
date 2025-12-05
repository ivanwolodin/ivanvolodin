import React from "react";
import { useTranslation } from "react-i18next";

import ivPhoto from "../../images/AboutMe/IV.jpeg";
import pdfIcon from "../../assets/icons/pdf.png"; 
import "./AboutMe.css";

function AboutMe() {
  const { t } = useTranslation();

  return (
    <section className="about-me">
      <div className="about-me__container">
        <div className="about-me__header">
            <div className="about-me__image-wrapper">
              <img
                src={ivPhoto}
                alt="Иван Володин"
                className="about-me__image"
              />
            </div>
            <div className="about-me__content">
              <div className="about-me__main">
                <h1 className="about-me__title">{t("about_me.title")}</h1>
                <p className="about-me__text">
                  {t("about_me.intro")}
                </p>
                <div className="about-me__cv-wrapper">
                  <a
                    href="https://storage.yandexcloud.net/volodin-cv/CV%20Ivan%20Volodin.pdf"
                    className="about-me__cv-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={pdfIcon} alt="PDF Icon" className="about-me__cv-icon" />
                  </a>
                  <span className="about-me__cv-text">CV</span>
                </div>
              </div>
            </div>
          </div>    
          <div className="about-me__words">
            <p className="about-me__text">
              {t("about_me.research")} {" "}
               <a
                href="https://numpy.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-me__link"
              >
                NumPy
              </a>
              , {" "}
              <a
                href="https://scipy.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-me__link"
              >
                SciPy
              </a>
              , {" "}
              <a
                href="https://py-pde.readthedocs.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-me__link"
              >
                py-pde
              </a>
              .
            </p>
            <p className="about-me__text">
              {t("about_me.phd")} {" "}            
            </p>
            <p className="about-me__text">
              {t("about_me.challenge")}
            </p>
            <p className="about-me__text">
              {t("about_me.software")}
            </p>
            <p className="about-me__text">
              {t("about_me.chess")}
            </p>
            <p className="about-me__text">
              {t("about_me.website")}
            </p>
          </div>
      </div>
    </section>
  );
}
export default AboutMe;
