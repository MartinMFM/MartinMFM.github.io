import { useLanguage } from "../../context/LanguageContext";
import "./languageToggle.css";

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button className="language-toggle" onClick={toggleLanguage}>
      <span className="language-toggle__text">
        {language === "es" ? "Español" : "English"}
      </span>
    </button>
  );
};
