// App.js
import React, { useState, useEffect } from 'react';
import Question from './Question';
import './App.css';
import tristeImage from './img/larmeleon.png';
import felicitationImage from './img/mackognieur.png';
import legendeImage from './img/arceus.jpg';
import bonnemoyenne from'./img/porigon2.jpg';

// Définition des questions du quiz
// Questions
const questions = [
  {
    questionText: "Qu'est-ce que JavaScript ?",
    options: [
      'A. Un langage de programmation', 
      'B. Une marque de GSM', 
      'C. Une ville'
    ],
    correctAnswer: 'A. Un langage de programmation',
  },
  {
    questionText: "Qu'est-ce que Java ?",
    options: [
      'A. Une marque de café', 
      'B. Un langage de programmation', 
      'C. La réponse C'
    ],
    correctAnswer: 'B. Un langage de programmation',
  },
  {
    questionText: 'Comment déclare-t-on une variable en JavaScript ?',
    options: [
      'A. Nom de la variable', 
      'B. Avec le symbole $', 
      'C. Avec "let" ou "const"'
    ],
    correctAnswer: 'C. Avec "let" ou "const"',
  },
  {
    questionText: 'Quelle est la différence entre "let" et "const" ?',
    options: [
      'A. "let" est utilisé pour déclarer une variable locale à un bloc d’instructions. "const" est utilisé pour déclarer une variable constante qui ne peut pas être réaffectée.', 
      'B. "const" est utilisé pour déclarer une variable locale à un bloc d’instructions. "let" est utilisé pour déclarer une variable constante qui ne peut pas être réaffectée.',
      'C. Aucune différence entre les deux'
    ],
    correctAnswer: 'A. "let" est utilisé pour déclarer une variable locale à un bloc d’instructions. "const" est utilisé pour déclarer une variable constante qui ne peut pas être réaffectée.',
  },
  {
    questionText: 'Comment utiliser des commentaires en JavaScript ?',
    options: [
      'A. /**/',  
      'B. //',
      'C. --'
    ],
    correctAnswer: 'B. //',
  },
  {
    questionText: 'Comment effectuer une boucle while en JavaScript ?',
    options: [
      'A. while (condition)\n 	// instruction',  
      'B. while (condition) {\n    // instructions à répéter\n}',
      'C. while condition\n // instructions'
    ],
    correctAnswer: 'B. while (condition) {\n    // instructions à répéter\n}',
  },
  {
    questionText: "Quel framework n’est pas un framework JavaScript ?",
    options: [
      'A. Angular', 
      'B. Laravel', 
      'C. ReactJS'
    ],
    correctAnswer: 'B. Laravel',
  },
  {
    questionText: 'Que veut dire langage de haut niveau ?',
    options: [
      'A. Cela signifie que c’est un langage plus près du langage humain', 
      'B. Cela signifie que c’est un langage difficile à apprendre', 
      'C. Cela signifie que c’est un langage plus éloigné du langage humain'
    ],
    correctAnswer: 'A. Cela signifie que c’est un langage plus près du langage humain',
  },
  {
    questionText: 'Que veut dire SEM ?',
    options: [
      'A. Structural Equation Modeling', 
      'B. Scanning Electron Microscope', 
      'C. Search Engine Marketing'
    ],
    correctAnswer: 'C. Search Engine Marketing',
  },
  {
    questionText: 'Quels sont les langages de haut niveau parmi ceux-ci ?',
    options: [
      'A. Python', 
      'B. Ruby', 
      'C. Assembly'
    ],
    correctAnswer: ['A. Python', 'B. Ruby'],
  },
  {
    questionText: 'Que signifie include en PHP ?',
    options: [
      'A. Importer le contenu d’un fichier dans un script courant',
      'B. Exporter le contenu d’un fichier dans un script courant',
      'C. C’est une balise HTML'
    ],
    correctAnswer: 'A. Importer le contenu d’un fichier dans un script courant',
  },
  {
    questionText: "Lequel de ces langages est Backend ?",
    options: [
      'A. Java', 
      'B. JavaScript', 
      'C. CSS'
    ],
    correctAnswer: 'A. Java',
  },
  {
    questionText: 'Quelle est la différence entre HTML, CSS et JavaScript ?',
    options: [
      'A. HTML et JavaScript sont des langages de balisage tandis que CSS est un langage de programmation', 
      'B. JavaScript et CSS sont des langages de balisage tandis que HTML est un langage de programmation', 
      'C. HTML et CSS sont des langages de balisage tandis que JavaScript est un langage de programmation'
    ],
    correctAnswer: 'C. HTML et CSS sont des langages de balisage tandis que JavaScript est un langage de programmation',
  },
  {
    questionText: 'Quelle est la différence entre SEO et SEA ?',
    options: [
      'A. Le SEO est la publicité payante sur les moteurs de recherche, tandis que le SEA est l’optimisation des contenus pour les moteurs de recherche.', 
      'B. Le SEO est l’optimisation d’un site web pour les moteurs de recherche, visant à améliorer son classement dans les résultats naturels (organiques). Le SEA concerne les annonces payantes qui apparaissent en premier dans les résultats des moteurs de recherche.', 
      'C. Le SEO et le SEA sont deux termes qui désignent les techniques pour améliorer la performance des sites web sur les réseaux sociaux.'
    ],
    correctAnswer: 'B. Le SEO est l’optimisation d’un site web pour les moteurs de recherche, visant à améliorer son classement dans les résultats naturels (organiques). Le SEA concerne les annonces payantes qui apparaissent en premier dans les résultats des moteurs de recherche.',
  },
  {
    questionText: 'Quelle est la différence entre les méthodes GET et POST dans une requête HTTP ?',
    options: [
      'A. GET : Utilisée uniquement pour télécharger des fichiers depuis un serveur. Les données ne peuvent pas être envoyées avec cette méthode. POST : Utilisée uniquement pour télécharger des images depuis un serveur. Les données ne peuvent pas être envoyées avec cette méthode.', 
      'B. GET : Utilisée pour envoyer des données au serveur, souvent pour soumettre des formulaires. Les paramètres sont envoyés dans le corps de la requête. POST : Utilisée pour récupérer des données d’un serveur. Les paramètres sont envoyés dans l’URL de la requête.', 
      'C. GET : Utilisée pour récupérer des données d’un serveur. Les paramètres sont envoyés dans l’URL de la requête. POST : Utilisée pour envoyer des données au serveur, souvent pour soumettre des formulaires. Les paramètres sont envoyés dans le corps de la requête.'
    ],
    correctAnswer: 'C. GET : Utilisée pour récupérer des données d’un serveur. Les paramètres sont envoyés dans l’URL de la requête. POST : Utilisée pour envoyer des données au serveur, souvent pour soumettre des formulaires. Les paramètres sont envoyés dans le corps de la requête.',
  },
  {
    questionText: 'Quelle est la différence entre une base de données SQL et NoSQL ?',
    options: [
      'A. SQL : Utilise des fichiers texte pour stocker les données et ne nécessite pas de langage de requête particulier. Exemples : JSON, XML. NoSQL : Utilise uniquement des tables structurées avec des lignes et des colonnes, tout comme les bases de données SQL. Exemples : MySQL, PostgreSQL.', 
      'B. SQL : Utilise des tables structurées avec des lignes et des colonnes et le langage SQL pour gérer les données. Exemples : MySQL, PostgreSQL. NoSQL : Utilise des structures de données flexibles comme les documents, les graphes, les colonnes, ou les clés-valeurs. Exemples : MongoDB, Cassandra.',
      'C. SQL : Utilise un langage de programmation comme Python pour gérer les données. Exemples : SQLite, Oracle. NoSQL : Utilise des fichiers audio pour stocker les données. Exemples : MP3, WAV.'
    ],
    correctAnswer: 'B. SQL : Utilise des tables structurées avec des lignes et des colonnes et le langage SQL pour gérer les données. Exemples : MySQL, PostgreSQL. NoSQL : Utilise des structures de données flexibles comme les documents, les graphes, les colonnes, ou les clés-valeurs. Exemples : MongoDB, Cassandra.',
  },
];


