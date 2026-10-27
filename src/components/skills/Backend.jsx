import { useTranslation } from "../../hooks/useTranslation";
import { groupSkills } from "../../utils/groupSkills";

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
    "Python",
    "Java",
    "Spring Boot",
  ];

  const groupedSkills = groupSkills(skills, 5);

  return (
    <div className="skills__content">
      <h3 className="skills__title">{t("skills.backend")}</h3>
      <div className="skills__box">
        {groupedSkills.map((group, groupIndex) => (
          <div key={groupIndex} className="skills__group">
            {group.map((skill, index) => (
              <div key={index} className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">{skill}</h3>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
