// App.js
import React, { useState } from 'react';
import Question from './Question';
import './App.css';
import tristeImage from './img/larmeleon.png';
import felicitationImage from './img/mackognieur.png';
import legendeImage from './img/arceus.jpg';
import bonnemoyenneImage from './img/porigon2.jpg';

// Définition des questions du quiz
 
// Questions
const questions = [
  {
    questionText: "Qu’ est-ce que JavaScript?",
    options: ["A. Un langage de programmation", 
              "B. Une marque de gsm", 
              "C. Une ville"],
    correctAnswer: "A. Un langage de programmation",
  },
  {
    questionText: "Qu’ est-ce que Java?",
    options: ["A. Une marque de café", 
              "B. Un langage de programmation", 
              "C. La réponse C"],
    correctAnswer: "B. Un langage de programmation",
  },
  {
    questionText: "Comment déclare-t-on une variable en JavaScript?",
    options: ["A. Nom de la variable", 
              "B. Avec le symbole $", 
              "C. “let” ou “const”"],
    correctAnswer: "C. “let” ou “const”",
  },
  {
    questionText: "Quelle est la différence entre LET et CONST?",
    options: ["A. 'let' déclare une variable locale à un bloc. 'const' déclare une constante non réaffectable.", 
              'B. "const" déclare une variable locale à un bloc. "let" déclare une constante non réaffectable.',
              'C. Aucune différence entre les 2'],
    correctAnswer: 'A. "let" déclare une variable locale à un bloc. "const" déclare une constante non réaffectable.',
  },
  {
    questionText: "Comment utiliser des commentaires en JavaScript?",
    options: ["A. /**/",  
              "B. //",
              "C. --"],
    correctAnswer: "B. //",
  },
  {
    questionText: "Comment effectuer une boucle while en JavaScript?",
    options: ["A. while (condition)\r\n 	//instruction",  
              "B. while (condition) {\r\n    // instructions à répéter\r\n}",
              "C. while condition \n // instructions"],
    correctAnswer: "B. while (condition) {\r\n    // instructions à répéter\r\n}",
  },
  {
    questionText: "Quel framework n’est pas un framework JavaScript?",
    options: ["A. Angular", 
              "B. Laravel", 
              "C. ReactJS"],
    correctAnswer: "B. Laravel",
  },
  {
    questionText: "Que signifie langage de haut niveau?",
    options: ["A. Plus proche du langage humain", 
              "B. Difficile à apprendre", 
              "C. Plus éloigné du langage humain"],
    correctAnswer: "A. Plus proche du langage humain",
  },
  {
    questionText: "Que signifie SEM?",
    options: ["A. Structural Equation Modeling", 
              "B. Scanning Electron Microscope", 
              "C. Search Engine Marketing"],
    correctAnswer: "C. Search Engine Marketing",
  },
  {
    questionText: "Comment créer une fonction en JavaScript?",
    options: ["A. function maFonction() {}", 
              "B. def maFonction() {}", 
              "C. createFunction() {}"],
    correctAnswer: "A. function maFonction() {}",
  },
  {
    questionText: "Quel est le format utilisé pour les requêtes et réponses HTTP?",
    options: ["A. XML", 
              "B. JSON", 
              "C. HTML"],
    correctAnswer: "B. JSON",
  },
  {
    questionText: "Qu’est-ce qu’une API?",
    options: ["A. Application Programming Interface", 
              "B. Application Program Interaction", 
              "C. Advanced Programming Interface"],
    correctAnswer: "A. Application Programming Interface",
  },
  {
    questionText: "Que signifie CSS?",
    options: ["A. Cascading Style Sheets", 
              "B. Computer Style System", 
              "C. Cascading Sheet Styles"],
    correctAnswer: "A. Cascading Style Sheets",
  },
  {
    questionText: "Quel attribut HTML est utilisé pour définir une image?",
    options: ["A. src", 
              "B. href", 
              "C. img"],
    correctAnswer: "A. src",
  },
  {
    questionText: "Qu’est-ce que Git?",
    options: ["A. Un langage de programmation", 
              "B. Un outil de gestion de versions", 
              "C. Un serveur web"],
    correctAnswer: "B. Un outil de gestion de versions",
  },
  {
    questionText: "Quel est l’objectif d’une base de données?",
    options: ["A. Stocker des données", 
              "B. Créer des fichiers", 
              "C. Gérer du code"],
    correctAnswer: "A. Stocker des données",
  },
  {
    questionText: "Qu’est-ce que Node.js?",
    options: ["A. Un navigateur web", 
              "B. Un environnement d’exécution pour JavaScript", 
              "C. Un langage de balisage"],
    correctAnswer: "B. Un environnement d’exécution pour JavaScript",
  },
  {
    questionText: "Que signifie HTTP?",
    options: ["A. HyperText Transfer Protocol", 
              "B. HyperText Transmission Protocol", 
              "C. Hyper Transfer Text Protocol"],
    correctAnswer: "A. HyperText Transfer Protocol",
  },
  {
    questionText: "Quel est le port par défaut pour HTTP?",
    options: ["A. 80", 
              "B. 443", 
              "C. 21"],
    correctAnswer: "A. 80",
  },
  {
    questionText: "Que fait la balise <title> en HTML?",
    options: ["A. Elle définit le titre de la page affiché dans l’onglet du navigateur", 
              "B. Elle crée un titre dans la page", 
              "C. Elle crée un lien"],
    correctAnswer: "A. Elle définit le titre de la page affiché dans l’onglet du navigateur",
  },
  {
    questionText: "Comment sélectionner un élément par son ID en JavaScript?",
    options: ['A. document.getElementById("id")', 
              'B. document.selectById("id")', 
              'C. getElement("#id")'],
    correctAnswer: 'A. document.getElementById("id")',
  },
  {
    questionText: "Quelle balise HTML est utilisée pour créer un formulaire?",
    options: ["A. <form>", 
              "B. <input>", 
              "C. <submit>"],
    correctAnswer: "A. <form>",
  },
  {
    questionText: "Quel est l’élément de base d’une page web?",
    options: ["A. <html>", 
              "B. <body>", 
              "C. <head>"],
    correctAnswer: "A. <html>",
  },
  {
    questionText: "Quels sont les langages de haut niveau parmi ceux-là?",
    options: ["A. Python", 
              "B. Ruby", 
              "C. Assembly"],
    correctAnswer: ["A. Python", "B. Ruby"],
  },
  {
    questionText: "Que signifie include en PHP?",
    options: ["A. Importer le contenu d’un fichier dans un script courant",
              "B. Exporter le contenu d’un fichier dans un script courant",
              "C. C’est une balise HTML"],
    correctAnswer: "A. Importer le contenu d’un fichier dans un script courant",
  },
  {
    questionText: "Lequel de ces langages est Backend?",
    options: ["A. Java", 
              "B. JavaScript", 
              "C. CSS"],
    correctAnswer: "A. Java",
  },
  {
    questionText: "Quelle est la différence entre HTML, CSS et JavaScript?",
    options: ["A. HTML et JavaScript sont des langages de balisage tandis que CSS est un langage de programmation", 
              "B. JavaScript et CSS sont des langages de balisage tandis que HTML est un langage de programmation", 
              "C. HTML et CSS sont des langages de balisage tandis que JavaScript est un langage de programmation"],
    correctAnswer: "C. HTML et CSS sont des langages de balisage tandis que JavaScript est un langage de programmation",
  },
  {
    questionText: "Quelle est la différence entre SEO et SEA?",
    options: ["A. Le SEO est la publicité payante sur les moteurs de recherche, tandis que le SEA est l’optimisation des contenus pour les moteurs de recherche", 
              "B. Le SEO optimise un site pour améliorer son classement organique. Le SEA concerne les annonces payantes en tête des résultats de recherche", 
              "C. Le SEO et le SEA sont des techniques pour améliorer la performance des sites web sur les réseaux sociaux"],
    correctAnswer: "B. Le SEO optimise un site pour améliorer son classement organique. Le SEA concerne les annonces payantes en tête des résultats de recherche",
  },
  {
    questionText: "Quelle est la différence entre les méthodes GET et POST dans une requête HTTP?",
    options: ["A. GET : Télécharge des fichiers, pas de données envoyées. POST : Télécharge des images, pas de données envoyées", 
              "B. GET : Envoie des données au serveur via le corps de la requête. POST : Récupère des données, paramètres dans l’URL", 
              "C. GET : Récupère des données, paramètres dans l’URL. POST : Envoie des données au serveur via le corps de la requête"],
    correctAnswer: "C. GET : Récupère des données, paramètres dans l’URL. POST : Envoie des données au serveur via le corps de la requête",
  },
  {
    questionText: "Que signifie HTML?",
    options: ["A. HyperText Markup Language", 
              "B. HyperText Markdown Language", 
              "C. Hyperlink Text Markup Language"],
    correctAnswer: "A. HyperText Markup Language",
  },
  {
    questionText: "Que veut dire POO?",
    options: ["A. Programmation Objet Obsolète", 
              "B. Programmation Orientée Objet", 
              "C. Programme Orienté Objet"],
    correctAnswer: "B. Programmation Orientée Objet",
  },
  {
    questionText: "Qu’est-ce que PHP PEAR?",
    options: ["A. La réponse A", 
              "B. Poire", 
              "C. C’est une extension du langage PHP lui-même, «Extension PHP et référentiel d’applications»."],
    correctAnswer: "C. C’est une extension du langage PHP lui-même, «Extension PHP et référentiel d’applications».",
  },
  {
    questionText: "Pourquoi utilise-t-on le langage PHP?",
    options: ["A. Pour te faire parler, ça a fonctionné", 
              "B. Créer, écrire, chiffrer des données", 
              "C. Pour créer des interfaces utilisateur graphiques dans les applications mobiles."],
    correctAnswer: "B. Créer, écrire, chiffrer des données",
  },
  {
    questionText: "Quels sont les types d’erreurs en PHP?",
    options: ["A. Les exceptions et les erreurs d’exécution", 
              "B. Les erreurs de syntaxe et les erreurs de logique", 
              "C. Les avis, les avertissements et les erreurs fatales"],
    correctAnswer: "C. Les avis, les avertissements et les erreurs fatales",
  },
    {
    questionText: "Que veut dire HTML ?",
      options: ["A. HyperText Markup Language", 
                "B. HyperText Marketing Language", 
                "C. Ça ne veut rien dire"],
      correctAnswer: "A. HyperText Markup Language",
    },
    {
      questionText: "Quelle est la différence entre «==» et «===» en PHP ?",
      options: ["A. «==» compare uniquement les valeurs, tandis que «===» compare les valeurs et les types", 
                "B. «==» compare les valeurs et les types, tandis que «===» compare uniquement les valeurs", 
                "C. «==» compare les références des objets, tandis que «===» compare les valeurs des objets"],
      correctAnswer: "A. «==» compare uniquement les valeurs, tandis que «===» compare les valeurs et les types",
    },
    {
      questionText: "Quelle est la différence entre class et id en CSS ?",
      options: ["A. Class est utilisé pour appliquer des styles à un élément unique, tandis que id est utilisé pour appliquer des styles à plusieurs éléments partageant le même identifiant.", 
                "B. **Class** applique des styles à plusieurs éléments partageant la même classe. **Id** applique des styles à un élément unique et doit être unique dans le document HTML.", 
                "C. Class et id sont utilisés de manière interchangeable pour appliquer des styles à un ou plusieurs éléments."],
      correctAnswer: "B. **Class** applique des styles à plusieurs éléments partageant la même classe. **Id** applique des styles à un élément unique et doit être unique dans le document HTML.",
    },
    {
      questionText: "Quelle est la fonction de la méthode fetch en JavaScript ?",
      options: ["A. La méthode fetch est utilisée pour effectuer des requêtes réseau pour obtenir des ressources (comme des données JSON) de manière asynchrone.", 
                "B. La méthode fetch est utilisée pour synchroniser les données entre différentes sessions d\"un utilisateur.", 
                "C. La méthode fetch est utilisée pour naviguer entre les pages web sans recharger la page."],
      correctAnswer: "A. La méthode fetch est utilisée pour effectuer des requêtes réseau pour obtenir des ressources (comme des données JSON) de manière asynchrone.",
    },
    {
      questionText: "Qu’est-ce qu’une API REST ?",
      options: ["A. Une API REST (Representational State Transfer) est un type de protocole de communication utilisé uniquement pour la transmission de données en temps réel entre les serveurs.", 
                "B. Une API REST (Representational State Transfer) est un logiciel qui automatise les processus de gestion des bases de données relationnelles.", 
                "C. Une API REST (Representational State Transfer) est un style architectural pour les services web qui utilise les méthodes HTTP (GET, POST, PUT, DELETE) pour gérer les ressources."],
      correctAnswer: "C. Une API REST (Representational State Transfer) est un style architectural pour les services web qui utilise les méthodes HTTP (GET, POST, PUT, DELETE) pour gérer les ressources.",
    },
    {
      questionText: "Qu’est-ce que le DOMContentLoaded ?",
      options: ["A. DOMContentLoaded est un événement qui se déclenche lorsque le document HTML a été complètement chargé et analysé, sans attendre les feuilles de style, les images et les sous-documents.", 
                "B. DOMContentLoaded est un événement qui se déclenche lorsque toutes les ressources de la page, y compris les images et les styles, ont été entièrement chargées.", 
                "C. DOMContentLoaded est un événement qui se déclenche lorsque le navigateur a terminé de rendre tous les éléments de la page, y compris les ressources externes comme les scripts et les images."],
      correctAnswer: "A. DOMContentLoaded est un événement qui se déclenche lorsque le document HTML a été complètement chargé et analysé, sans attendre les feuilles de style, les images et les sous-documents.",
    },
    {
      questionText: "Comment fonctionne le Virtual DOM dans React ?",
      options: ["A. Le Virtual DOM est une représentation en mémoire du DOM réel. Lorsqu\"un composant React est mis à jour, React crée un Virtual DOM, compare cette nouvelle version avec la version précédente, et calcule les différences (diffing). Ensuite, il met à jour uniquement les parties du DOM réel qui ont changé, optimisant ainsi les performances.", 
                "B. Le Virtual DOM est une version simplifiée du DOM réel qui permet à React de rendre tous les composants de la page sans effectuer de comparaisons ni d\"optimisations.", 
                "C. Le Virtual DOM est une couche de cache pour le DOM réel qui stocke des copies des éléments du DOM pour accélérer le rendu des pages, mais ne fait pas de comparaisons."],
      correctAnswer: "A. Le Virtual DOM est une représentation en mémoire du DOM réel. Lorsqu\"un composant React est mis à jour, React crée un Virtual DOM, compare cette nouvelle version avec la version précédente, et calcule les différences (diffing). Ensuite, il met à jour uniquement les parties du DOM réel qui ont changé, optimisant ainsi les performances.",
    },
    {
      questionText: "Quelle est la différence entre une base de données SQL et NoSQL ?",
      options: ["A. SQL : Tables structurées, requêtes SQL, ex. MySQL, PostgreSQL. NoSQL : Structures flexibles (documents, graphes, etc.), ex. MongoDB, Cassandra.",
                "B. SQL : Langage de programmation pour gestion des données, ex. SQLite, Oracle. NoSQL : Fichiers audio pour stocker les données, ex. MP3, WAV.",
                "C. SQL : Langage de programmation pour gestion des données, ex. SQLite, Oracle. NoSQL : Structures flexibles (documents, graphes, etc.), ex. MongoDB, Cassandra."
      ],
      correctAnswer: "A. SQL : Tables structurées, requêtes SQL, ex. MySQL, PostgreSQL. NoSQL : Structures flexibles (documents, graphes, etc.), ex. MongoDB, Cassandra."
    },
    {
      questionText: "Qu'est-ce que l'AJAX et comment fonctionne-t-il ?",
      options: ["A. AJAX permet de mettre à jour des parties d'une page web sans recharger toute la page, en utilisant JavaScript pour des requêtes HTTP asynchrones.",
                "B. AJAX recharge la page entière à chaque interaction via des requêtes HTTP synchrones en JavaScript.",
                "C. AJAX convertit automatiquement du texte en images en utilisant JavaScript."
      ],
      correctAnswer: "A. AJAX permet de mettre à jour des parties d'une page web sans recharger toute la page, en utilisant JavaScript pour des requêtes HTTP asynchrones."
    },
    {
      questionText: "Qu'est-ce que le 'Content Security Policy' (CSP) ?",
      options: [
        "A. Le Content Security Policy (CSP) est un mécanisme qui crypte les données échangées entre le serveur et le client pour protéger les informations sensibles contre les interceptions.",
        "B. Le Content Security Policy (CSP) est une norme de sécurité qui contrôle les permissions des utilisateurs sur un site web, définissant ce qu'ils peuvent voir et faire sur la page.",
        "C. Le Content Security Policy (CSP) est une norme de sécurité qui aide à prévenir les attaques de type XSS (Cross-Site Scripting) en définissant des règles sur les sources autorisées pour les contenus (scripts, images, etc.) chargés sur une page web."
      ],
      correctAnswer: "C. Le Content Security Policy (CSP) est une norme de sécurité qui aide à prévenir les attaques de type XSS (Cross-Site Scripting) en définissant des règles sur les sources autorisées pour les contenus (scripts, images, etc.) chargés sur une page web."
    },
    {
      "questionText": "Qu'est-ce que le 'middleware' dans un framework backend comme Express.js ?",
      "options": [
        "A. Le middleware dans un framework backend est une fonctionnalité qui permet de gérer les bases de données de manière plus efficace.",
        "B. Le middleware dans un framework backend est une fonction qui peut modifier les objets request et response, exécuter du code, et passer au middleware suivant ou terminer la requête.",
        "C. Le middleware dans un framework backend est un mécanisme pour optimiser les performances du serveur en réduisant le temps de réponse."
      ],
      "correctAnswer": "B. Le middleware dans un framework backend est une fonction qui peut modifier les objets request et response, exécuter du code, et passer au middleware suivant ou terminer la requête."
    },
    {
      "questionText": "Qu'est-ce que la 'sécurité des API' et quelles sont les meilleures pratiques ?",
      "options": [
        "A. La sécurité des API implique uniquement de protéger les données en utilisant des techniques de chiffrement comme SSL/TLS.",
        "B. La sécurité des API protège contre les accès non autorisés en utilisant l'authentification, le chiffrement (TLS), et la validation des entrées.",
        "C. La sécurité des API se concentre principalement sur la gestion des erreurs, sans considérer l'authentification ou le chiffrement."
      ],
      "correctAnswer": "B. La sécurité des API protège contre les accès non autorisés en utilisant l'authentification, le chiffrement (TLS), et la validation des entrées."
    }
  

    ];
    






function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (selectedAnswer) => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="app">
      {showResult ? (
        <div className="result-section">
          <h2>Votre score : {score} sur {questions.length}</h2>
          {score === questions.length && (
            <img src={legendeImage} alt="Légende" />
          )}
          {score > questions.length / 2 && score < questions.length && (
            <img src={bonnemoyenneImage} alt="Bonne moyenne" />
          )}
          {score <= questions.length / 2 && (
            <img src={tristeImage} alt="Triste" />
          )}
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;