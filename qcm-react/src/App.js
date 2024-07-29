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
    questionText: ' ',
    options: ['', '', '”'],
    correctAnswer: '',
  },
  {
    questionText: 'Q10: Quelle sont les language de haut niveau parmis ceux-là?',
    options: ['A. Phyton', 'B. Ruby', 'C. Assembly'],
    correctAnswer: ['A. Phyton','B. Ruby']
  },
  {
    questionText: 'Q11: Que veux dire include en PHP?',
    options: ['', '', '”'],
    correctAnswer: '',
  },
  {
    questionText: 'Q12: Quel est la différence entre HTML CSS et JavaScript?',
    options: ['', '', '”'],
    correctAnswer: '',
  },
  {
    questionText: 'Q13: Le quel de ces language est Backend?',
    options: ['', '', '”'],
    correctAnswer: '',
  },
  {
    questionText: '',
    options: ['', '', '”'],
    correctAnswer: '',
  },

  





(31, 11, 'A. Importer le contenu d’un fichier dans un script courant', 1),
(32, 11, 'B. Exporter le contenu d’un fichier dans un script courant', 0),
(33, 11, 'C.C’est une balise HTML ', 0),

(34, 12, 'A.HTML et JavaScript sont des language de balisage tanti que CSS un language de programation ', 0),
(35, 12, 'B.JavaScript et CSS sont des language de balisage tanti que HTML un language de programation', 0),
(36, 12, 'C.HTML et CSS sont des language de balisage tanti que Javascript un language de programation ', 1),

(37, 13, 'A. Java', 1),
(38, 13, 'B. JavaScript ', 0),
(39, 13, 'C. CSS', 0),

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