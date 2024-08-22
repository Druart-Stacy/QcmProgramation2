// Question.js
import React from 'react';

// Composant Question qui affiche une question et ses options de réponse
const Question = ({ question, options, onAnswer }) => {
  return (
    <div className="question-container">
      <h2>{question}</h2>
      {options.map((option, index) => (
        <a key={index} onClick={() => onAnswer(option)}>
          <h3>{option}</h3>
        </a>
      ))}
    </div>
  );
};

export default Question;
