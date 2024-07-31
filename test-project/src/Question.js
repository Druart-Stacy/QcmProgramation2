// Question.js
import React from 'react';

const Question = ({ question, onAnswerClick }) => {
  return (
    <div className="question-container">
      <h2>{question.questionText}</h2>
      <div className="options-container">
        {question.options.map((option, index) => (
          <button key={index} className="option" onClick={() => onAnswerClick(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
