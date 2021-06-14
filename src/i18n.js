import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import XHR from "i18next-xhr-backend";
import { CustomDetector } from "./CustomDetector";

i18n
    .use(XHR)
    .use(CustomDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        debug: false,

        interpolation: {
            escapeValue: false,
        },

        react: {
            useSuspense: true
        },

        backend: {
            loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`
        },
        load: 'unspecific',
    });

export default i18n;