const App = () => {
  // États pour gérer la question courante, le score, l'affichage du résultat, le statut de la réponse, et les réponses sélectionnées
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answerStatus, setAnswerStatus] = useState('');
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  // Randomisation des questions au chargement du composant
  useEffect(() => {
    shuffleQuestions();
  }, []);

  // Fonction pour mélanger les questions
  const shuffleQuestions = () => {
    questions.sort(() => Math.random() - 0.5);
  };

  // Fonction pour gérer la réponse de l'utilisateur
  const handleAnswer = (answer) => {
    const question = questions[currentQuestion];

    if (Array.isArray(question.correctAnswer)) {
      // Si la réponse correcte est un tableau (réponse multiple)
      if (selectedAnswers.includes(answer)) {
        setSelectedAnswers(selectedAnswers.filter(item => item !== answer)); // Décocher l'option si déjà sélectionnée
      } else {
        setSelectedAnswers([...selectedAnswers, answer]); // Ajouter l'option si sélectionnée
      }
    } else {
      // Réponse simple
      if (answer === question.correctAnswer) {
        setScore(score + 1);
        setAnswerStatus('Correct!');
      } else {
        setAnswerStatus('Incorrect');
      }
      goToNextQuestion();
    }
  };

  // Fonction pour vérifier les réponses multiples sélectionnées
  const checkMultipleAnswers = () => {
    const question = questions[currentQuestion];
    const correctAnswers = question.correctAnswer;

    // Vérification que toutes les réponses sélectionnées sont correctes
    const isCorrect = selectedAnswers.every(answer => correctAnswers.includes(answer)) && 
                      selectedAnswers.length === correctAnswers.length;

    if (isCorrect) {
      setScore(score + 1);
      setAnswerStatus('Correct!');
    } else {
      setAnswerStatus('Incorrect');
    }

    goToNextQuestion();
  };

  // Fonction pour passer à la question suivante ou afficher les résultats
  const goToNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    setSelectedAnswers([]); // Réinitialiser les réponses sélectionnées

    if (nextQuestion < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setAnswerStatus('');
      }, 1000);
    } else {
      setTimeout(() => {
        setShowResult(true);
      }, 1000);
    }
  };

  // Fonction pour afficher l'image correspondant au score final
  const renderResult = () => {
    const scoreRatio = score / questions.length;
    if (scoreRatio === 1.0) {
      return <img src={legendeImage} alt="Légende" />;
    } 
    else if (scoreRatio >=0.7){
      return <img src={felicitationImage} alt="Félicitations" />;
    } 
    else if (scoreRatio >= 0.5) {
      return <img src={bonnemoyenne} alt="bonne moyenne" />;
    } else {
      return <img src={tristeImage} alt="Triste" />;
    }
  };

  return (
    <div className="App">
      {showResult ? (
        <div className="result">
          <h1>Votre score est {score} sur {questions.length}</h1>
          {renderResult()}
        </div>
      ) : (
        <div>
          <Question
            question={questions[currentQuestion].questionText}
            options={questions[currentQuestion].options}
            onAnswer={handleAnswer}
          />
          {Array.isArray(questions[currentQuestion].correctAnswer) && (
            <button 
              onClick={checkMultipleAnswers}
              disabled={selectedAnswers.length !== questions[currentQuestion].correctAnswer.length}>
              Valider les réponses multiples
            </button>
          )}
        </div>
      )}
      <div className="status">{answerStatus}</div>
    </div>
  );
};

export default App;
