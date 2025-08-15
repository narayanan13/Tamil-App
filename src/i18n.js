import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
  import taTranslation from './locales/ta/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ta: { translation: taTranslation }
    },
    lng: 'ta', // Default Tamil
    fallbackLng: 'ta',
    interpolation: { escapeValue: false }
  });

export default i18n;
