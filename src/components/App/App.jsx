import React, { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notificstion';
import { Wrapper } from './App.styled';
// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
    // console.log(event.target);
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);

    return values.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = (total, good) => {
    return Math.round((good / total) * 100);
  };
  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(
      total,
      good
    );
    return (
      <Wrapper>
        <h1>Please leave feedback</h1>

        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <h2>Statistics</h2>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Wrapper>
    );
  }
}
