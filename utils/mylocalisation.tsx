import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "../localisation/translations/en.json"
import de from "../localisation/translations/de.json"

const resources = {
    en,
    de
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // Default language
        interpolation: {
            escapeValue: false, // React already escapes values
        },
    });

export default i18n;