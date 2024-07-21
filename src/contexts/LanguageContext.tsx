// contexts/LanguageContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import i18n from 'i18next';

type Language = 'en' | 'pt' | 'es' | 'fr' | 'de' | 'zh' | 'ja' | 'ru';

interface LanguageContextProps {
  language: Language;
  changeLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const validateLanguage = (language: string): language is Language => {
  return ['en', 'pt', 'es', 'fr', 'de', 'zh', 'ja', 'ru'].includes(language);
};

const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const changeLanguage = (language: string) => {
    if (validateLanguage(language)) {
      setLanguage(language);
      i18n.changeLanguage(language);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { LanguageProvider, useLanguage };
