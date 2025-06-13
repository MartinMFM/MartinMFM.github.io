import { useState } from "react";
import { projectsData, projectsNav } from "./Data";
import { WorkItems } from "./WorkItems";
import { useEffect } from "react";
import { useTranslation } from "../../hooks/useTranslation";

export const Works = () => {
  const { t } = useTranslation();
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  // Función para obtener el texto traducido según el nombre de la categoría
  const getTranslatedCategoryName = (categoryName) => {
    switch (categoryName) {
      case "all":
        return t("work.all");
      case "design":
        return t("work.design");
      case "web":
        return t("work.web");
      case "app":
        return t("work.app");
      default:
        return categoryName;
    }
  };

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
              {getTranslatedCategoryName(item.name)}
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
