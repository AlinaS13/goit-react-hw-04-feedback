import { Wraper } from './App.styled';
import { Section } from './section';
import { FeedbackOptions } from './feedback-options';
import { Statistics } from './statistics';
import { Notification } from './notification/';
import { useState } from 'react';

export const App = () => {
  const [good, setGoodFiedback] = useState(0);
  const [neutral, setNeutralFiedback] = useState(0);
  const [bad, setBadFiedback] = useState(0);

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGoodFiedback(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutralFiedback(prevState => prevState + 1);
        break;
      case 'bad':
        setBadFiedback(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return bad + good + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };
  return (
    <Wraper>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Wraper>
  );
};
