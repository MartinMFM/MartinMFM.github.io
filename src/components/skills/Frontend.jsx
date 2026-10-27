import { useTranslation } from "../../hooks/useTranslation";
import { groupSkills } from "../../utils/groupSkills";

export const Frontend = () => {
  const { t } = useTranslation();
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "React Native",
    "Vue.js",
    "HTML",
    "CSS/SCSS",
    "Tailwind",
    "Shadcn/ui",
  ];

  const groupedSkills = groupSkills(skills, 5);

  return (
    <div className="skills__content">
      <h3 className="skills__title">{t("skills.frontend")}</h3>
      <div className="skills__box">
        {groupedSkills.map((group, groupIndex) => (
          <div key={groupIndex} className="skills__group">
            {group.map((skill, index) => (
              <div key={index} className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">{skill}</h3>
                  {/* <span className="skills__level"></span> */}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
