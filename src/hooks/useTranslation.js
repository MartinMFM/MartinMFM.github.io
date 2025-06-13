import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key) => {
    const keys = key.split(".");
    let translation = translations[language];

    for (const k of keys) {
      if (translation && typeof translation === "object") {
        translation = translation[k];
      } else {
        return key; // Devolver la clave si no se encuentra la traducción
      }
    }

    return translation || key;
  };

  return { t };
};
