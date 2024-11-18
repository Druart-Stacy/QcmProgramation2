// App.js
import React, { useState } from 'react';
// import Question from './Question';
import './App.css';
import tristeImage from './img/larmeleon.png';
// import felicitationImage from './img/mackognieur.png';
import legendeImage from './img/arceus.jpg';
import bonnemoyenneImage from './img/porigon2.jpg';

// Définition des questions du quiz
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
      questionText: "Qu'est-ce que le 'middleware' dans un framework backend comme Express.js ?",
      options: [
        "A. Le middleware dans un framework backend est une fonctionnalité qui permet de gérer les bases de données de manière plus efficace.",
        "B. Le middleware dans un framework backend est une fonction qui peut modifier les objets request et response, exécuter du code, et passer au middleware suivant ou terminer la requête.",
        "C. Le middleware dans un framework backend est un mécanisme pour optimiser les performances du serveur en réduisant le temps de réponse."
      ],
      correctAnswer: "B. Le middleware dans un framework backend est une fonction qui peut modifier les objets request et response, exécuter du code, et passer au middleware suivant ou terminer la requête."
    },
    {
      questionText: "Quelle est la différence principale entre HTML et HTML5 ?",
      options: [
        "A. HTML5 permet d'intégrer des API comme la géolocalisation et le stockage local, ce qui n'était pas possible avec HTML.",
        "B. HTML5 est juste une version plus rapide de HTML.",
        "C. HTML5 ne prend pas en charge les images et les vidéos contrairement à HTML."
      ],
      correctAnswer: "A. HTML5 permet d'intégrer des API comme la géolocalisation et le stockage local, ce qui n'était pas possible avec HTML."
    },
    {
      questionText: "Qu'est-ce que la 'sécurité des API' et quelles sont les meilleures pratiques ?",
      options: [
        "A. La sécurité des API implique uniquement de protéger les données en utilisant des techniques de chiffrement comme SSL/TLS.",
        "B. La sécurité des API protège contre les accès non autorisés en utilisant l'authentification, le chiffrement (TLS), et la validation des entrées.",
        "C. La sécurité des API se concentre principalement sur la gestion des erreurs, sans considérer l'authentification ou le chiffrement."
      ],
      correctAnswer: "B. La sécurité des API protège contre les accès non autorisés en utilisant l'authentification, le chiffrement (TLS), et la validation des entrées."
    },
    {
      questionText: "Qu'est-ce que le modèle MVC en développement web ?",
      options: [
        "A. Modèle-Vue-Contrôleur, une architecture permettant de séparer les données, la logique métier, et l'interface utilisateur.",
        "B. Modèle-Vue-Cache, un système utilisé pour améliorer les performances de l'application.",
        "C. Modèle-Vue-Contrôleur, une approche pour améliorer la sécurité des applications web."
      ],
      correctAnswer: "A. Modèle-Vue-Contrôleur, une architecture permettant de séparer les données, la logique métier, et l'interface utilisateur."
    },
    {
      questionText: "Qu'est-ce qu'une promesse (Promise) en JavaScript ?",
      options: [
        "A. Une promesse est une fonction qui gère les opérations synchrones.",
        "B. Une promesse est un objet qui représente l'achèvement ou l'échec d'une opération asynchrone.",
        "C. Une promesse est un mécanisme pour optimiser la mémoire en JavaScript."
      ],
      correctAnswer: "B. Une promesse est un objet qui représente l'achèvement ou l'échec d'une opération asynchrone."
    },
    {
      questionText: "À quoi sert le fichier 'package.json' dans un projet Node.js ?",
      options: [
        "A. Il sert à lister les dépendances et les scripts du projet.",
        "B. Il sert à configurer la base de données utilisée par le projet.",
        "C. Il sert à documenter le code du projet."
      ],
      correctAnswer: "A. Il sert à lister les dépendances et les scripts du projet."
    },
    {
      questionText: "Que signifie l'acronyme CSS ?",
      options: [
        "A. Central Style Sheets",
        "B. Cascading Style Sheets",
        "C. Code Styling Sheets"
      ],
      correctAnswer: "B. Cascading Style Sheets"
    },
    {
      questionText: "Qu'est-ce qu'une API RESTful ?",
      options: [
        "A. Une API qui suit les principes de l'architecture REST (Representational State Transfer).",
        "B. Une API conçue uniquement pour les bases de données relationnelles.",
        "C. Une API utilisée exclusivement pour créer des applications mobiles."
      ],
      correctAnswer: "A. Une API qui suit les principes de l'architecture REST (Representational State Transfer)."
    },
    {
      questionText: "Que fait la méthode 'fetch()' en JavaScript ?",
      options: [
        "A. Elle est utilisée pour exécuter du code côté serveur.",
        "B. Elle permet de faire des requêtes HTTP asynchrones pour obtenir des ressources sur le réseau.",
        "C. Elle est utilisée pour gérer les animations dans le DOM."
      ],
      correctAnswer: "B. Elle permet de faire des requêtes HTTP asynchrones pour obtenir des ressources sur le réseau."
    },
    {
      questionText: "Que signifie l'acronyme SQL ?",
      options: [
        "A. Simple Query Language",
        "B. Structured Query Language",
        "C. Server Query Language"
      ],
      correctAnswer: "B. Structured Query Language"
    },
    {
      questionText: "Que signifie le terme 'responsive design' ?",
      options: [
        "A. Un design qui adapte automatiquement le contenu d'une page web à la taille de l'écran de l'utilisateur.",
        "B. Un design uniquement compatible avec les navigateurs modernes.",
        "C. Un design utilisé pour accélérer le chargement des pages web."
      ],
      correctAnswer: "A. Un design qui adapte automatiquement le contenu d'une page web à la taille de l'écran de l'utilisateur."
    },
    {
      questionText: "Qu'est-ce qu'un 'token' dans l'authentification web ?",
      options: [
        "A. Un token est un cookie sécurisé utilisé pour identifier un utilisateur.",
        "B. Un token est un objet généré qui permet d'authentifier un utilisateur et de valider son identité dans un système sécurisé.",
        "C. Un token est un fichier contenant les identifiants d'un utilisateur."
      ],
      correctAnswer: "B. Un token est un objet généré qui permet d'authentifier un utilisateur et de valider son identité dans un système sécurisé."
    },
    {
      questionText: "Quel est le rôle de Node.js dans la programmation web ?",
      options: [
        "A. Node.js est un framework frontend pour créer des applications web.",
        "B. Node.js est un environnement d'exécution JavaScript qui permet de créer des applications côté serveur.",
        "C. Node.js est une bibliothèque utilisée pour gérer les animations sur le web."
      ],
      correctAnswer: "B. Node.js est un environnement d'exécution JavaScript qui permet de créer des applications côté serveur."
    },
    {
      questionText: "Qu'est-ce que l'ORM en développement web ?",
      options: [
        "A. ORM (Object Relational Mapping) est un outil qui permet de mapper les objets d'une application avec les tables d'une base de données relationnelle.",
        "B. ORM est un mécanisme pour gérer les authentifications des utilisateurs dans une application.",
        "C. ORM est une bibliothèque pour optimiser la sécurité des transactions dans une base de données."
      ],
      correctAnswer: "A. ORM (Object Relational Mapping) est un outil qui permet de mapper les objets d'une application avec les tables d'une base de données relationnelle."
    },
    {
      questionText: "Qu'est-ce que Webpack en développement web ?",
      options: [
        "A. Un gestionnaire de versions pour les projets frontend.",
        "B. Un module bundler qui permet de compiler des fichiers JavaScript et d'autres ressources pour les navigateurs.",
        "C. Un outil pour tester la performance des applications web."
      ],
      correctAnswer: "B. Un module bundler qui permet de compiler des fichiers JavaScript et d'autres ressources pour les navigateurs."
    },
    {
      questionText: "À quoi sert la méthode 'map()' en JavaScript ?",
      options: [
        "A. Elle transforme chaque élément d'un tableau en fonction d'une fonction donnée et retourne un nouveau tableau.",
        "B. Elle modifie un tableau en place en supprimant les éléments inutiles.",
        "C. Elle permet de rechercher un élément dans un tableau et de le supprimer."
      ],
      correctAnswer: "A. Elle transforme chaque élément d'un tableau en fonction d'une fonction donnée et retourne un nouveau tableau."
    },
    {
      questionText: "Que permet de faire la méthode 'push()' en JavaScript ?",
      options: [
        "A. Elle ajoute un élément au début d'un tableau.",
        "B. Elle supprime le dernier élément d'un tableau.",
        "C. Elle ajoute un ou plusieurs éléments à la fin d'un tableau."
      ],
      correctAnswer: "C. Elle ajoute un ou plusieurs éléments à la fin d'un tableau."
    },
    {
      questionText: "Qu'est-ce que l'asynchronisme en JavaScript ?",
      options: [
        "A. Un modèle de programmation où les opérations sont exécutées de manière séquentielle.",
        "B. Un modèle de programmation où certaines opérations peuvent être exécutées sans bloquer l'exécution du reste du code.",
        "C. Un mécanisme qui force JavaScript à attendre l'exécution d'une tâche avant de passer à la suivante."
      ],
      correctAnswer: "B. Un modèle de programmation où certaines opérations peuvent être exécutées sans bloquer l'exécution du reste du code."
    },
    {
      questionText: "Qu'est-ce que React.js ?",
      options: [
        "A. Un framework backend utilisé pour créer des serveurs web.",
        "B. Une bibliothèque JavaScript utilisée pour construire des interfaces utilisateur interactives.",
        "C. Un outil de gestion des bases de données NoSQL."
      ],
      correctAnswer: "B. Une bibliothèque JavaScript utilisée pour construire des interfaces utilisateur interactives."
    },
    {
      questionText: "Quelle est la fonction du tag 'meta' dans une page HTML ?",
      options: [
        "A. Définir la structure principale de la page web.",
        "B. Fournir des informations supplémentaires sur le document, comme l'encodage, l'auteur, ou la description.",
        "C. Insérer des scripts JavaScript dans le document HTML."
      ],
      correctAnswer: "B. Fournir des informations supplémentaires sur le document, comme l'encodage, l'auteur, ou la description."
    },
    {
      questionText: "Qu'est-ce qu'un 'cookie' en développement web ?",
      options: [
        "A. Un fichier stocké sur le serveur contenant les données des sessions utilisateur.",
        "B. Un petit fichier stocké sur le navigateur de l'utilisateur contenant des données relatives à la session ou à l'utilisateur.",
        "C. Un fichier utilisé pour améliorer la performance des applications web."
      ],
      correctAnswer: "B. Un petit fichier stocké sur le navigateur de l'utilisateur contenant des données relatives à la session ou à l'utilisateur."
    },
    {
      questionText: "Que signifie 'hoisting' en JavaScript ?",
      options: [
        "A. Le déplacement automatique des déclarations de variables et de fonctions en haut de leur contexte d'exécution.",
        "B. L'optimisation de la performance des requêtes HTTP dans le navigateur.",
        "C. Une technique utilisée pour optimiser l'usage de la mémoire dans une application JavaScript."
      ],
      correctAnswer: "A. Le déplacement automatique des déclarations de variables et de fonctions en haut de leur contexte d'exécution."
    },
    {
      questionText: "Qu'est-ce que le protocole WebSocket ?",
      options: [
        "A. Un protocole HTTP utilisé pour récupérer des données de manière asynchrone.",
        "B. Un protocole permettant une communication bidirectionnelle en temps réel entre un client et un serveur.",
        "C. Un protocole pour transférer des fichiers volumineux sur le web."
      ],
      correctAnswer: "B. Un protocole permettant une communication bidirectionnelle en temps réel entre un client et un serveur."
    },
    {
      questionText: "Que signifie l'acronyme API ?",
      options: [
        "A. Application Programming Interface.",
        "B. Automated Process Integration.",
        "C. Advanced Programming Interaction."
      ],
      correctAnswer: "A. Application Programming Interface."
    },
    {
      questionText: "Qu'est-ce que 'CORS' en développement web ?",
      options: [
        "A. Une méthode pour compresser les fichiers avant de les envoyer au client.",
        "B. Une politique de sécurité qui empêche un navigateur de charger des ressources depuis un autre domaine sans autorisation.",
        "C. Un système de cache pour améliorer la performance des requêtes HTTP."
      ],
      correctAnswer: "B. Une politique de sécurité qui empêche un navigateur de charger des ressources depuis un autre domaine sans autorisation."
    },
    {
      questionText: "Quelle est la fonction du tag '<script>' en HTML ?",
      options: [
        "A. Il est utilisé pour inclure du CSS dans une page HTML.",
        "B. Il est utilisé pour inclure ou exécuter des scripts JavaScript dans une page HTML.",
        "C. Il est utilisé pour inclure des images dans une page HTML."
      ],
      correctAnswer: "B. Il est utilisé pour inclure ou exécuter des scripts JavaScript dans une page HTML."
    }
    ];
    
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (selectedAnswer) => {
  const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
// si la réponse est correct faire +1 
    if (isCorrect) {
      setScore(score + 1);
    }
// passer à la question suivante si la question actuel est rempli
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className='app'>
      {showResult ? (
        // Section des résultats
        <div className='card mt-4'>
          <h2 className='text-center'>
          Votre score est de :
            <span className='d-block fs-3 '></span>
             {score} sur {questions.length}
          </h2>
          {score === questions.length && (
            <img src={legendeImage} className='img-fluid' alt="Légende" />
          )}
          {score > questions.length / 2 && score < questions.length && (
            <img src={bonnemoyenneImage} className='img-fluid' alt="Bonne moyenne" />
          )}
          {score <= questions.length / 2 && (
            <img src={tristeImage} className='img-fluid' alt="Triste" />
          )}
        </div>
      ) : (
        // Section des questions
        <div className='card mt-8'>
          {/* question-section */}
          <div className='display-3'>
            {/* question-count */}
            <div className='display-3'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            {/* question-text */}
            <div className='dispaly-3'>
              {questions[currentQuestion].questionText}
              
            </div>
            {/* question-section */}
            <div className="">
              {/* question-count */}
      {/* <div className="">
         <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div> */}
        {/* question-text */}
       {/* <div className="">
        {questions[currentQuestion].questionText}
       </div> */}
       {/* answer-section */}
       </div>
        <div className="card mt-4">
         {questions[currentQuestion].options.map((option, index) => (
          // navbar-toggler
           <button className='mb-2 w-100'

             key={index}
            onClick={() => handleAnswerOptionClick(option)}
         >
            {option}
          </button>
           ))}
          </div>
        </div>
            
          </div>
          
        
      )}
    </div>
  );
}

export default App;


    // <div className="app">
    //   {showResult ? (
    //     <div className="result-section">
    //       <h2>Votre score : {score} sur {questions.length}</h2>
    //       {score === questions.length && (
    //         <img src={legendeImage} alt="Légende" />
    //       )}
    //       {score > questions.length / 2 && score < questions.length && (
    //         <img src={bonnemoyenneImage} alt="Bonne moyenne" />
    //       )}
    //       {score <= questions.length / 2 && (
    //         <img src={tristeImage} alt="Triste" />
    //       )}
    //     </div>
    //   ) : (
    //     <div className="question-section">
    //       <div className="question-count">
    //         <span>Question {currentQuestion + 1}</span>/{questions.length}
    //       </div>
    //       <div className="question-text">
    //         {questions[currentQuestion].questionText}
    //       </div>
    //       <div className="answer-section">
    //         {questions[currentQuestion].options.map((option, index) => (
    //           <button
    //             key={index}
    //             onClick={() => handleAnswerOptionClick(option)}
    //           >
    //             {option}
    //           </button>
    //         ))}
    //       </div>
    //     </div>
    //   )}
    // </div>
//   );
// }
