import { useTranslation } from "../../hooks/useTranslation";
import PropTypes from "prop-types";

export const WorkItems = ({ item, onOpenModal }) => {
  const { t } = useTranslation();

  const handleViewClick = (e) => {
    e.preventDefault();
    onOpenModal(item);
  };

  return (
    <div key={item.id} className="work__card">
      <img src={item.mainImage} alt={item.name} className="work__img" />
      <h3 className="work__title">{t(item.title)}</h3>
      <div className="work__technologies-container">
        {item.technologies && item.technologies.length > 0 ? (
          item.technologies.map((tech, index) => (
            <span key={index} className="work__technology">
              {tech}
            </span>
          ))
        ) : (
          <span className="work__technology">{t("work.noTechnologies")}</span>
        )}
      </div>
      <a href="#" className="work__button" onClick={handleViewClick}>
        {t("work.view")}
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

WorkItems.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    mainImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string,
    category: PropTypes.string,
    galleryImages: PropTypes.arrayOf(PropTypes.string),
    technologies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
