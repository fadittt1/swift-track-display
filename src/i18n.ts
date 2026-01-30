import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import frCommon from './locales/fr/common.json';
import enCommon from './locales/en/common.json';
import arCommon from './locales/ar/common.json';

const resources = {
    fr: {
        common: frCommon,
    },
    en: {
        common: enCommon,
    },
    ar: {
        common: arCommon,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'fr', // default language
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false,
        },
        ns: ['common'],
        defaultNS: 'common',
    });

// Handle RTL for Arabic
i18n.on('languageChanged', (lng) => {
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
});

export default i18n;
