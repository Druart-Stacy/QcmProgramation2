// src/HomePage.js
import React from 'react';
import useHistory  from './App';

const HomePage = () => {
  const history = useHistory();

  const startQuestionnaire = () => {
    history.push('/questionnaire');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bienvenue sur notre site</h1>
      <button onClick={startQuestionnaire} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Commencer le questionnaire
      </button>
    </div>
  );
};

export default HomePage;
