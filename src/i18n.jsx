import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const savedLanguage = localStorage.getItem('language') || 'uz';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: savedLanguage,
    fallbackLng: 'uz',
    debug: true,
    detection: {
      order: ['localStorage', 'navigator'], 
      lookupLocalStorage: 'language', 
      caches: ['localStorage'], 
    },
    backend: {
      loadPath: '/Locals/{{lng}}.json',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;