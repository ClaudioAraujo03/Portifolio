// pages/Home.tsx
import React, { FC } from 'react';
import '../styles/pages/Home.css';
import imgMeDark from '../assets/images/me_dark_up.png';
import imgMeLight from '../assets/images/me_light_pixar.png';
import { LuBrainCircuit } from 'react-icons/lu';
import { PiCertificate } from 'react-icons/pi';
import { HomeInfo } from '../components/home/HomeInfo';
import { InfoBox } from '../components/home/InfoBox';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';

export const Home: FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="home">
      <h1 className="section-txt">{t('home.sectionTxt')}</h1>
      <HomeInfo />
      <div className="img-home">
        <img src={theme === 'dark-mode' ? imgMeDark : imgMeLight} alt="me" />
        <div className="info-boxes">
          <InfoBox
            icon={<LuBrainCircuit />}
            title={t('home.hardSkills')}
            description={t('home.hardSkillsDescription')}
            buttonText={t('home.viewSkills')}
            buttonClass="btn-style-1"
          >
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </InfoBox>
          <InfoBox
            icon={<PiCertificate />}
            title={t('home.certifications')}
            description={t('home.certificationsDescription')}
            buttonText={t('home.seeCertifications')}
            buttonClass="btn-style-2"
          />
          <button className="mouse">
            <div className="scroll"></div>
          </button>
        </div>
      </div>
    </div>
  );
};
