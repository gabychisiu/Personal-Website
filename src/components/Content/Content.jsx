import { Counter } from "../Counter/Counter";
import { ToDo } from "../ToDo/ToDo";
import "./styles.css";

export const Content = () => {
  return (
    <div className="content">
      <Counter />
      <Counter />
      <ToDo />
    </div>
  );
};
