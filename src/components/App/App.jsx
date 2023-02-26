import React, { useState } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notificstion';
import { Wrapper } from './App.styled';
// import { nanoid } from 'nanoid';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    // console.log(event);
    switch (event) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const values = [good, neutral, bad];

    return values.reduce((acc, value) => acc + value, 0);
  };

  const countPercentage = (total, good) => {
    return Math.round((good / total) * 100);
  };

  const options = Object.keys({ good, neutral, bad });
  const total = countTotalFeedback();
  const positivePercentage = countPercentage(total, good);

  return (
    <Wrapper>
      <h1>Please leave feedback</h1>

      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      <h2>Statistics</h2>
      {countTotalFeedback() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Wrapper>
  );
}
