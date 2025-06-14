import { useTranslation } from "../../hooks/useTranslation";

export const Info = () => {
  const { t } = useTranslation();

  return (
    <div className="about__info grid">
      {/* <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 Year Working</span>
      </div> */}
      <div className="about__box">
        <i className="bx bx-bulb about__icon"></i>
        <h3 className="about__title">{t("about.info.learning")}</h3>
        <span className="about__subtitle">
          {t("about.info.learningSubtitle")}
        </span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">{t("about.info.completed")}</h3>
        <span className="about__subtitle">
          {t("about.info.completedSubtitle")}
        </span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">{t("about.info.support")}</h3>
        <span className="about__subtitle">
          {t("about.info.supportSubtitle")}
        </span>
      </div>
    </div>
  );
};
