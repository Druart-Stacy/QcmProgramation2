// Button.js
import React from 'react';

// Le composant Button accepte des props pour personnaliser le bouton
const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={styles.button}>
      {label}
    </button>
  );
};

// Styles en ligne pour le bouton
const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Button;
