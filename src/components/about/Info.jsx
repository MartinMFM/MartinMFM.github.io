export const Info = () => {
  return (
    <div className="about__info grid">
      {/* <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 Year Working</span>
      </div> */}
      <div className="about__box">
        <i className="bx bx-bulb about__icon"></i>
        <h3 className="about__title">Learning</h3>
        <span className="about__subtitle">Continuous Improvement</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">3+ Projects</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};
