import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';
import XHR from "i18next-xhr-backend";

i18n
    .use(XHR)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        debug: false,

        interpolation: {
            escapeValue: false,
        },

        react: {
            useSuspense: true,
            wait: true
        },

        backend: {
            loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`
        },
        load: 'unspecific',
    });

export default i18n;