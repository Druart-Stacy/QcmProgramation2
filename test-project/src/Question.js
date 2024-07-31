import React from 'react';

function Question({ question, onAnswerClick }) {
  return (
    <div>
      <h2>{question.questionText}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index} onClick={() => onAnswerClick(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
