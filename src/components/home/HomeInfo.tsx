import React from 'react';
import { ActionButton } from '../ActionButton';
import { FaFileDownload, FaVideo } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import "../../styles/components/home/HomeInfo.css"

export const HomeInfo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="info-home">
      <h1>01</h1>
      <div className="txt-infos">
        <span className="my-name">{t('home.helloIam')}</span>
        <span className="job">{t('home.job')}</span>
        <span className="name">
          {t('home.myNameIs')} <b>{t('home.name')}</b>
        </span>
        <div className="btn-actions-home">
          <ActionButton
            href="#"
            icon={<FaFileDownload />}
            text={t('home.downloadCV')}
          />
          <ActionButton
            href="#"
            icon={<FaVideo />}
            text={t('home.seeVideo')}
          />
        </div>
      </div>
    </div>
  );
};
