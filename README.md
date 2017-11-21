# Projet final

## Points of interest

### 1. Démarrer le projet

- Démarrer widfly (s'assurer que le lien est fait entre la BDD et Widfly : localhost:9990 etc.)
- Lancer Wamp
- En ligne de commande dans le dossier "ng-points" : ng serve 
(Si le dossier node_modules n'est pas présent, taper "npm install" puis "ng serve") 


### 2. Mettre des points dans la base de données "projetfinal"

Dans server/src/main/java/fr.braddy/jaxrs/PointsRessourcs

Décommenter la méthode GET testPoint
Commenter la méthode GET  afficherListPoint

Aller sur l'URL : http://localhost:8080/poi/api/points

Ne pas oublier de Recommenter de décommenter les méthodes nécessaires

### 3. Aller sur l'URL localhost:4200
