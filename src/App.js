import { useState } from 'react';
import './App.css';
import Feedback from './components/feedback';
import FeedbackOptions from './components/feedbackOptions';
import Section from './components/section';
import Notification from './components/notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementFeedback = name => {
    switch (name) {
      case 'good': {
        setGood(s => s + 1);
        break;
      }
      case 'neutral': {
        setNeutral(s => s + 1);
        break;
      }
      case 'bad': {
        setBad(s => s + 1);
        break;
      }
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const positive = good;
    const total = countTotalFeedback();

    let x = ((positive * 100) / total).toFixed(2);

    if (total === 0) {
      x = 0;
    }
    return x;
  };

  return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={incrementFeedback} />
      </Section>
      <Section title="Statistic">
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Feedback
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            procent={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

export default App;
