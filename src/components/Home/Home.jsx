import React from "react";
import "./styles.css"

export class Home extends React.Component {
    state = {
      nrOfClicks: this.props.initialNrOfClicks || 0,
    };
  
    increaseNrOfClicks = () => {
      this.setState({
        nrOfClicks: this.state.nrOfClicks + 1,
      });
    };
  
    render() {
      return (
        <div className="counter">
          <button onClick={this.increaseNrOfClicks}>
            {this.props.buttonLabel || "Press Me"}
          </button>
          <p>Number of clicks {this.state.nrOfClicks}</p>
        </div>
      );
    }
  }