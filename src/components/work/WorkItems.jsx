import { useTranslation } from "../../hooks/useTranslation";

export const WorkItems = ({ item }) => {
  const { t } = useTranslation();

  return (
    <div key={item.id} className="work__card">
      <img src={item.image} alt={item.name} className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href="#" className="work__button">
        {t("work.demo")}{" "}
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};
