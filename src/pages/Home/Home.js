import React from 'react';

import { useTranslation } from "react-i18next";

import athens_school from "../../images/Home/athens_school.png";
import macbook from "../../images/Home/macbook.png";
import smoking from "../../images/Home/smoking.png";
import space from "../../images/Home/space.png";


import './Home.css';

function Home() {
  const { t } = useTranslation();
  return (
    <section className="home">
      <h1 className="home__title">{t("home.title")}</h1>
      <p className="home__text">{t("home.privilege")}</p>
      <div className="home__image-container">
        <img 
          src={athens_school}
          alt="Абстракция: границы познания" 
          className="home__image" 
        />
      </div>
      <p className="home__text">{t("home.theor_phys")}</p>
      <div className="home__image-container">
        <img 
          src={space}
          alt="Космос и вселенная" 
          className="home__image" 
        />
      </div>

      <p className="home__text">{t("home.freedom")}</p>

      <div className="home__image-container">
        <img 
          src={macbook}
          alt="Рабочее место с ноутбуком" 
          className="home__image" 
        />
      </div>

      <p className="home__text">{t("home.final")}</p>

      <div className="home__image-container">
        <img 
          src={smoking} 
          alt="Винтажная курительная трубка" 
          className="home__image" 
        />
      </div>

    </section>
  );
}

export default Home;