import { About } from "../About/About";
import { Counter } from "../Counter/Counter";
import { CounterHook } from "../CounterHook/CounterHook";

export const AboutPage = () => {
  return (
    <div className="page about-page">
      <About
        initialNrOfClicks={5}
        buttonLabel="Press me class component counter"
      />
      <Counter buttonLabel="Press Me 2" />
      <CounterHook initialNrOfClicks={10} />
    </div>
  );
};
