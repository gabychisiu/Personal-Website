import { CounterHook } from "../CounterHook/CounterHook";
import { Work } from "../Work/Work";

export const WorkPage = () => {
  return (
    <div className="page work-page">
      <Work
        initialNrOfClicks={5}
        buttonLabel="Press me class component counter"
      />

      <CounterHook initialNrOfClicks={10} />
    </div>
  );
};
