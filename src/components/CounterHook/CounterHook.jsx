import React, { useState } from "react";
import "./styles.css";

export const CounterHook = (props) => {
  const [nrOfClicks, setNrOfClicks] = useState(props.initialNrOfClicks || 0);

  return (
    <div className="counter">
      <button onClick={() => setNrOfClicks(nrOfClicks + 1)}>
        {props.buttonLabel || "Press Me"}
      </button>
      <p>Number of clicks {nrOfClicks}</p>
    </div>
  );
};
//     state = {
//         nrOfClicks: 0,
//     };

//     increaseNrOfClicks = () => {
//         this.setState({
//             nrOfClicks: this.state.nrOfClicks + 1,
//         });
//     };
// }
