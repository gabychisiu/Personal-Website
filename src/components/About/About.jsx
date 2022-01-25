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
                info="In this company I make molds on machines with numerical control. This consists in the 
          realization of the manufacturing technology, the realization of the CNC programs, the selection
           of the cutting tools for an optimal process, the adjustment of the CNC machining centers."
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
                info="In this company we have developed programs for numerically controlled machines and 
                manufacturing technology. In addition to these things, I also adjusted these machines. 
                After the execution of the parts we make measurements on the measuring machine in coordinates."
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
                info="In this company we have developed programs for numerically controlled machines 
                and manufacturing technology."
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
                info="In this course I learned to make a web application using HTML, CSS and JS. Some 
                important chapters I have learned are: JS DOM manipulation; JS Function and Scope; Git; OOP 
                Concepts; AJAX; JS Objects and Classes; Javascript-BOM; React JS; React Router; In this course
                 I also learned how to make a web application with the React JS library"
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
