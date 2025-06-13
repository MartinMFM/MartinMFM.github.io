import "./footer.css";
import { useTranslation } from "../../hooks/useTranslation";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Martin Flores Medina</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              {t("footer.about")}
            </a>
          </li>

          <li>
            <a href="portfolio" className="footer__link">
              {t("footer.projects")}
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/martin.floresm"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/martin-flores-medina-b7840a322/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/MartinMFM"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
