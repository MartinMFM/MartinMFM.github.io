import { useState } from "react";
import { projectsData, projectsNav } from "./Data";
import { WorkItems } from "./WorkItems";
import { useEffect } from "react";

export const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const onClickCategory = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              key={index}
              className={`${active === index ? "active-work" : ""} work__item`}
              onClick={(e) => {
                onClickCategory(e, index);
              }}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};
