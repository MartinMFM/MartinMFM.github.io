export const groupSkills = (skills, groupSize) => {
  const groupedSkills = [];
  for (let i = 0; i < skills.length; i += groupSize) {
    groupedSkills.push(skills.slice(i, i + groupSize));
  }
  return groupedSkills;
};
