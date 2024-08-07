// HomePage.js
import React from 'react';
import Button from './Button'; // Assurez-vous que le chemin est correct

const HomePage = () => {
  // Définir la fonction handleClick
  const handleClick = () => {
    alert('Bouton cliqué !');
  };

  return (
    <div>
      <h1>Bienvenue sur la page d'accueil</h1>
      <Button label="Cliquez ici" onClick={handleClick} />
    </div>
  );
};

export default HomePage;
