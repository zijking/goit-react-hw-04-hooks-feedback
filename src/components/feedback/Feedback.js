import React from 'react';
import './Feedback.module.css';

function Feedback({ good, neutral, bad, total, procent }) {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {procent}%</p>
    </>
  );
}

export default Feedback;
