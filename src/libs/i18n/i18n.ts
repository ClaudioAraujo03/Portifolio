import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locale/en.json';
import ptTranslations from './locale/pt.json';
import esTranslations from './locale/es.json';
import frTranslations from './locale/fr.json';
import deTranslations from './locale/de.json';
import zhTranslations from './locale/zh.json';
import jaTranslations from './locale/ja.json';
import ruTranslations from './locale/ru.json';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            ...enTranslations
        },
        pt: {
            ...ptTranslations
        },
        es: {
            ...esTranslations
        },
        fr: {
            ...frTranslations
        },
        de: {
            ...deTranslations
        },
        zh: {
            ...zhTranslations
        },
        ja: {
            ...jaTranslations
        },
        ru: {
            ...ruTranslations
        },
    },
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

i18n.on('languageChanged', (lng) => {
    localStorage.setItem('language', lng);
});

export default i18n;
