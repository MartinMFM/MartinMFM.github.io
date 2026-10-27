import { useTranslation } from "../../hooks/useTranslation";
import { groupSkills } from "../../utils/groupSkills";

export const Tools = () => {
  const { t } = useTranslation();
  const skills = [
    "Git",
    "GitHub Actions",
    "Docker",
    "Postman",
    "Power BI",
    "JUnit",
    "Mockito",
  ];

  const groupedSkills = groupSkills(skills, 6);

  return (
    <div className="skills__content">
      <h3 className="skills__title">{t("skills.tools")}</h3>
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
