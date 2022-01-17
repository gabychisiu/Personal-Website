import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { ExperienceItem } from "./ExperienceItem";
import "./styles.css";

export const About = () => {
  return (
    <div className="about">
      <h1>EXPERIENCE & EDUCATION</h1>
      <div className="experience-content">
        <ul>
          <li className="exp">
            <div>
              <FaBriefcase className="experience-icon"/>
            </div>
            <div className="experience-description">
              <ExperienceItem
                yearRange="~2021-Present"
                jobTitle="Manufacturing Engineer"
                company="- CapPetPlast"
                info="in this company I make molds on machines with numerical control. This consists in the 
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
                info="in this company I make molds on machines with numerical control. This consists in the 
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
                yearRange="2015-2017"
                jobTitle="Manufacturing Engineer"
                company="- FSA Romania"
                info="in this company I make molds on machines with numerical control. This consists in the 
          realization of the manufacturing technology, the realization of the CNC programs, the selection
           of the cutting tools for an optimal process, the adjustment of the CNC machining centers."
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
                info="-manufacturing engineering
                -designing devices
                -plastic deformation processing technologies
                -cutting processing technologies
                -processing technologies on MU-CN
                -design of cutting tools
                -a good command of SolidWorks and AutoCAD programs
                -knowledge in MechSoft 2004"
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
                info="-manufacturing engineering
              -designing devices
              -plastic deformation processing technologies
              -cutting processing technologies
              -processing technologies on MU-CN
              -design of cutting tools
              -a good command of SolidWorks and AutoCAD programs
              -knowledge in MechSoft 2004"
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
                info="-manufacturing engineering
                -designing devices
                -plastic deformation processing technologies
                -cutting processing technologies
                -processing technologies on MU-CN
                -design of cutting tools
                -a good command of SolidWorks and AutoCAD programs
                -knowledge in MechSoft 2004"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
