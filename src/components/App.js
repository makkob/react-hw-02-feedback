import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  total = 0;

  positiveFeedbackResult = 0;

  answerOptions = ["good", "neutral", "bad"];

  positiveFeedback = () => {
    const { good, neutral, bad } = this.state;

    return (this.total = good + neutral + bad);
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return (this.positiveFeedbackResult = (good * 100) / this.total);
  };
  test = () => {
    console.log(this.total);
    console.log(this.positiveFeedbackResult);
  };
  onHandleLeaveFeedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    return (
      <>
        <div>
          {" "}
          <FeedbackOptions
            options={this.answerOptions}
            onLeaveFeedback={this.onHandleLeaveFeedback}
          />
        </div>
        <Statistics />
      </>
    );
  }
}
