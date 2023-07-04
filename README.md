# OC-projet-7-serverless #
 
 Ce projet correspond au backend du projet 7 de la formation développeur Web de OPENCLASSROOMS.


## Table des Matières

- [Introduction](#introduction)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Consommer l'API](#consommer-l-api)
- [Structure du Projet](#structure-du-projet)
- [Auteurs](#auteurs)
- [Exigences fonctionnelles](#exigences-fonctionnelles)
- [Outils et contraintes techniques](#outils-et-contraintes-techniques)


## Introduction 

L'objectif ici est de créer une api sécurisée permettant reliée à une base de données sur MongoDB répondant aux demandes du frontend. Cet API est conçu pour pouvoir fonctionner en serverless sur vercel.


## Installation

- Installation des dépendances : Cloner ce repository et lancer `yarn install` pour installer les dépendances.


## Utilisation

- Utiliser  `yarn start` pour lancer nodemon server.
- L'API est en écoute sur [http://localhost:3000](http://localhost:3000).

## Consommer l'API

L'API GC-Admin-App est une API REST. Une fois lancée, cette API met plusieurs routes à votre disposition

- Les routes Lodging (logements) :

    ● Route pour récupérer les données de tous les logements:
    `GET /lodgings/`

    ● Route pour récupérer les données du logement dont on rentre i'id :
    `GET /lodgings/:id`  


## Structure du Projet

- public/           # Dossier contenant les images et fichiers publics
- src/controllers/      # Dossier contenant les controllers
- src/middleware/       # Contient les middlewares
- src/models/           # Contient les models
- src/routes/           # Contient les routes  
- src/app.js            # Fichier js de l'application 
- server.js         # Fichier js du serveur  

## Auteurs

- [GUIEBA Kévin](https://github.com/Kguie/)
