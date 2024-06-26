import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import BackendAdapter from "i18next-multiload-backend-adapter";

const language = localStorage.getItem("adfpLang")
  ? JSON.parse(localStorage.getItem("adfpLang"))
  : "ar";

i18n
  .use(BackendAdapter)
  //.use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: language,
    debug: true,
    lng: language,
    // have a common namespace used around the full app
    ns: ["translation"],
    defaultNS: "translation",

    //keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
    backend: {
      backend: HttpApi,
      backendOption: {
        allowMultiLoading: true,
        loadPath: "/api/translate",
      },
    },
  })
  .then(() => {
    i18n.languages.forEach((lang) =>
      console.warn(i18n.getDataByLanguage(lang))
    );
    if (
      i18n.languages.every((lang) => i18n.getDataByLanguage(lang) === undefined)
    ) {
      i18n.languages.every((lang) => {
        return i18n.getDataByLanguage(lang) === undefined;
      });
      throw new Error(`Failed to load localization`);
    }
  });

export default i18n;
