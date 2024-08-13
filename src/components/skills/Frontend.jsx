import React from "react";

export const Frontend = () => {
  const skills = [
    "HTML",
    "CSS/SCSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Jest",
    "Babel",
    "Git",
    "Bootstrap",
    "Tailwind",
    "MUI",
  ];

  const groupSkills = (skills, groupSize) => {
    const groupedSkills = [];
    for (let i = 0; i < skills.length; i += groupSize) {
      groupedSkills.push(skills.slice(i, i + groupSize));
    }
    return groupedSkills;
  };

  const groupedSkills = groupSkills(skills, 6);

  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend developer</h3>
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
