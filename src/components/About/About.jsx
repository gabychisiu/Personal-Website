import React from "react";
import { Button } from "@mui/material";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { ExperienceItem } from "./ExperienceItem";
import "./styles.css";
import CV from "./CV.pdf";

export const About = () => {
  return (
    <div className="about">
      <h1>EXPERIENCE & EDUCATION</h1>
      <div className="experience-content">
        <ul>
          <li className="exp">
            <div>
              <FaBriefcase className="experience-icon" />
            </div>
            <div className="experience-description">
              <ExperienceItem
                yearRange="2021-Present"
                jobTitle="Manufacturing Engineer"
                company="- CapPetPlast"
                info="Now I complete the entire product cycle from designing the part, choosing the right tools
                in order to be as efficient as possible, then making the program and finally producing the 
                part on the CNC machine. As a final step, I also write a manufacturing technology to 
                document the entire process."
              />
            </div>
          </li>
          <li className="exp">
            <div className="experience-icon">
              <FaBriefcase />
            </div>
            <div className="experience-description">
              <ExperienceItem
                yearRange="2017-2021"
                jobTitle="Manufacturing Engineer"
                company="- Brizard Romania"
                info="I made programs and wrote code to control the CNC milling machines to achieve high performance
                and speed in order to then produce series of thousands of parts. Then, I would closely observe the program 
                run and I would make fine adjustments as the mill would slowly run down. After the execution of the 
                parts I would do precise measurements on the 3D measuring machine. After the part is successfully made I 
                would document the entire process so as for the programme to be reused easily in the future."
              />
            </div>
          </li>
          <li className="exp">
            <div className="experience-icon">
              <FaBriefcase />
            </div>
            <div className="experience-description">
              <ExperienceItem
                yearRange="2015-2017"
                jobTitle="Manufacturing Engineer"
                company="- FSA Romania"
                info="We have developed programs for numerically controlled machines 
                and manufacturing technology. The resulting parts were then to be 
                used in assembly lines for the automotive industry. My job was to 
                develop programs for small series of parts."
              />
            </div>
          </li>
        </ul>
        <ul>
          <li className="exp">
            <div className="experience-icon">
              <FaGraduationCap />
            </div>
            <div className="experience-description">
              <ExperienceItem
                yearRange="2021-2022"
                jobTitle="Front-End Developer Course"
                company="- Scoala Informala de IT"
                info="I learned to make a web application using HTML, CSS and JS. We layed 
                the foundation by understanding JS DOM manipulation and basic JS Functions. 
                We applied the knowledge by creating a repository and used Git to version all stages of the projects.
                I gathered OOP knowledge by working on my version of the famous Mario game.
                I put to practice the AJAX concepts by creating small funny apps like random dog picture generator;
                I also created a small AJAX app where I exercised cookies and local storage.
                In the final part of the course we learned React and made a web app using React Router. 
                As exercise, we wrote the basic to do app in React using hooks like useEffect and useState.
                The final project was creating this personal website."
              />
            </div>
          </li>
          <li className="exp">
            <div className="experience-icon">
              <FaGraduationCap />
            </div>
            <div className="experience-description">
              <ExperienceItem
                yearRange="2016-2018"
                jobTitle="Master Degree"
                company="- Technical University of Cluj-Napoca"
                info="Things I learned: Finite element analysis in engineering; Quality management; 
                Applied mathematics in engineering; Computer aided design; Rapid prototyping; Assisted 
                mold design; Automotive component manufacturing technologies "
              />
            </div>
          </li>
          <li className="exp">
            <div className="experience-icon">
              <FaGraduationCap />
            </div>
            <div className="experience-description">
              <ExperienceItem
                yearRange="2011-2015"
                jobTitle="Bachelor Degree"
                company="- Technical University of Cluj-Napoca"
                info="Things I learned: Manufacturing engineering; Designing devices; Plastic deformation
                 processing technologies; Cutting processing technologies; Processing technologies on MU-CN; 
                 Design of cutting tools; A good command of SolidWorks and AutoCAD programs; Knowledge in 
                 MechSoft 2004"
              />
            </div>
          </li>
        </ul>
      </div>
      <Button
        component="a"
        href={CV}
        download={CV}
        id="btn-send-message"
        variant="contained"
      >
        Read the full CV
      </Button>
    </div>
  );
};
