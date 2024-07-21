import React, { FC } from 'react';
import '../../styles/components/modal/LanguageModal.css';
import { FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';
import English from '../../assets/icons/uk.png';
import Portuguese from '../../assets/icons/br.png';
import French from '../../assets/icons/fr.png';
import Spain from '../../assets/icons/es.png';
import Japanese from '../../assets/icons/jp.png';
import Chinese from '../../assets/icons/ch.png';
import Russian from '../../assets/icons/rs.png';
import German from '../../assets/icons/gr.png';

interface LanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LanguageModal: FC<LanguageModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();

  if (!isOpen) return null;

  const languages = [
    { code: 'en', labelKey: 'english', icon: English },
    { code: 'pt', labelKey: 'portuguese', icon: Portuguese },
    { code: 'es', labelKey: 'spanish', icon: Spain },
    { code: 'fr', labelKey: 'french', icon: French },
    { code: 'de', labelKey: 'german', icon: German },
    { code: 'zh', labelKey: 'chinese', icon: Chinese },
    { code: 'ja', labelKey: 'japanese', icon: Japanese },
    { code: 'ru', labelKey: 'russian', icon: Russian }
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{t('language-modal.title')}</h2>
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-body">
          <p>{t('language-modal.description')}</p>
          <div className="language-options">
            {languages.map(({ code, labelKey, icon }) => (
              <div
                key={code}
                className={`language-option ${language === code ? 'selected' : ''}`}
                onClick={() => changeLanguage(code as 'en' | 'pt' | 'es' | 'fr' | 'de' | 'zh' | 'ja' | 'ru')}
              >
                <img src={icon} alt={t(`language-modal.${labelKey}`)} />
                <span>{t(`language-modal.languages.${code}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
