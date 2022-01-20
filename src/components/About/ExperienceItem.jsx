import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import "./styles.css";

export const ExperienceItem = ({ yearRange, jobTitle, company, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="experience-item">
      <p className="experience-year space-below">{yearRange}</p>
      <h3 className="space-below" onClick={() => setShowInfo((prev) => !prev)}>
        {jobTitle} <span>{company}</span>
      </h3>
      <Collapse className="space-below" in={showInfo}>
        <p>{info}</p>
      </Collapse>
    </div>
  );
};
