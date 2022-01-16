import { Home } from "../Home/Home";
import { Counter } from "../Counter/Counter";
import { CounterHook } from "../CounterHook/CounterHook";

export const HomePage = () => {
  return (
    <div className="page home-page">
      <Home
        initialNrOfClicks={5}
        buttonLabel="Press me class component counter"
      />
      <Counter buttonLabel="Press Me 2" />
      <CounterHook initialNrOfClicks={10} />
    </div>
  );
};
