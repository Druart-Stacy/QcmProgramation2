import React, { useState } from 'react';
import Question from './Question';
import './App.css';
import tristeImage from './img/larmeleon.png';
import bonnemoyenne from './img/porigon2.jpg';
import felicitationImage from './img/mackognieur.png';
import legendeImage from './img/arceus.jpg';
const questions = [
  {
    questionText: 'Qu’ est-ce que JavaScript?',
    options: ['A. Un language de programation', 
              'B.Une marque de gsm', 
              'C.Une ville'],
    correctAnswer: 'A. Un language de programation',
  },
  {
    questionText: 'Qu’ est-ce que Java?',
    options: ['A. Une marque de café', 
              'B. Un language de programation', 
              'C.La réponse C'],
    correctAnswer: 'B. Un language de programation',
  },

  {
    questionText: 'Comment déclarer-on une variable en JavasScript?',
    options: ['A. Nom de la variable', 
              'B. Avec le symbole $', 
              'C. “let” ou “const”'],
    correctAnswer: 'C. “let” ou “const”',
  },

  {
    questionText: 'Quelle est la difference entre LET et CONST?',
    options: ['A. “let” est utilisé pour déclarer une variable locale à un bloc d’instructions. “const” est utilisé pour déclarer une variable constante qui ne peut pas être réaffectée.', 
              'B. “const” est utilisé pour déclarer une variable locale à un bloc d’instructions. “let” est utilisé pour déclarer une variable constante qui ne peut pas être réaffectée.',
              'C. Aucune différence entre les 2'],
    correctAnswer: 'A. “let” est utilisé pour déclarer une variable locale à un bloc d’instructions. “const” est utilisé pour déclarer une variable constante qui ne peut pas être réaffectée.',
  },
  {
    questionText: 'Comment utiliser des commentaire en js?',
    options: ['A. /**/',  
              'B. //',
              'C. --'],
    correctAnswer: 'B. //',
  },
  {
    questionText: 'Comment effectuer une boucle while en js?',
    options: ['A. while (condition)\r\n 	//instruction',  
              'B. while (condition) {\r\n    // instructions à répéter\r\n}',
              'C. while condition \n // instructions'],
    correctAnswer: 'B. while (condition) {\r\n    // instructions à répéter\r\n}',
  },
  {
    questionText: 'Quelle framework n’est pas un framework js?',
    options: ['A.Angular', 
              'B.Laravel', 
              'C.ReactJS,'],
    correctAnswer: 'B.Laravel',
  },
  {
    questionText: 'Que veut dire language de haut niveau?',
    options: ['A. Sa veux dire que c’est un language plus près du language humain', 
              'B. Sa veux dire que c’est un language difficile à aprendre', 
              'C. Sa veux dire que c’est un language plus loin du language humain'],
    correctAnswer: 'A. Sa veux dire que c’est un language plus près du language humain',
  },
  {
    questionText: 'Que veut dire SEM?',
    options: ['A. Structural Equation Modeling', 
              'B. Scanning Electron Microscope', 
              'C. Search Engine Marketing'],
    correctAnswer: 'C. Search Engine Marketing',
  },
  {
    questionText: 'Quelle sont les languages de haut niveau parmis ceux-là?',
    options: ['A. Phyton', 
              'B. Ruby', 
              'C. Assembly'],
    correctAnswer: ['A. Phyton','B. Ruby']
  },
  {
    questionText: 'Que veux dire include en PHP?',
    options: ['A. Importer le contenu d’un fichier dans un script courant',
              'B. Exporter le contenu d’un fichier dans un script courant',
              'C.C’est une balise HTML ' ],
    correctAnswer: 'A. Importer le contenu d’un fichier dans un script courant',
  },
  {
    questionText: 'Le quel de ces language est Backend?',
    options: ['A. Java', 
              'B. JavaScript ', 
              'C. CSS'],
    correctAnswer: 'A. Java',
  },
  {
    questionText: 'Quel est la différence entre HTML CSS et JavaScript? ',
    options: ['A.HTML et JavaScript sont des language de balisage tanti que CSS un language de programation ', 
              'B.JavaScript et CSS sont des language de balisage tanti que HTML un language de programation', 
              'C.HTML et CSS sont des language de balisage tanti que Javascript un language de programation '],
    correctAnswer: 'C.HTML et CSS sont des language de balisage tanti que Javascript un language de programation ',
  },
  {
    questionText: 'Quel est la diference entre SEO et SEA?',
    options: ['A. Le SEO est la publicité payante sur les moteurs de recherche, tandis que le SEA est l optimisation des contenus pour les moteurs de recherche.', 
              'B. Le SEO est l optimisation d un site web pour les moteurs de recherche, visant à améliorer son classement dans les résultats naturels (organiques). Le SEA concerne les annonces payantes qui apparaissent en premier dans les résultats des moteurs de recherche.', 
              'C. Le SEO et le SEA sont deux termes qui désignent les techniques pour améliorer la performance des sites web sur les réseaux sociaux.'],
    correctAnswer: 'Le SEO est l optimisation d un site web pour les moteurs de recherche, visant à améliorer son classement dans les résultats naturels (organiques). Le SEA (Search Engine Advertising) concerne les annonces payantes qui apparaissent en premier dans les résultats des moteurs de recherche.',
  },
  {
    questionText: 'Quelle est la différence entre les méthodes GET et POST dans une requête HTTP ?',
    options: ['A. GET : Utilisée uniquement pour télécharger des fichiers depuis un serveur. Les données ne peuvent pas être envoyées avec cette méthode.POST : Utilisée uniquement pour télécharger des images depuis un serveur. Les données ne peuvent pas être envoyées avec cette méthode.', 
              'B. GET : Utilisée pour envoyer des données au serveur, souvent pour soumettre des formulaires. Les paramètres sont envoyés dans le corps de la requête.POST : Utilisée pour récupérer des données d un serveur. Les paramètres sont envoyés dans l URL de la requête.', 
              'C. GET : Utilisée pour récupérer des données d un serveur. Les paramètres sont envoyés dans l URL de la requête ,POST : Utilisée pour envoyer des données au serveur, souvent pour soumettre des formulaires. Les paramètres sont envoyés dans le corps de la requête.'],

    correctAnswer:'C. GET : Utilisée pour récupérer des données d un serveur. Les paramètres sont envoyés dans l URL de la requête ,POST : Utilisée pour envoyer des données au serveur, souvent pour soumettre des formulaires. Les paramètres sont envoyés dans le corps de la requête.'

  },
  {
    questionText: 'Quelle est la différence entre une base de données SQL et NoSQL ?',
    options: ['A. SQL : Utilise des fichiers texte pour stocker les données et ne nécessite pas de langage de requête particulier. Exemples : JSON, XML. NoSQL : Utilise uniquement des tables structurées avec des lignes et des colonnes, tout comme les bases de données SQL. Exemples : MySQL, PostgreSQL.', 
              'B. SQL : Utilise des tables structurées avec des lignes et des colonnes et le langage SQL pour gérer les données. Exemples : MySQL, PostgreSQL.NoSQL : Utilise des structures de données flexibles comme les documents, les graphes, les colonnes, ou les clés-valeurs. Exemples : MongoDB, Cassandra.',
              'C. SQL : Utilise un langage de programmation comme Python pour gérer les données. Exemples : SQLite, Oracle.NoSQL : Utilise des fichiers audio pour stocker les données. Exemples : MP3, WAV.'],
    correctAnswer: 'B. SQL : Utilise des tables structurées avec des lignes et des colonnes et le langage SQL pour gérer les données. Exemples : MySQL, PostgreSQL.NoSQL : Utilise des structures de données flexibles comme les documents, les graphes, les colonnes, ou les clés-valeurs. Exemples : MongoDB, Cassandra.',
  },
  {
    questionText: 'Qu est-ce que l AJAX et comment fonctionne-t-il ?',
    options: ['A. AJAX (Asynchronous JavaScript and XML) est une technique de développement web qui permet de mettre à jour des parties d une page web sans recharger la page entière. Elle utilise JavaScript pour envoyer des requêtes HTTP asynchrones et recevoir des données en arrière-plan.', 
              'B. AJAX (Automatic JavaScript and XML) est une technique qui permet de charger une page entière à chaque interaction utilisateur. Elle utilise JavaScript pour envoyer des requêtes HTTP synchrones et recharger la page entière chaque fois qu une nouvelle donnée est requise.', 
              'C. AJAX (Automated JavaScript and XML) est une technique qui permet de convertir automatiquement du texte en images. Elle utilise JavaScript pour transformer les données textuelles en fichiers image que le navigateur peut afficher.'],
    correctAnswer: 'A. AJAX (Asynchronous JavaScript and XML) est une technique de développement web qui permet de mettre à jour des parties d une page web sans recharger la page entière. Elle utilise JavaScript pour envoyer des requêtes HTTP asynchrones et recevoir des données en arrière-plan.',
  },
  {
    questionText: 'Que veut dire HTML ?',
    options: ['A. HyperText Markup Language', 
              'B. HyperText Marketing Language', 
              'C. sa veux rien dire'],
    correctAnswer: 'A. HyperText Markup Language',
  },
  {
    questionText: 'Que veut dire POO?',
    options: ['A. programmation objet obsolete', 
              'B. programmation orientée objet', 
              'C. programme orientée objet'],
    correctAnswer: 'B. programmation orientée objet',
  },
  {
    questionText: 'Qu est-ce que PHP ‘PEAR?',
    options: ['A. la réponse A', 
              'B. Poire', 
              'C. C est une extension du langage PHP lui-même.«Extension PHP et référentiel d applications».'],
    correctAnswer: 'C. C est une extension du langage PHP lui-même.«Extension PHP et référentiel d applications».',
  },
  {
    questionText: 'Pourquoi utilise-t-on le langage PHP ?',
    options: ['A. Pour te faire parler ,sa a fonctionner', 
              'B. Créer, écrire,chiffrer des données', 
              'C. Pour créer des interfaces utilisateur graphiques dans les applications mobiles.'],
    correctAnswer: 'B. Créer, écrire,chiffrer des données',
  },
  {
    questionText: 'Quelle sont les types d erreur en PHP ?',
    options: ['A. les exceptions et les erreurs d exécution', 
              'B. les erreurs de syntaxe et les erreurs de logique', 
              'C. les avis, les avertissements et les erreurs fatales'],
    correctAnswer: 'C. les avis, les avertissements et les erreurs fatales',
  },
  {
    questionText: 'Quelle est la différence entre «==» et «===» en php ?',
    options: ['A. «==» compare uniquement les valeurs, tandis que «===» compare les valeurs et les types', 
              'B. «==» compare les valeurs et les types, tandis que «===» compare uniquement les valeurs', 
              'C. «==» compare les références des objets, tandis que «===» compare les valeurs des objets'],
    correctAnswer: 'A. «==» compare uniquement les valeurs, tandis que «===» compare les valeurs et les types',
  },
  {
    questionText: 'Quelle est la différence entre class et id en CSS ? ',
    options: ['A. A. class est utilisé pour appliquer des styles à un élément unique, tandis que id est utilisé pour appliquer des styles à plusieurs éléments qui partagent le même identifiant. ', 
              'B. class est utilisé pour appliquer des styles à plusieurs éléments qui partagent la même classe, tandis que id est utilisé pour appliquer des styles à un élément unique et doit être unique dans un document HTML. ', 
              'C. class et id sont utilisés de manière interchangeable pour appliquer des styles à un ou plusieurs éléments.'],
    correctAnswer: 'B. class est utilisé pour appliquer des styles à plusieurs éléments qui partagent la même classe, tandis que id est utilisé pour appliquer des styles à un élément unique et doit être unique dans un document HTML. ',
  },
  {
    questionText: 'Quelle est la fonction de la méthode fetch en JavaScript ?',
    options: ['A. La méthode fetch est utilisée pour effectuer des requêtes réseau pour obtenir des ressources (comme des données JSON) de manière asynchrone. ', 
              'B. La méthode fetch est utilisée pour synchroniser les données entre différentes sessions d un utilisateur.', 
              'C. La méthode fetch est utilisée pour naviguer entre les pages web sans recharger la page.'],
    correctAnswer: 'A. La méthode fetch est utilisée pour effectuer des requêtes réseau pour obtenir des ressources (comme des données JSON) de manière asynchrone.',
  },
  {
    questionText: 'Qu est-ce qu une API REST ? ',
    options: ['A. Une API REST (Representational State Transfer) est un type de protocole de communication utilisé uniquement pour la transmission de données en temps réel entre les serveurs.', 
              'B. Une API REST (Representational State Transfer) est un logiciel qui automatise les processus de gestion des bases de données relationnelles.', 
              'C. Une API REST (Representational State Transfer) est un style architectural pour les services web qui utilise les méthodes HTTP (GET, POST, PUT, DELETE) pour gérer les ressources.'],
    correctAnswer: 'C. Une API REST (Representational State Transfer) est un style architectural pour les services web qui utilise les méthodes HTTP (GET, POST, PUT, DELETE) pour gérer les ressources.',
  },
  {
    questionText: 'Qu est-ce que le DOMContentLoaded ? ',
    options: ['A. DOMContentLoaded est un événement qui se déclenche lorsque le document HTML a été complètement chargé et analysé, sans attendre les feuilles de style, les images et les sous-documents. ', 
              'B. B. DOMContentLoaded est un événement qui se déclenche lorsque toutes les ressources de la page, y compris les images et les styles, ont été entièrement chargées.', 
              'C. DOMContentLoaded est un événement qui se déclenche lorsque le navigateur a terminé de rendre tous les éléments de la page, y compris les ressources externes comme les scripts et les images.'],
    correctAnswer: 'A. DOMContentLoaded est un événement qui se déclenche lorsque le document HTML a été complètement chargé et analysé, sans attendre les feuilles de style, les images et les sous-documents.',
  },
  {
    questionText: 'Comment fonctionne le "Virtual DOM" dans React ? ',
    options: ['A. Le Virtual DOM est une représentation en mémoire du DOM réel. Lorsqu un composant React est mis à jour, React crée un Virtual DOM, compare cette nouvelle version avec la version précédente, et calcule les différences (diffing). Ensuite, il met à jour uniquement les parties du DOM réel qui ont changé, optimisant ainsi les performances.', 
              'B. Le Virtual DOM est une version simplifiée du DOM réel qui permet à React de rendre tous les composants de la page sans effectuer de comparaisons ni d optimisations. ', 
              'C. Le Virtual DOM est une couche de cache pour le DOM réel qui stocke des copies des éléments du DOM pour accélérer le rendu des pages, mais ne fait pas de comparaisons'],
    correctAnswer: 'A. Le Virtual DOM est une représentation en mémoire du DOM réel. Lorsqu un composant React est mis à jour, React crée un Virtual DOM, compare cette nouvelle version avec la version précédente, et calcule les différences (diffing). Ensuite, il met à jour uniquement les parties du DOM réel qui ont changé, optimisant ainsi les performances.',
  },
  {
    questionText: 'Qu est-ce que le "Content Security Policy" (CSP) ?',
    options: ['A. Le Content Security Policy (CSP) est un mécanisme qui crypte les données échangées entre le serveur et le client pour protéger les informations sensibles contre les interceptions.', 
              'B. Le Content Security Policy (CSP) est une norme de sécurité qui contrôle les permissions des utilisateurs sur un site web, définissant ce qu ils peuvent voir et faire sur la page.', 
              'C. Le Content Security Policy (CSP) est une norme de sécurité qui aide à prévenir les attaques de type XSS (Cross-Site Scripting) en définissant des règles sur les sources autorisées pour les contenus (scripts, images, etc.) chargés sur une page web. '],
    correctAnswer: 'C. Le Content Security Policy (CSP) est une norme de sécurité qui aide à prévenir les attaques de type XSS (Cross-Site Scripting) en définissant des règles sur les sources autorisées pour les contenus (scripts, images, etc.) chargés sur une page web.',
  },
  {
    questionText: 'Qu est-ce que le "middleware" dans un framework backend comme Express.js ? ',
    options: ['A. A. Le middleware dans un framework backend est une fonctionnalité qui permet de gérer les bases de données de manière plus efficace.', 
              'B. Le middleware dans un framework backend est une fonction qui a accès à l objet request (req), l objet response (res), et à la fonction next dans le cycle de requête-réponse. Le middleware peut exécuter du code, modifier les objets request et response, et terminer la requête ou passer au middleware suivant dans la pile.', 
              'C. Le middleware dans un framework backend est un mécanisme pour optimiser les performances du serveur en réduisant le temps de réponse.'],
    correctAnswer: 'B. Le middleware dans un framework backend est une fonction qui a accès à l objet request (req), l objet response (res), et à la fonction next dans le cycle de requête-réponse. Le middleware peut exécuter du code, modifier les objets request et response, et terminer la requête ou passer au middleware suivant dans la pile.',
  },
  {
    questionText: 'Qu est-ce que la "sécurité des API" et quelles sont les meilleures pratiques ? ',
    options: ['A. La sécurité des API implique uniquement de protéger les données en utilisant des techniques de chiffrement comme SSL/TLS.', 
              'B. La sécurité des API implique de protéger les interfaces de programmation contre les accès non autorisés et les attaques. Les meilleures pratiques incluent l utilisation de l authentification et de l autorisation (comme OAuth), le chiffrement des données en transit (TLS), la validation des entrées pour éviter les injections SQL, et la gestion des erreurs de manière sécurisée. ', 
              'C. C. La sécurité des API est principalement concernée par la gestion des erreurs et des exceptions, sans se soucier des aspects comme l authentification ou le chiffrement des données.'],
    correctAnswer: 'B. La sécurité des API implique de protéger les interfaces de programmation contre les accès non autorisés et les attaques. Les meilleures pratiques incluent l utilisation de l authentification et de l autorisation (comme OAuth), le chiffrement des données en transit (TLS), la validation des entrées pour éviter les injections SQL, et la gestion des erreurs de manière sécurisée.',
  },
  {
    questionText: 'Qu est-ce que la commande git rebase et comment diffère-t-elle de git merge ?',
    options: ['A. La commande git rebase est utilisée pour supprimer les commits indésirables d une branche, tandis que git merge combine les modifications de plusieurs branches en un seul commit.', 
              'B. La commande git rebase permet de déplacer ou de combiner une séquence de commits sur une autre branche. Contrairement à git merge, qui crée un commit de fusion pour combiner les modifications de deux branches, git rebase applique les commits d une branche sur la branche cible de manière linéaire. Cela peut rendre l historique plus propre, mais peut entraîner des conflits qui doivent être résolus au fur et à mesure du processus de rebasage. ', 
              'C. La commande git rebase est utilisée pour réinitialiser l historique d une branche à une version précédente, tandis que git merge fusionne les modifications des branches en utilisant des commits intermédiaires.'],
    correctAnswer: 'B. La commande git rebase permet de déplacer ou de combiner une séquence de commits sur une autre branche. Contrairement à git merge, qui crée un commit de fusion pour combiner les modifications de deux branches, git rebase applique les commits d une branche sur la branche cible de manière linéaire. Cela peut rendre l historique plus propre, mais peut entraîner des conflits qui doivent être résolus au fur et à mesure du processus de rebasage.',
  },
  {
    questionText: 'Qu est-ce qu un "cherry-pick" en Git ? ',
    options: ['A. La commande git cherry-pick permet d appliquer un commit spécifique d une branche à une autre. Cela peut être utile pour intégrer des modifications spécifiques sans fusionner toute la branche source.  ', 
              'B. La commande git cherry-pick permet de supprimer des commits spécifiques d une branche tout en conservant les autres commits.', 
              'C. La commande git cherry-pick est utilisée pour fusionner deux branches en conservant uniquement les changements du commit le plus récent. '],
    correctAnswer: 'A. La commande git cherry-pick permet d appliquer un commit spécifique d une branche à une autre. Cela peut être utile pour intégrer des modifications spécifiques sans fusionner toute la branche source. ',
  },
  {
    questionText: 'Qu est-ce que le "git bisect" et comment l utiliser pour trouver un bug ?',
    options: ['A. La commande git bisect est utilisée pour fusionner deux branches en comparant les commits pour trouver les différences.', 
              'B. La commande git bisect permet de créer un commit de fusion spécifique en combinant plusieurs commits existants.', 
              'C. La commande git bisect est utilisée pour identifier le commit spécifique où un bug a été introduit. Git utilise une recherche binaire pour diviser l historique en morceaux plus petits et tester chaque morceau pour isoler le commit problématique.'],
    correctAnswer: 'C.La commande git bisect est utilisée pour identifier le commit spécifique où un bug a été introduit. Git utilise une recherche binaire pour diviser l historique en morceaux plus petits et tester chaque morceau pour isoler le commit problématique.',
  },
  {
    questionText: 'Comment les données sont-elles généralement formatées dans les réponses d une API REST ?',
    options: ['A. XML', 
              'B. C. CSV', 
              'C. JSON'],
    correctAnswer: 'C. JSON',
  },
  {
    questionText: "Qu'est-ce que Django et quelles sont ses principales fonctionnalités ? ",
    options: ['A. Django est un langage de programmation utilisé pour le développement web, connu pour sa simplicité et sa rapidité. ', 
              'B. Django est un framework web open-source pour le langage Python, conçu pour simplifier la création de sites web dynamiques et complexes. Ses principales fonctionnalités incluent une ORM (Object-Relational Mapping) pour interagir avec les bases de données, un système de routage des URL, un moteur de templates pour générer des pages HTML, des outils de gestion de formulaires, et un système d authentification intégré. Django suit le principe "Don"t Repeat Yourself" (DRY) et vise à accélérer le développement tout en favorisant des pratiques de code propres et réutilisables.', 
              'C. Django est un système de gestion de bases de données qui offre des outils de création et de gestion des tables et des données. '],
    correctAnswer: 'B. Django est un framework web open-source pour le langage Python, conçu pour simplifier la création de sites web dynamiques et complexes. Ses principales fonctionnalités incluent une ORM (Object-Relational Mapping) pour interagir avec les bases de données, un système de routage des URL, un moteur de templates pour générer des pages HTML, des outils de gestion de formulaires, et un système d authentification intégré. Django suit le principe "Don"t Repeat Yourself" (DRY) et vise à accélérer le développement tout en favorisant des pratiques de code propres et réutilisables.',
  },
  {
    questionText: 'Que signifie le code de statut HTTP 200 ? ',
    options: ['A. La requête a été réussie et une réponse est renvoyée', 
              'B. La requête a échoué', 
              'C. La requête est redirigée vers une autre URL'],
    correctAnswer: 'A. La requête a été réussie et une réponse est renvoyée',
  },
  {
    questionText: 'Quel est l objectif du code de statut HTTP 404 ? ',
    options: ['A. Représentation des États de Transfert', 
              'B. Répétition des États de Transfert', 
              'C. Représentation des États de Transfert'],
    correctAnswer: 'C. Représentation des États de Transfert',
  },
  {
    questionText: 'Comment installer Django',
    options: ['A. Avec npm install', 
              'B. Il est deja installé par defaut', 
              'C. Pour installer Django, tu peux utiliser pip, le gestionnaire de paquets Python. Exécute la commande pip install django'],
    correctAnswer: 'C. Pour installer Django, tu peux utiliser pip, le gestionnaire de paquets Python. Exécute la commande pip install django',
  },
  {
    questionText: 'Quelle méthode HTTP est généralement utilisée pour récupérer des données d une API ? ',
    options: ['A. POST', 
              'B. GET', 
              'C. DELETE'],
    correctAnswer: 'B. GET',
  },
  {
    questionText: 'Que fait la commende onkeypress ',
    options: ['A. L attribut onkeypress exécute une fonction JavaScript chaque fois qu une touche est enfoncée et maintenue, avant qu elle ne soit relâchée.' ,
              'B. Elle permet de déclencer une action par le clic', 
              'C. la répose c'],
    correctAnswer: 'B. Elle permet de déclencer une action par le clic',
  },
  {
    questionText: 'Quel est la difference entre un site dynamique et un site statique? ',
    options: ['A.Un site dynamique génère des pages en temps réel en fonction des interactions de l utilisateur, tandis qu un site statique est composé de pages HTML fixes dont le contenu ne change pas. ', 
              'B) Un site statique permet aux utilisateurs de modifier le contenu via un panneau d administration, tandis qu un site dynamique est uniquement accessible en lecture seule.', 
              'C. la réponse C'],
    correctAnswer: 'A. Un site dynamique génère des pages en temps réel en fonction des interactions de l utilisateur, tandis qu un site statique est composé de pages HTML fixes dont le contenu ne change pas.',
  },
  {
    questionText: 'Quelle est la structure typique d un script PHP ? ',
    options: ['A. <?php echau "Bonjour, monde!"; ?> ', 
              'B. <?php echo "Bonjour, monde!"; ?> ', 
              'C. <?php print("Bonjour, monde!"); ?>'],
    correctAnswer: 'B. <?php echo "Bonjour, monde!"; ?> ',
  },
  {
    questionText: 'Quel attribut HTML est utilisé pour définir une image ?',
    options: ['A. src', 
              'B. href', 
              'C. scr'],
    correctAnswer: 'A. src',
  },
  {
    questionText: 'Qu est-ce que Laravel ?',
    options: ['A. Un langage de programmation', 
              'B. Un système de gestion de bases de données', 
              'C. Un framework PHP pour le développement web',],
    correctAnswer: 'C. Un framework PHP pour le développement web',
  },
  {
    questionText: 'Qu est-ce qu une chaîne de caractères (string) en programmation ? ',
    options: ['A. Un type de variable qui stocke une seule valeur numérique', 
              'B. Un type de donnée qui stocke une séquence de caractères', 
              'C. Un type de boucle conditionnelle',],
    correctAnswer: 'B. Un type de donnée qui stocke une séquence de caractères',
  },
  {
    questionText: 'Que fait l instruction Alert en JS ? ',
    options: ['A. Elle termine l exécution du script', 
              'B. Elle affiche un message dans une boîte de dialogue modale', 
              'C. Elle crée une nouvelle variable'],
    correctAnswer: 'B. Elle affiche un message dans une boîte de dialogue modale',
  },
  {
    questionText: 'Quelle est la commande pour exécuter les migrations dans Laravel ? ',
    options: ['A. php artisan migrate', 
              'B. php artisan db:migrate', 
              'C.php artisan migrate:run'],
    correctAnswer: 'A. php artisan migrate',
  },
  {
    questionText: 'Qu est-ce qu un algorithme ? ',
    options: ['A. Un langage de programmation spécifique utilisé pour le développement web', 
              'B. Un ensemble fini d instructions ou d étapes à suivre pour résoudre un problème ou effectuer une tâche ', 
              'C. Un type de variable qui peut stocker plusieurs valeurs sous forme de tableau'],
    correctAnswer: ' B. Un ensemble fini d instructions ou d étapes à suivre pour résoudre un problème ou effectuer une tâche',
  },
  {
    questionText: 'Quelle est la différence entre une boucle "for" et une boucle "while" ? ',
    options: ['A.Une boucle "for" ne peut pas utiliser de conditions, tandis qu une boucle "while" le peut', 
              'B. Une boucle "for" est utilisée pour un nombre défini d itérations, tandis qu une boucle "while" est utilisée pour un nombre indéfini d itérations', 
              'C. C. Une boucle "for" ne peut pas utiliser de conditions, tandis qu une boucle "while" le peut'],
    correctAnswer: 'B. Une boucle "for" est utilisée pour un nombre défini d itérations, tandis qu une boucle "while" est utilisée pour un nombre indéfini d itérations',
  },
]
const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const getResultImage = () => {
    const scorePercentage = (score);
    if (scorePercentage <= 24) {
      return tristeImage;
    } else if (scorePercentage >25 && scorePercentage <= 50) {
      return bonnemoyenne;
    } else if (scorePercentage <51 && scorePercentage <= 75) {
      return felicitationImage;

    } else {
      return legendeImage;
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          Vous avez marqué {score} sur {questions.length}
          <img src={getResultImage()} alt="Result" />
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option) => (
              <button
                onClick={() => handleAnswerOptionClick(option === questions[currentQuestion].correctAnswer)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;