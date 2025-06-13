import { useTranslation } from "../../hooks/useTranslation";
import { Backend } from "./Backend";
import { Frontend } from "./Frontend";
import "./skill.css";

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">{t("skills.title")}</h2>
      <span className="section__subtitle">{t("skills.subtitle")}</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};
