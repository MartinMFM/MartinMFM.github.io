import { useTranslation } from "../../hooks/useTranslation";

export const Backend = () => {
  const { t } = useTranslation();
  const skills = [
    "Node.js",
    "Express",
    "MongoDB",
    "Firebase",
    "SQL",
    "MySQL",
    "Supabase",
    "Docker",
  ];

  return (
    <div className="skills__content">
      <h3 className="skills__title">{t("skills.backend")}</h3>
      <div className="skills__box">
        <div className="skills__group">
          {skills.map((skill, index) => (
            <div key={index} className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">{skill}</h3>
                {/* <span className="skills__level"></span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
