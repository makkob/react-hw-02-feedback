import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // total = 0;

  // positivePercentage = 0;

  answerOptions = ["good", "neutral", "bad"];

  positiveFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.ceil((good / (good + neutral + bad)) * 100);
  };

  onHandleLeaveFeedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <div>
          {" "}
          <FeedbackOptions
            options={this.answerOptions}
            onLeaveFeedback={this.onHandleLeaveFeedback}
          />
        </div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.positiveFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
        <Section />
      </>
    );
  }
}
