import "./styles.css";

export const ExperienceItem = ({ yearRange, jobTitle, company, info }) => {
  return (
    <div className="experience-item">
      <p className="experience-year space-below">{yearRange}</p>
      <h3 className="space-below">
        {jobTitle} <span>{company}</span>
      </h3>
      <p className="space-below">{info}</p>
    </div>
  );
};
