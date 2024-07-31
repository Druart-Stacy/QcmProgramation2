import React, { useState } from 'react';
import Question from './Question';

const questions = [
  {
    questionText: 'Q1: Qu’ est-ce que JavaScript?',
    options: ['A. Un language de programation', 'B.Une marque de gsm', 'C.Une ville'],
    correctAnswer: 'A. Un language de programation',
  },
  {
    questionText: 'Q2: Qu’ est-ce que Java?',
    options: ['A. Une marque de café', 'B. Un language de programation', 'C.La réponse C'],
    correctAnswer: 'B. Un language de programation',
  },

  {
    questionText: 'Q3: Comment déclarer-on une variable en JavasScript?',
    options: ['A. Nom de la variable', 'B. Avec le symbole $', 'C. “let” ou “const”'],
    correctAnswer: 'C. “let” ou “const”',
  },

  {
    questionText: 'Q4: Quelle est la difference entre LET et CONST?',
    options: ['A. “let” est utilisé pour déclarer une variable locale à un bloc d’instructions. “const” est utilisé pour déclarer une variable constante qui ne peut pas être réaffectée.', 
              'B. “const” est utilisé pour déclarer une variable locale à un bloc d’instructions. “let” est utilisé pour déclarer une variable constante qui ne peut pas être réaffectée.',
              'C. Aucune différence entre les 2'],
    correctAnswer: 'A. “let” est utilisé pour déclarer une variable locale à un bloc d’instructions. “const” est utilisé pour déclarer une variable constante qui ne peut pas être réaffectée.',
  },
  {
    questionText: 'Q5: Comment utiliser des commentaire en js?',
    options: ['A. /**/',  
              'B. //',
              'C. --'],
    correctAnswer: 'B. //',
  },
  {
    questionText: 'Q6: Comment effectuer une boucle while en js?',
    options: ['A. while (condition)\r\n 	//instruction',  
      'B. while (condition) {\r\n    // instructions à répéter\r\n}',
       ],
    correctAnswer: 'B. while (condition) {\r\n    // instructions à répéter\r\n}',
  },
  {
    questionText: 'Q7: Quelle framework n’est pas un framework js?',
    options: ['A.Angular', 'B.Laravel', 'C.ReactJS,'],
    correctAnswer: 'B.Laravel',
  },
  {
    questionText: 'Q8: Que veut dire language de haut niveau?',
    options: ['A. Sa veux dire que c’est un language plus près du language humain', 
              'B. Sa veux dire que c’est un language difficile à aprendre', 
              'C. Sa veux dire que c’est un language plus loin du language humain'],
    correctAnswer: 'A. Sa veux dire que c’est un language plus près du language humain',
  },
  {
    questionText: 'Q9: Que veut dire SEM?',
    options: ['A. Structural Equation Modeling', 'B. Scanning Electron Microscope', 'C. Search Engine Marketing'],
    correctAnswer: 'C. Search Engine Marketing',
  },
  {
    questionText: 'Q10: Quelle sont les language de haut niveau parmis ceux-là?',
    options: ['A. Phyton', 'B. Ruby', 'C. Assembly'],
    correctAnswer: ['A. Phyton','B. Ruby']
  },
  {
    questionText: 'Q11: Que veux dire include en PHP?',
    options: ['A. Importer le contenu d’un fichier dans un script courant','B. Exporter le contenu d’un fichier dans un script courant','C.C’est une balise HTML ' ],
    correctAnswer: 'A. Importer le contenu d’un fichier dans un script courant',
  },
  {
    questionText: 'Q12: Le quel de ces language est Backend?',
    options: ['A. Java', 'B. JavaScript ', 'C. CSS'],
    correctAnswer: 'A. Java',
  },
  {
    questionText: 'Q13:Quel est la différence entre HTML CSS et JavaScript? ',
    options: ['A.HTML et JavaScript sont des language de balisage tanti que CSS un language de programation ', 'B.JavaScript et CSS sont des language de balisage tanti que HTML un language de programation', 'C.HTML et CSS sont des language de balisage tanti que Javascript un language de programation '],
    correctAnswer: 'C.HTML et CSS sont des language de balisage tanti que Javascript un language de programation ',
  },
  {
    questionText: 'Q14: Quel est la diference entre SEO et SEA?',
    options: ['', 
      'B. Le SEO (Search Engine Optimization) est l optimisation d un site web pour les moteurs de recherche, visant à améliorer son classement dans les résultats naturels (organiques). Le SEA (Search Engine Advertising) concerne les annonces payantes qui apparaissent en premier dans les résultats des moteurs de recherche.', 
      '”'],
    correctAnswer: 'Le SEO (Search Engine Optimization) est l optimisation d un site web pour les moteurs de recherche, visant à améliorer son classement dans les résultats naturels (organiques). Le SEA (Search Engine Advertising) concerne les annonces payantes qui apparaissent en premier dans les résultats des moteurs de recherche.',
  },
  {
    questionText: 'Q15: Quelle est la différence entre les méthodes GET et POST dans une requête HTTP ?',
    options: ['GET : Utilisée uniquement pour télécharger des fichiers depuis un serveur. Les données ne peuvent pas être envoyées avec cette méthode.POST : Utilisée uniquement pour télécharger des images depuis un serveur. Les données ne peuvent pas être envoyées avec cette méthode.', 
      'GET : Utilisée pour envoyer des données au serveur, souvent pour soumettre des formulaires. Les paramètres sont envoyés dans le corps de la requête.POST : Utilisée pour récupérer des données d un serveur. Les paramètres sont envoyés dans l URL de la requête.', 
      'C. GET : Utilisée pour récupérer des données d un serveur. Les paramètres sont envoyés dans l URL de la requête ,POST : Utilisée pour envoyer des données au serveur, souvent pour soumettre des formulaires. Les paramètres sont envoyés dans le corps de la requête.'],

    correctAnswer:  'C. GET : Utilisée pour récupérer des données d un serveur. Les paramètres sont envoyés dans l URL de la requête ,POST : Utilisée pour envoyer des données au serveur, souvent pour soumettre des formulaires. Les paramètres sont envoyés dans le corps de la requête.'

  },
  {
    questionText: 'Q16: Quelle est la différence entre une base de données SQL et NoSQL ?',
    options: ['SQL : Utilise des fichiers texte pour stocker les données et ne nécessite pas de langage de requête particulier. Exemples : JSON, XML. NoSQL : Utilise uniquement des tables structurées avec des lignes et des colonnes, tout comme les bases de données SQL. Exemples : MySQL, PostgreSQL.', 
      'SQL : Utilise des tables structurées avec des lignes et des colonnes et le langage SQL pour gérer les données. Exemples : MySQL, PostgreSQL.NoSQL : Utilise des structures de données flexibles comme les documents, les graphes, les colonnes, ou les clés-valeurs. Exemples : MongoDB, Cassandra.',
      'SQL : Utilise un langage de programmation comme Python pour gérer les données. Exemples : SQLite, Oracle.NoSQL : Utilise des fichiers audio pour stocker les données. Exemples : MP3, WAV.'],
    correctAnswer: 'SQL : Utilise des tables structurées avec des lignes et des colonnes et le langage SQL pour gérer les données. Exemples : MySQL, PostgreSQL.NoSQL : Utilise des structures de données flexibles comme les documents, les graphes, les colonnes, ou les clés-valeurs. Exemples : MongoDB, Cassandra.',
  },
  {
    questionText: 'Q17: Qu est-ce que l AJAX et comment fonctionne-t-il ?',
    options: ['A. AJAX (Asynchronous JavaScript and XML) est une technique de développement web qui permet de mettre à jour des parties d une page web sans recharger la page entière. Elle utilise JavaScript pour envoyer des requêtes HTTP asynchrones et recevoir des données en arrière-plan.', 
      'AJAX (Automatic JavaScript and XML) est une technique qui permet de charger une page entière à chaque interaction utilisateur. Elle utilise JavaScript pour envoyer des requêtes HTTP synchrones et recharger la page entière chaque fois qu une nouvelle donnée est requise.', 
      'AJAX (Automated JavaScript and XML) est une technique qui permet de convertir automatiquement du texte en images. Elle utilise JavaScript pour transformer les données textuelles en fichiers image que le navigateur peut afficher.'],
    correctAnswer: 'A. AJAX (Asynchronous JavaScript and XML) est une technique de développement web qui permet de mettre à jour des parties d une page web sans recharger la page entière. Elle utilise JavaScript pour envoyer des requêtes HTTP asynchrones et recevoir des données en arrière-plan.',
  },
  {
    questionText: 'Q18: Que veut dire HTML ?',
    options: ['A. HyperText Markup Language', 'B. HyperText Marketing Language', 'C. sa veux rien dire'],
    correctAnswer: 'A. HyperText Markup Language',
  },
  {
    questionText: 'Q19: Que veut dire POO?',
    options: ['A. programmation objet obsolete', 'B. programmation orientée objet', 'C. programme orientée objet'],
    correctAnswer: 'B. programmation orientée objet',
  },
  {
    questionText: 'Q20:  Question 2: Qu est-ce que PHP ‘PEAR?',
    options: ['A. la réponse A', 'B. Poire', 'C. C est une extension du langage PHP lui-même.«Extension PHP et référentiel d applications».'],
    correctAnswer: 'C. C est une extension du langage PHP lui-même.«Extension PHP et référentiel d applications».',
  },
  {
    questionText: 'Q21: Pourquoi utilise-t-on le langage PHP ?',
    options: ['A. Pour te faire parler ,sa a fonctionner', 'B. Créer, écrire,chiffrer des données', '”'],
    correctAnswer: 'B. Créer, écrire,chiffrer des données',
  },
  {
    questionText: 'Q22: quelle sont les types d erreur en PHP ?',
    options: ['A. les exceptions et les erreurs d exécution', 'B. les erreurs de syntaxe et les erreurs de logique', 'C. les avis, les avertissements et les erreurs fatales'],
    correctAnswer: 'C. les avis, les avertissements et les erreurs fatales',
  },
  {
    questionText: 'Q23: Quelle est la différence entre «==» et «===» en php ?',
    options: ['A. «==» compare uniquement les valeurs, tandis que «===» compare les valeurs et les types', 
      'B. «==» compare les valeurs et les types, tandis que «===» compare uniquement les valeurs', 
      'C. «==» compare les références des objets, tandis que «===» compare les valeurs des objets'],
    correctAnswer: 'A. «==» compare uniquement les valeurs, tandis que «===» compare les valeurs et les types',
  },

// question a ajouter  




  // Ajoutez plus de questions ici
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false); // Nouvelle variable d'état pour suivre la fin du quiz

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(prevScore => prevScore + 1); // Utiliser la version précédente du score pour éviter les problèmes de synchronisation
    }

    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setQuizEnded(true); // Marquer le quiz comme terminé
    }
  };

  if (quizEnded) {
    return (
      <div className="App">
        <h1>QCM React</h1>
        <p>Quiz terminé ! Votre score est de {score}/{questions.length}</p>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>QCM React</h1>
      <Question
        question={questions[currentQuestionIndex]}
        onAnswerClick={handleAnswerOptionClick}
      />
    </div>
  );
}

export default App;