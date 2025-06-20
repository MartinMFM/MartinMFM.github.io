import "./Certificates.css";
import certificate1 from "../../assets/certificates/certificate_1.png";
import { useTranslation } from "../../hooks/useTranslation";

const Certificates = () => {
  const { t } = useTranslation();
  return (
    <section className="certificates section" id="certificates">
      <h2 className="section__title">{t("certificates.title")}</h2>
      <div className="certificates__container">
        <a
          href="http://ude.my/UC-13b1f870-1953-46e1-9d09-c4ffebfef703"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="certificate">
            <img
              src={certificate1}
              alt="Certificate of React"
              className="certificate__img"
            />
            <h3 className="certificate__title">
              React: De cero a experto ( Hooks y MERN )
            </h3>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Certificates;
