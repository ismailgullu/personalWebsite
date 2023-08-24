import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import eng from "./locales/eng.json";
import tur from "./locales/tur.json";

const lang = localStorage.getItem("language");

const resources = {
  tr: {
    translation: tur,
  },
  en: {
    translation: eng,
  },
};

i18n.use(initReactI18next).init({ lng: lang ?? "en", resources });
export default i18n;
