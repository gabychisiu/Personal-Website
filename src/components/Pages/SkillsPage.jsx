import { Counter } from "../Counter/Counter";
import { CounterHook } from "../CounterHook/CounterHook";
import { Skills } from "../Skills/Skills";

export const SkillsPage = () => {
  return (
    <div className="page skills-page">
      <Skills
        initialNrOfClicks={5}
        buttonLabel="Press me class component counter"
      />
      <Counter buttonLabel="Press Me 2" />
      <CounterHook initialNrOfClicks={10} />
    </div>
  );
};
