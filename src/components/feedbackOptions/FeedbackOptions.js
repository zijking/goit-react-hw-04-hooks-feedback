import s from './FeedbackOptions.module.css';
function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <p>
      <button className={s.button} onClick={() => onLeaveFeedback('good')}>
        Good
      </button>
      <button className={s.button} onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </button>
      <button className={s.button} onClick={() => onLeaveFeedback('bad')}>
        Bad
      </button>
    </p>
  );
}

export default FeedbackOptions;
