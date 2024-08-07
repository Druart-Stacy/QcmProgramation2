import React from 'react';
import { Link } from 'react-router-dom'; // Import Link


const HomePage = () => {
  return (
    <div>
      <h1>Bienvenue sur la page d'accueil</h1>
      <p>Ceci est la page d'accueil de l'application.</p>
      <Link to="../src/Questionnaire.js">
        <button>Back to Quiz</button>
      </Link>
    </div>
  );
};

export default HomePage;
