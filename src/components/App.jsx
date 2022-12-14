import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";
import "./global.css"

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  

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
        <Section title="Leave your feedback">
          {" "}
          <FeedbackOptions
            options={this.answerOptions}
            onLeaveFeedback={this.onHandleLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.positiveFeedback() === 0 ? (
            <Notification message="No feedback given " />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.positiveFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
