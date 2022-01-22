import {
  FaGitSquare,
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import "./styles.css";

export const Skills = () => {
  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="skills-list">
        <ul>
          <li>
            <FaHtml5 />
          </li>
          <li>HTML</li>
          <li>Advanced</li>
        </ul>
        <ul>
          <li>
            <FaCss3Alt />
          </li>
          <li>CSS</li>
          <li>Advanced</li>
        </ul>
        <ul>
          <li>
            <FaJsSquare />
          </li>
          <li>JAVASCRIPT</li>
          <li>Mid</li>
        </ul>
        <ul>
          <li>
            <FaReact />
          </li>
          <li>REACT</li>
          <li>Mid</li>
        </ul>
        <ul>
          <li>
            <FaGitSquare />
          </li>
          <li>GIT</li>
          <li>Mid</li>
        </ul>
      </div>
    </div>
  );
};
