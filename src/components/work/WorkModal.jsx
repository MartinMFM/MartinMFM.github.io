import { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "../../hooks/useTranslation";

const WorkModal = ({ isOpen, onClose, project }) => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!isOpen || !project) return null;
  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.galleryImages.length - 1 : prev - 1
    );
  };
  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleFullscreenClose = () => {
    setIsFullscreen(false);
  };

  return (
    <div className="work__modal">
      <div className="work__modal-content">
        <div className="work__modal-header">
          <h3 className="work__modal-title">{t(project.title)}</h3>
          <button className="work__modal-close" onClick={onClose}>
            <i className="bx bx-x" style={{ fontSize: "2rem" }}></i>
          </button>
        </div>{" "}
        <div className="work__modal-body">
          <div className="work__modal-description">
            <p>{t(project.title.replace(".title", ".description"))}</p>
          </div>

          {/* Tecnologías del proyecto */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="work__modal-technologies">
              <div className="work__modal-technologies-list">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="work__modal-technology">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="work__modal-gallery">
            {" "}
            <div className="work__gallery-main">
              <button
                className="work__gallery-nav work__gallery-prev"
                onClick={prevImage}
              >
                <i className="bx bx-chevron-left"></i>
              </button>
              <div className="work__gallery-image-container">
                {" "}
                <img
                  src={project.galleryImages[currentImageIndex]}
                  alt={`${t(project.title)} - Image ${currentImageIndex + 1}`}
                  className="work__gallery-image"
                  onClick={toggleFullscreen}
                />
                <button
                  className="work__gallery-fullscreen"
                  onClick={toggleFullscreen}
                  title="Ver en pantalla completa"
                >
                  <i className="bx bx-fullscreen"></i>
                </button>
              </div>
              <button
                className="work__gallery-nav work__gallery-next"
                onClick={nextImage}
              >
                <i className="bx bx-chevron-right"></i>
              </button>
            </div>{" "}
            <div className="work__gallery-thumbnails">
              {project.galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`work__gallery-thumbnail ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                  onClick={() => goToImage(index)}
                />
              ))}{" "}
            </div>
          </div>
        </div>
        {/* Modal de pantalla completa */}
        {isFullscreen && (
          <div
            className="work__fullscreen-modal"
            onClick={handleFullscreenClose}
          >
            <div className="work__fullscreen-content">
              <button
                className="work__fullscreen-close"
                onClick={handleFullscreenClose}
              >
                <i className="bx bx-x"></i>
              </button>
              <button
                className="work__fullscreen-nav work__fullscreen-prev"
                onClick={prevImage}
              >
                <i className="bx bx-chevron-left"></i>
              </button>
              <img
                src={project.galleryImages[currentImageIndex]}
                alt={`${t(project.title)} - Image ${currentImageIndex + 1}`}
                className="work__fullscreen-image"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                className="work__fullscreen-nav work__fullscreen-next"
                onClick={nextImage}
              >
                <i className="bx bx-chevron-right"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

WorkModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    galleryImages: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default WorkModal;
