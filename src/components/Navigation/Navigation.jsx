import { NavButton } from "./NavButton/NavButton";
import "./styles.css";

export const Navigation = () => {
  return (
    <div className="header-navigation">
      <NavButton label="Home" path="/home" />
      <NavButton label="About" path="/about" />
      <NavButton label="Skills" path="/skills" />
      <NavButton label="Work" path="/work" />
      <NavButton label="Contact" path="/contact" />

      <NavButton label="Counter" path="/counter" />
      <NavButton label="ToDo" path="/todo" />
      <NavButton label="DigitalClock" path="digital_clock" />
    </div>
  );
};
