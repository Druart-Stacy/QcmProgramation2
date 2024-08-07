import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import tristeImage from './img/larmeleon.png';
import bonnemoyenne from './img/porigon2.jpg';
import felicitationImage from './img/mackognieur.png';
import legendeImage from './img/arceus.jpg';
import { Link } from 'react-router-dom';
import HomePage from './HomePage'; // Adjust the path if needed

const questions = [
  {
    questionText: 'Qu’est-ce que JavaScript ?',
    options: [
      'A. Un langage de programmation',
      'B. Une marque de gsm',
      'C. Une ville'
    ],
    correctAnswer: 'A. Un langage de programmation',
  },
  {
    questionText: 'Qu’est-ce que Java ?',
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
      'C. “let” ou “const”'
    ],
    correctAnswer: 'C. “let” ou “const”',
  },
  {
    questionText: 'Quelle est la différence entre LET et CONST ?',
    options: [
      'A. “let” est utilisé pour déclarer une variable locale à un bloc d’instructions. “const” est utilisé pour déclarer une variable constante qui ne peut pas être réaffectée.',
      'B. “const” est utilisé pour déclarer une variable locale à un bloc d’instructions. “let” est utilisé pour déclarer une variable constante qui ne peut pas être réaffectée.',
      'C. Aucune différence entre les deux'
    ],
    correctAnswer: 'A. “let” est utilisé pour déclarer une variable locale à un bloc d’instructions. “const” est utilisé pour déclarer une variable constante qui ne peut pas être réaffectée.',
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
      'A. while (condition)\r\n 	// instruction',
      'B. while (condition) {\r\n    // instructions à répéter\r\n}',
      'C. while condition \n // instructions'
    ],
    correctAnswer: 'B. while (condition) {\r\n    // instructions à répéter\r\n}',
  },
  {
    questionText: 'Quel framework n’est pas un framework JavaScript ?',
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
      'A. Ça veut dire que c’est un langage plus près du langage humain',
      'B. Ça veut dire que c’est un langage difficile à apprendre',
      'C. Ça veut dire que c’est un langage plus loin du langage humain'
    ],
    correctAnswer: 'A. Ça veut dire que c’est un langage plus près du langage humain',
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
    questionText: 'Que veut dire include en PHP ?',
    options: [
      'A. Importer le contenu d’un fichier dans un script courant',
      'B. Exporter le contenu d’un fichier dans un script courant',
      'C. C’est une balise HTML'
    ],
    correctAnswer: 'A. Importer le contenu d’un fichier dans un script courant',
  },
  {
    questionText: 'Lequel de ces langages est Backend ?',
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
  {
    questionText: 'Qu’est-ce que l’AJAX et comment fonctionne-t-il ?',
    options: [
      'A. AJAX (Asynchronous JavaScript and XML) est une technique de développement web qui permet de mettre à jour des parties d’une page web sans recharger la page entière. Elle utilise JavaScript pour envoyer des requêtes HTTP asynchrones et recevoir des données en arrière-plan.',
      'B. AJAX (Automatic JavaScript and XML) est une technique qui convertit automatiquement le code JavaScript en XML. Elle est utilisée pour simplifier la communication entre les serveurs et les bases de données.',
      'C. AJAX (Asynchronous JavaScript and XML) est une technique qui permet de convertir les fichiers XML en fichiers HTML de manière synchrone. Elle est principalement utilisée pour rendre les pages web plus statiques.'
    ],
    correctAnswer: 'A. AJAX (Asynchronous JavaScript and XML) est une technique de développement web qui permet de mettre à jour des parties d’une page web sans recharger la page entière. Elle utilise JavaScript pour envoyer des requêtes HTTP asynchrones et recevoir des données en arrière-plan.',
  },
  {
    questionText: 'Qu’est-ce que le DOM en JavaScript et comment interagir avec lui ?',
    options: [
      'A. Le DOM (Document Object Model) est une représentation en mémoire d’un document HTML ou XML. Il permet de manipuler dynamiquement la structure, le contenu et le style d’une page web en utilisant JavaScript.',
      'B. Le DOM (Document Object Model) est une technique de compression des fichiers HTML et XML. Elle permet de réduire la taille des documents et d’optimiser leur transfert sur le web.',
      'C. Le DOM (Document Object Model) est un outil de débogage pour les développeurs web. Il permet d’identifier et de corriger les erreurs dans le code JavaScript.'
    ],
    correctAnswer: 'A. Le DOM (Document Object Model) est une représentation en mémoire d’un document HTML ou XML. Il permet de manipuler dynamiquement la structure, le contenu et le style d’une page web en utilisant JavaScript.',
  },
  {
    questionText: 'Comment créer une fonction en JavaScript et comment l’appeler ?',
    options: [
      'A. Pour créer une fonction en JavaScript, on utilise le mot-clé “function” suivi du nom de la fonction, de parenthèses et d’accolades. On appelle la fonction en écrivant son nom suivi de parenthèses. Exemple : function maFonction() { // code de la fonction } maFonction();',
      'B. Pour créer une fonction en JavaScript, on utilise le mot-clé “func” suivi du nom de la fonction, de crochets et d’accolades. On appelle la fonction en écrivant son nom suivi de crochets. Exemple : func maFonction[] { // code de la fonction } maFonction[];',
      'C. Pour créer une fonction en JavaScript, on utilise le mot-clé “function” suivi du nom de la fonction, de crochets et de parenthèses. On appelle la fonction en écrivant son nom suivi de crochets. Exemple : function maFonction[] { // code de la fonction } maFonction[];'
    ],
    correctAnswer: 'A. Pour créer une fonction en JavaScript, on utilise le mot-clé “function” suivi du nom de la fonction, de parenthèses et d’accolades. On appelle la fonction en écrivant son nom suivi de parenthèses. Exemple : function maFonction() { // code de la fonction } maFonction();',
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      userAnswers: [],
      showResults: false,
      score: 0,
      name: '',
      isFormSubmitted: false,
      showQuiz: false,
      formErrors: {},
    };
  }

  handleOptionClick = (option) => {
    const { currentQuestion, userAnswers } = this.state;
    const updatedAnswers = [...userAnswers, option];
    this.setState({
      userAnswers: updatedAnswers,
      currentQuestion: currentQuestion + 1,
    }, () => {
      if (this.state.currentQuestion === questions.length) {
        this.calculateScore();
        this.setState({ showResults: true });
      }
    });
  }

  calculateScore = () => {
    const { userAnswers } = this.state;
    let score = 0;
    questions.forEach((question, index) => {
      if (Array.isArray(question.correctAnswer)) {
        const isCorrect = question.correctAnswer.every(answer => userAnswers[index].includes(answer));
        if (isCorrect) {
          score += 1;
        }
      } else if (userAnswers[index] === question.correctAnswer) {
        score += 1;
      }
    });
    this.setState({ score });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { name } = this.state;
    const errors = {};
    if (!name) {
      errors.name = 'Le nom est requis';
    }
    if (Object.keys(errors).length === 0) {
      this.setState({ isFormSubmitted: true, showQuiz: true, formErrors: {} });
    } else {
      this.setState({ formErrors: errors });
    }
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { currentQuestion, showResults, score, name, isFormSubmitted, showQuiz, formErrors } = this.state;

    if (!isFormSubmitted) {
      return (
        <div className="form-container">
          <h2>Bienvenue ! Veuillez entrer votre nom pour commencer le quiz</h2>
          <form onSubmit={this.handleFormSubmit}>
            <label>
              Nom :
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleInputChange}
              />
            </label>
            {formErrors.name && <div className="error">{formErrors.name}</div>}
            <button type="submit">Commencer le quiz</button>
          </form>
        </div>
      );
    }

    if (showQuiz) {
      if (showResults) {
        let resultImage = '';
        let resultMessage = '';

        if (score < 8) {
          resultImage = tristeImage;
          resultMessage = `Dommage, ${name} ! Vous pouvez toujours vous améliorer. Score: ${score}/${questions.length}`;
        } else if (score < 14) {
          resultImage = bonnemoyenne;
          resultMessage = `Bon travail, ${name} ! Vous avez une bonne moyenne. Score: ${score}/${questions.length}`;
        } else if (score < 18) {
          resultImage = felicitationImage;
          resultMessage = `Félicitations, ${name} ! Vous avez fait un excellent travail. Score: ${score}/${questions.length}`;
        } else {
          resultImage = legendeImage;
          resultMessage = `Légendaire, ${name} ! Vous êtes un maître du quiz. Score: ${score}/${questions.length}`;
        }

        return (
          <div className="result-container">
            <h2>Résultats</h2>
            <img src={resultImage} alt="Résultat" />
            <p>{resultMessage}</p>
          </div>
        );
      }

      const currentQuestionObj = questions[currentQuestion];

      return (
        <div className="quiz-container">
          <h2>Question {currentQuestion + 1} sur {questions.length}</h2>
          <p>{currentQuestionObj.questionText}</p>
          <div className="options-container">
            {currentQuestionObj.options.map((option, index) => (
              <button key={index} onClick={() => this.handleOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      );
    }

    return null;
  }
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/HomePage" element={<HomePage />} />
        
      </Routes>
    </Router>
  );
}

export default AppWrapper;
