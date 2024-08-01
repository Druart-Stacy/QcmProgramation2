import React, { useState } from 'react';
import Question from './Question';
import './App.css';
import tristeImage from './img/larmeleon.png'; // Importez votre image
import felicitationImage from './img/arceus.jpg'; // Importez votre image

const questions = [
  {
    questionText: 'Q1: Qu’ est-ce que JavaScript?',
    options: ['A. Un language de programation', 
              'B.Une marque de gsm', 
              'C.Une ville'],
    correctAnswer: 'A. Un language de programation',
  },
  {
    questionText: 'Q2: Qu’ est-ce que Java?',
    options: ['A. Une marque de café', 
              'B. Un language de programation', 
              'C.La réponse C'],
    correctAnswer: 'B. Un language de programation',
  },

  {
    questionText: 'Q3: Comment déclarer-on une variable en JavasScript?',
    options: ['A. Nom de la variable', 
              'B. Avec le symbole $', 
              'C. “let” ou “const”'],
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
              'C. while condition \n // instructions'],
    correctAnswer: 'B. while (condition) {\r\n    // instructions à répéter\r\n}',
  },
  {
    questionText: 'Q7: Quelle framework n’est pas un framework js?',
    options: ['A.Angular', 
              'B.Laravel', 
              'C.ReactJS,'],
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
    options: ['A. Structural Equation Modeling', 
              'B. Scanning Electron Microscope', 
              'C. Search Engine Marketing'],
    correctAnswer: 'C. Search Engine Marketing',
  },
  {
    questionText: 'Q10: Quelle sont les languages de haut niveau parmis ceux-là?',
    options: ['A. Phyton', 
              'B. Ruby', 
              'C. Assembly'],
    correctAnswer: ['A. Phyton','B. Ruby']
  },
  {
    questionText: 'Q11: Que veux dire include en PHP?',
    options: ['A. Importer le contenu d’un fichier dans un script courant',
              'B. Exporter le contenu d’un fichier dans un script courant',
              'C.C’est une balise HTML ' ],
    correctAnswer: 'A. Importer le contenu d’un fichier dans un script courant',
  },
  {
    questionText: 'Q12: Le quel de ces language est Backend?',
    options: ['A. Java', 
              'B. JavaScript ', 
              'C. CSS'],
    correctAnswer: 'A. Java',
  },
  {
    questionText: 'Q13:Quel est la différence entre HTML CSS et JavaScript? ',
    options: ['A.HTML et JavaScript sont des language de balisage tanti que CSS un language de programation ', 
              'B.JavaScript et CSS sont des language de balisage tanti que HTML un language de programation', 
              'C.HTML et CSS sont des language de balisage tanti que Javascript un language de programation '],
    correctAnswer: 'C.HTML et CSS sont des language de balisage tanti que Javascript un language de programation ',
  },
  {
    questionText: 'Q14: Quel est la diference entre SEO et SEA?',
    options: ['A. Le SEO est la publicité payante sur les moteurs de recherche, tandis que le SEA est l optimisation des contenus pour les moteurs de recherche.', 
              'B. Le SEO est l optimisation d un site web pour les moteurs de recherche, visant à améliorer son classement dans les résultats naturels (organiques). Le SEA concerne les annonces payantes qui apparaissent en premier dans les résultats des moteurs de recherche.', 
              'C. Le SEO et le SEA sont deux termes qui désignent les techniques pour améliorer la performance des sites web sur les réseaux sociaux.'],
    correctAnswer: 'Le SEO est l optimisation d un site web pour les moteurs de recherche, visant à améliorer son classement dans les résultats naturels (organiques). Le SEA (Search Engine Advertising) concerne les annonces payantes qui apparaissent en premier dans les résultats des moteurs de recherche.',
  },
  {
    questionText: 'Q15: Quelle est la différence entre les méthodes GET et POST dans une requête HTTP ?',
    options: ['A. GET : Utilisée uniquement pour télécharger des fichiers depuis un serveur. Les données ne peuvent pas être envoyées avec cette méthode.POST : Utilisée uniquement pour télécharger des images depuis un serveur. Les données ne peuvent pas être envoyées avec cette méthode.', 
              'B. GET : Utilisée pour envoyer des données au serveur, souvent pour soumettre des formulaires. Les paramètres sont envoyés dans le corps de la requête.POST : Utilisée pour récupérer des données d un serveur. Les paramètres sont envoyés dans l URL de la requête.', 
              'C. GET : Utilisée pour récupérer des données d un serveur. Les paramètres sont envoyés dans l URL de la requête ,POST : Utilisée pour envoyer des données au serveur, souvent pour soumettre des formulaires. Les paramètres sont envoyés dans le corps de la requête.'],

    correctAnswer:'C. GET : Utilisée pour récupérer des données d un serveur. Les paramètres sont envoyés dans l URL de la requête ,POST : Utilisée pour envoyer des données au serveur, souvent pour soumettre des formulaires. Les paramètres sont envoyés dans le corps de la requête.'

  },
  {
    questionText: 'Q16: Quelle est la différence entre une base de données SQL et NoSQL ?',
    options: ['A. SQL : Utilise des fichiers texte pour stocker les données et ne nécessite pas de langage de requête particulier. Exemples : JSON, XML. NoSQL : Utilise uniquement des tables structurées avec des lignes et des colonnes, tout comme les bases de données SQL. Exemples : MySQL, PostgreSQL.', 
              'B. SQL : Utilise des tables structurées avec des lignes et des colonnes et le langage SQL pour gérer les données. Exemples : MySQL, PostgreSQL.NoSQL : Utilise des structures de données flexibles comme les documents, les graphes, les colonnes, ou les clés-valeurs. Exemples : MongoDB, Cassandra.',
              'C. SQL : Utilise un langage de programmation comme Python pour gérer les données. Exemples : SQLite, Oracle.NoSQL : Utilise des fichiers audio pour stocker les données. Exemples : MP3, WAV.'],
    correctAnswer: 'B. SQL : Utilise des tables structurées avec des lignes et des colonnes et le langage SQL pour gérer les données. Exemples : MySQL, PostgreSQL.NoSQL : Utilise des structures de données flexibles comme les documents, les graphes, les colonnes, ou les clés-valeurs. Exemples : MongoDB, Cassandra.',
  },
  {
    questionText: 'Q17: Qu est-ce que l AJAX et comment fonctionne-t-il ?',
    options: ['A. AJAX (Asynchronous JavaScript and XML) est une technique de développement web qui permet de mettre à jour des parties d une page web sans recharger la page entière. Elle utilise JavaScript pour envoyer des requêtes HTTP asynchrones et recevoir des données en arrière-plan.', 
              'B. AJAX (Automatic JavaScript and XML) est une technique qui permet de charger une page entière à chaque interaction utilisateur. Elle utilise JavaScript pour envoyer des requêtes HTTP synchrones et recharger la page entière chaque fois qu une nouvelle donnée est requise.', 
              'C. AJAX (Automated JavaScript and XML) est une technique qui permet de convertir automatiquement du texte en images. Elle utilise JavaScript pour transformer les données textuelles en fichiers image que le navigateur peut afficher.'],
    correctAnswer: 'A. AJAX (Asynchronous JavaScript and XML) est une technique de développement web qui permet de mettre à jour des parties d une page web sans recharger la page entière. Elle utilise JavaScript pour envoyer des requêtes HTTP asynchrones et recevoir des données en arrière-plan.',
  },
  {
    questionText: 'Q18: Que veut dire HTML ?',
    options: ['A. HyperText Markup Language', 
              'B. HyperText Marketing Language', 
              'C. sa veux rien dire'],
    correctAnswer: 'A. HyperText Markup Language',
  },
  {
    questionText: 'Q19: Que veut dire POO?',
    options: ['A. programmation objet obsolete', 
              'B. programmation orientée objet', 
              'C. programme orientée objet'],
    correctAnswer: 'B. programmation orientée objet',
  },
  {
    questionText: 'Q20:Qu est-ce que PHP ‘PEAR?',
    options: ['A. la réponse A', 
              'B. Poire', 
              'C. C est une extension du langage PHP lui-même.«Extension PHP et référentiel d applications».'],
    correctAnswer: 'C. C est une extension du langage PHP lui-même.«Extension PHP et référentiel d applications».',
  },
  {
    questionText: 'Q21: Pourquoi utilise-t-on le langage PHP ?',
    options: ['A. Pour te faire parler ,sa a fonctionner', 
              'B. Créer, écrire,chiffrer des données', 
              'C. Pour créer des interfaces utilisateur graphiques dans les applications mobiles.'],
    correctAnswer: 'B. Créer, écrire,chiffrer des données',
  },
  {
    questionText: 'Q22: quelle sont les types d erreur en PHP ?',
    options: ['A. les exceptions et les erreurs d exécution', 
              'B. les erreurs de syntaxe et les erreurs de logique', 
              'C. les avis, les avertissements et les erreurs fatales'],
    correctAnswer: 'C. les avis, les avertissements et les erreurs fatales',
  },
  {
    questionText: 'Q23: Quelle est la différence entre «==» et «===» en php ?',
    options: ['A. «==» compare uniquement les valeurs, tandis que «===» compare les valeurs et les types', 
              'B. «==» compare les valeurs et les types, tandis que «===» compare uniquement les valeurs', 
              'C. «==» compare les références des objets, tandis que «===» compare les valeurs des objets'],
    correctAnswer: 'A. «==» compare uniquement les valeurs, tandis que «===» compare les valeurs et les types',
  },
  {
    questionText: 'Q24: Quelle est la différence entre class et id en CSS ? ',
    options: ['A. *** ', 
              'B. class est utilisé pour appliquer des styles à plusieurs éléments qui partagent la même classe, tandis que id est utilisé pour appliquer des styles à un élément unique et doit être unique dans un document HTML. ', 
              'C. ***'],
    correctAnswer: 'B. class est utilisé pour appliquer des styles à plusieurs éléments qui partagent la même classe, tandis que id est utilisé pour appliquer des styles à un élément unique et doit être unique dans un document HTML. ',
  },
  {
    questionText: 'Q25: Quelle est la fonction de la méthode fetch en JavaScript ?',
    options: ['A. La méthode fetch est utilisée pour effectuer des requêtes réseau pour obtenir des ressources (comme des données JSON) de manière asynchrone. ', 
              'B. ***', 
              'C. ***'],
    correctAnswer: 'A. La méthode fetch est utilisée pour effectuer des requêtes réseau pour obtenir des ressources (comme des données JSON) de manière asynchrone.',
  },
  {
    questionText: 'Q26:  Qu est-ce qu une API REST ? ',
    options: ['A. ***', 
              'B. ***', 
              'C. Une API REST (Representational State Transfer) est un style architectural pour les services web qui utilise les méthodes HTTP (GET, POST, PUT, DELETE) pour gérer les ressources.'],
    correctAnswer: 'C. Une API REST (Representational State Transfer) est un style architectural pour les services web qui utilise les méthodes HTTP (GET, POST, PUT, DELETE) pour gérer les ressources.',
  },
  {
    questionText: 'Q27: Qu est-ce que le DOMContentLoaded ? ',
    options: ['A. DOMContentLoaded est un événement qui se déclenche lorsque le document HTML a été complètement chargé et analysé, sans attendre les feuilles de style, les images et les sous-documents. ', 
              'B. ***', 
              'C. ***'],
    correctAnswer: 'A. DOMContentLoaded est un événement qui se déclenche lorsque le document HTML a été complètement chargé et analysé, sans attendre les feuilles de style, les images et les sous-documents.',
  },
  {
    questionText: 'Q28: Comment fonctionne le "Virtual DOM" dans React ? ',
    options: ['A. Le Virtual DOM est une représentation en mémoire du DOM réel. Lorsqu un composant React est mis à jour, React crée un Virtual DOM, compare cette nouvelle version avec la version précédente, et calcule les différences (diffing). Ensuite, il met à jour uniquement les parties du DOM réel qui ont changé, optimisant ainsi les performances.', 
              'B. ', 
              'C. '],
    correctAnswer: 'A. Le Virtual DOM est une représentation en mémoire du DOM réel. Lorsqu un composant React est mis à jour, React crée un Virtual DOM, compare cette nouvelle version avec la version précédente, et calcule les différences (diffing). Ensuite, il met à jour uniquement les parties du DOM réel qui ont changé, optimisant ainsi les performances.',
  },
  {
    questionText: 'Q29:  Qu est-ce que le "Content Security Policy" (CSP) ?',
    options: ['A. ***', 
              'B. ***', 
              'C. Le Content Security Policy (CSP) est une norme de sécurité qui aide à prévenir les attaques de type XSS (Cross-Site Scripting) en définissant des règles sur les sources autorisées pour les contenus (scripts, images, etc.) chargés sur une page web. '],
    correctAnswer: 'C. Le Content Security Policy (CSP) est une norme de sécurité qui aide à prévenir les attaques de type XSS (Cross-Site Scripting) en définissant des règles sur les sources autorisées pour les contenus (scripts, images, etc.) chargés sur une page web.',
  },
  {
    questionText: 'Q30: Qu est-ce que le "middleware" dans un framework backend comme Express.js ? ',
    options: ['A. ***', 
              'B. Le middleware dans un framework backend est une fonction qui a accès à l objet request (req), l objet response (res), et à la fonction next dans le cycle de requête-réponse. Le middleware peut exécuter du code, modifier les objets request et response, et terminer la requête ou passer au middleware suivant dans la pile.', 
              'C. ***'],
    correctAnswer: 'B. Le middleware dans un framework backend est une fonction qui a accès à l objet request (req), l objet response (res), et à la fonction next dans le cycle de requête-réponse. Le middleware peut exécuter du code, modifier les objets request et response, et terminer la requête ou passer au middleware suivant dans la pile.',
  },
  {
    questionText: 'Q31: Qu est-ce que la "sécurité des API" et quelles sont les meilleures pratiques ? ',
    options: ['A. *** ', 
              'B. La sécurité des API implique de protéger les interfaces de programmation contre les accès non autorisés et les attaques. Les meilleures pratiques incluent l utilisation de l authentification et de l autorisation (comme OAuth), le chiffrement des données en transit (TLS), la validation des entrées pour éviter les injections SQL, et la gestion des erreurs de manière sécurisée. ', 
              'C. ***'],
    correctAnswer: 'B. La sécurité des API implique de protéger les interfaces de programmation contre les accès non autorisés et les attaques. Les meilleures pratiques incluent l utilisation de l authentification et de l autorisation (comme OAuth), le chiffrement des données en transit (TLS), la validation des entrées pour éviter les injections SQL, et la gestion des erreurs de manière sécurisée.',
  },
  {
    questionText: 'Q32: Qu est-ce que la commande git rebase et comment diffère-t-elle de git merge ?',
    options: ['A. ***', 
              'B. La commande git rebase permet de déplacer ou de combiner une séquence de commits sur une autre branche. Contrairement à git merge, qui crée un commit de fusion pour combiner les modifications de deux branches, git rebase applique les commits d une branche sur la branche cible de manière linéaire. Cela peut rendre l historique plus propre, mais peut entraîner des conflits qui doivent être résolus au fur et à mesure du processus de rebasage. ', 
              'C. ***'],
    correctAnswer: 'B. La commande git rebase permet de déplacer ou de combiner une séquence de commits sur une autre branche. Contrairement à git merge, qui crée un commit de fusion pour combiner les modifications de deux branches, git rebase applique les commits d une branche sur la branche cible de manière linéaire. Cela peut rendre l historique plus propre, mais peut entraîner des conflits qui doivent être résolus au fur et à mesure du processus de rebasage.',
  },
  {
    questionText: 'Q33: Qu est-ce qu un "cherry-pick" en Git ? ',
    options: ['A. La commande git cherry-pick permet d appliquer un commit spécifique d une branche à une autre. Cela peut être utile pour intégrer des modifications spécifiques sans fusionner toute la branche source.  ', 
              'B. ', 
              'C. '],
    correctAnswer: 'A. La commande git cherry-pick permet d appliquer un commit spécifique d une branche à une autre. Cela peut être utile pour intégrer des modifications spécifiques sans fusionner toute la branche source. ',
  },
  {
    questionText: 'Q34: Qu est-ce que le "git bisect" et comment l utiliser pour trouver un bug ?',
    options: ['A. ***', 
              'B. ***', 
              'C. La commande git bisect est utilisée pour identifier le commit spécifique où un bug a été introduit. Git utilise une recherche binaire pour diviser l historique en morceaux plus petits et tester chaque morceau pour isoler le commit problématique.'],
    correctAnswer: 'C.La commande git bisect est utilisée pour identifier le commit spécifique où un bug a été introduit. Git utilise une recherche binaire pour diviser l historique en morceaux plus petits et tester chaque morceau pour isoler le commit problématique.',
  },
  {
    questionText: 'Q35: ',
    options: ['A. ', 
              'B. ', 
              'C. '],
    correctAnswer: '',
  },
  {
    questionText: 'Q36:Qu est-ce que Django et quelles sont ses principales fonctionnalités ? ',
    options: ['A. *** ', 
              'B. Django est un framework web open-source pour le langage Python, conçu pour simplifier la création de sites web dynamiques et complexes. Ses principales fonctionnalités incluent une ORM (Object-Relational Mapping) pour interagir avec les bases de données, un système de routage des URL, un moteur de templates pour générer des pages HTML, des outils de gestion de formulaires, et un système d authentification intégré. Django suit le principe "Don"t Repeat Yourself" (DRY) et vise à accélérer le développement tout en favorisant des pratiques de code propres et réutilisables.', 
              'C. *** '],
    correctAnswer: 'B. Django est un framework web open-source pour le langage Python, conçu pour simplifier la création de sites web dynamiques et complexes. Ses principales fonctionnalités incluent une ORM (Object-Relational Mapping) pour interagir avec les bases de données, un système de routage des URL, un moteur de templates pour générer des pages HTML, des outils de gestion de formulaires, et un système d authentification intégré. Django suit le principe "Don"t Repeat Yourself" (DRY) et vise à accélérer le développement tout en favorisant des pratiques de code propres et réutilisables.',
  },
  {
    questionText: 'Q37: ',
    options: ['A. ', 
              'B. ', 
              'C. '],
    correctAnswer: '',
  },
  {
    questionText: 'Q38: ',
    options: ['A. ', 
              'B. ', 
              'C. '],
    correctAnswer: '',
  },
  {
    questionText: 'Q39: Comment installer Django',
    options: ['A. ', 
              'B. ', 
              'C. Pour installer Django, tu peux utiliser pip, le gestionnaire de paquets Python. Exécute la commande pip install django'],
    correctAnswer: 'C. Pour installer Django, tu peux utiliser pip, le gestionnaire de paquets Python. Exécute la commande pip install django',
  },
  {
    questionText: 'Q40: ',
    options: ['A. ', 
              'B. ', 
              'C. '],
    correctAnswer: '',
  },
  {
    questionText: 'Q41:Que fait la commende onkeypress ',
    options: ['A. ***', 
              'B. Elle permet de déclencer une action par le clic', 
              'C. ***'],
    correctAnswer: 'B. Elle permet de déclencer une action par le clic',
  },
  {
    questionText: 'Q42:Quel est la difference entre un site dynamique et un site statique? ',
    options: ['A. ', 
              'B. ', 
              'C. '],
    correctAnswer: '',
  },
  {
    questionText: 'Q43: Quelle est la structure typique d un script PHP ? ',
    options: ['A.*** ', 
              'B. <?php echo "Bonjour, monde!"; ?> ', 
              'C. ***'],
    correctAnswer: 'B. <?php echo "Bonjour, monde!"; ?> ',
  },
  {
    questionText: 'Q44: ',
    options: ['A. ', 
              'B. ', 
              'C. '],
    correctAnswer: '',
  },
  {
    questionText: 'Q45: ',
    options: ['A. ', 
              'B. ', 
              'C. '],
    correctAnswer: '',
  },
  {
    questionText: 'Q46: ',
    options: ['A. ', 
              'B. ', 
              'C. '],
    correctAnswer: '',
  },
  {
    questionText: 'Q47: ',
    options: ['A. ', 
              'B. ', 
              'C. '],
    correctAnswer: '',
  },
  {
    questionText: 'Q48: ',
    options: ['A. ', 
              'B. ', 
              'C. '],
    correctAnswer: '',
  },
  {
    questionText: 'Q49: ',
    options: ['A. ', 
              'B. ', 
              'C. '],
    correctAnswer: '',
  },
  {
    questionText: 'Q50: ',
    options: ['A. ', 
              'B. ', 
              'C. '],
    correctAnswer: '',
  },
]

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (answer) => {
    const correctAnswer = questions[currentQuestion].correctAnswer;

    // Check if the answer is correct (handle multiple correct answers)
    if (Array.isArray(correctAnswer)) {
      if (correctAnswer.includes(answer)) {
        setScore(score + 1);
      }
    } else if (answer === correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const getScoreMessage = () => {
    if (score >= 35) {
      return {
        message: 'Félicitations ! Vous avez bien réussi.',
        image: felicitationImage,
      };
    } else if (score >= 25) {
      return {
        message: 'Bonne moyenne ! Vous pouvez encore vous améliorer.',
        image: '', // You can choose an appropriate image for this case
      };
    } else {
      return {
        message: 'Essayez encore ! Vous pouvez faire mieux.',
        image: tristeImage,
      };
    }
  };

  const { message, image } = getScoreMessage();

  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          <h1>Vous avez complété le quiz!</h1>
          <p>Votre score est de {score} sur {questions.length}.</p>
          <p>{message}</p>
          {image && <img src={image} alt="Score" />}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].options.map((option) => (
              <button onClick={() => handleAnswerOptionClick(option)} key={option}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;