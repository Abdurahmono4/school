import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // Agar tilni aniqlay olmasa, ingliz tilini ishlatadi
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Tarjimalarni yuklab olish yo'li
    },
    interpolation: {
      escapeValue: false, // React uchun xavfsiz
    },
  });
export default i18n;
