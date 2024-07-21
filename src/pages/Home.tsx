import React, { FC } from "react";
import "../styles/pages/Home.css";
import imgMeDark from "../assets/images/me_dark_up.png";
import imgMeLight from "../assets/images/me_light_pixar.png";
import { FaFileDownload, FaVideo } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import { LuBrainCircuit } from "react-icons/lu";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

interface HomeProps {
}

export const Home: FC<HomeProps> = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="home">
      <h1 className="section-txt">{t(`home.sectionTxt`)}</h1>

      <div className="info-home">
        <h1>01</h1>
        <div className="txt-infos">
          <span className="my-name">{t(`home.helloIam`)}</span>
          <span className="job">{t(`home.job`)}</span>
          <span className="name">
            {t(`home.myNameIs`)} 
            <b>
              {t(`home.name`)}
            </b>
          </span>
          <div className="btn-actions-home">
            <button>
              <a href="#" className="btn2">
                <span className="spn2">
                  {t(`home.downloadCV`)} <FaFileDownload />
                </span>
              </a>
            </button>
            <button>
              <a href="#" className="btn2">
                <span className="spn2">
                  {t(`home.seeVideo`)} <FaVideo />
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="img-home">
        <img
          src={theme === "dark-mode" ? imgMeDark : imgMeLight}
          alt="me"
        />
        <div className="info-boxes">
          <div className="box slide-in-bck-right">
            <div className="e-card playing">
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="infotop">
                <LuBrainCircuit />
                <br />
                <span>{t(`home.hardSkills`)}</span>
                <br />
                <p>
                  {t(`home.hardSkillsDescription`)}
                </p>
                <button className="animated-button btn-style-1">{t(`home.viewSkills`)}</button>
              </div>
            </div>
          </div>
          <div className="box slide-in-bck-right">
            <div className="e-card playing">
              <div className="infotop">
                <PiCertificate />
                <br />
                <span>{t(`home.certifications`)}</span>
                <br />
                <p>
                  {t(`home.certificationsDescription`)}
                </p>
                <button className="animated-button btn-style-2">{t(`home.seeCertifications`)}</button>
              </div>
            </div>
          </div>
          <button className="mouse">
            <div className="scroll"></div>
          </button>
        </div>
      </div>
    </div>
  );
};