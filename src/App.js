import React, { Component } from 'react';
import './App.css';
import Feedback from './components/feedback';
import FeedbackOptions from './components/feedbackOptions';
import Section from './components/section';
import Notification from './components/notification';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  incrementFeedback = name => {
    return this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const positive = this.state.good;
    const total = this.countTotalFeedback();

    let x = ((positive * 100) / total).toFixed(2);

    if (total === 0) {
      x = 0;
    }
    return x;
  };

  render() {
    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.incrementFeedback} />
        </Section>
        <Section title="Statistic">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Feedback
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              procent={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
