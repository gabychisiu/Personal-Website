import { Counter } from "../Counter/Counter";
import { ToDo } from "../ToDo/ToDo";
import { DigitalClock } from "../DigitalClock/DigitalClock";
import "./styles.css";

export const Content = () => {
  return (
    <div className="content">
      <Counter />
      <Counter />
      <ToDo />
      <DigitalClock />
    </div>
  );
};
