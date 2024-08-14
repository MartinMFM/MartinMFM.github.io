import { useState } from "react";
import "./qualification.css";

const QualificationTab = ({ title, icon, isActive, onClick }) => (
  <div
    className={`qualification__button button--flex ${
      isActive ? "qualification__active" : ""
    }`}
    onClick={onClick}
  >
    <i className={`uil ${icon} qualification__icon`}></i>
    {title}
  </div>
);

const QualificationItem = ({ title, subtitle, date, isRight }) => (
  <div className="qualification__data">
    {isRight && <div></div>}
    {isRight && (
      <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
      </div>
    )}
    <div>
      <h3 className="qualification__title">{title}</h3>
      <span className="qualification__subtitle">{subtitle}</span>
      <div className="qualification__calendar">
        <i className="uil uil-calendar-alt"></i>
        {date}
      </div>
    </div>
    {!isRight && (
      <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
      </div>
    )}
  </div>
);

export const Qualification = () => {
  const [activeTab, setActiveTab] = useState(1);

  const educationData = [
    {
      title: "Computer Systems Engineering",
      subtitle: "Instituto Tecnológico de Culiacán",
      date: "2021 - Present",
    },
    {
      title: "Programming Technician",
      subtitle: "CBTis #224",
      date: "2018 - 2021",
      isRight: true,
    },
  ];

  const experienceData = [
    {
      title: "Product Designer",
      subtitle: "Microsoft - Spain",
      date: "2021 - Present",
    },
    {
      title: "UX Designer",
      subtitle: "Apple Inc - Spain",
      date: "2020 - 2021",
      isRight: true,
    },
    { title: "Web Designer", subtitle: "Figma - Spain", date: "2018 - 2020" },
  ];

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <QualificationTab
            title="Education"
            icon="uil-graduation-cap"
            isActive={activeTab === 1}
            onClick={() => setActiveTab(1)}
          />
          {/* <QualificationTab
            title="Experience"
            icon="uil-briefcase-alt"
            isActive={activeTab === 2}
            onClick={() => setActiveTab(2)}
          /> */}
        </div>

        <div className="qualification__sections">
          <div
            className={`qualification__content ${
              activeTab === 1 ? "qualification__content-active" : ""
            }`}
          >
            {educationData.map((item, index) => (
              <QualificationItem key={index} {...item} />
            ))}
          </div>

          <div
            className={`qualification__content ${
              activeTab === 2 ? "qualification__content-active" : ""
            }`}
          >
            {experienceData.map((item, index) => (
              <QualificationItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
