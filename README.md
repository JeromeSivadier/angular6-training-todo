# Readme

## Live demo
- https://jerk31.github.io/angular6-training-todo

## Generalités
### Création du projet Angular
Pour générer la base de notre projet, nous allons utiliser Angular CLI (Command Line Interface). La documentation d'Angular CLI indique de l'installer en utilisant npm install -g @angular/cli puis de faire ng new my-app pour générer l'application. Cette commande installe Angular CLI globalement sur le poste de travail. Comme nous ne créons pas de nouvelle application Angular tous les jours et que la prochaine fois, l'Angular CLI installé ne sera plus à jour, nous allons utiliser npx.

npx est un utilitaire inclus dans Node qui exécute un paquet Node sans l'installer. Le paquet est mis en cache de sorte à être exécuté plus rapidement à la prochaine invocation. Si une mise à jour est disponible, npx utilisera la dernière version et retirera l'ancienne version de son cache.

Ainsi, pour générer une application Angular :

`npx -p @angular/cli ng new my-app`

Notez que ng new va installer Angular CLI comme dépendance de notre projet. Par la suite, nous pourrons invoquer Angular CLI avec npx ng <commande>. Ceci garantit à tous les développeurs d'un projet d'utiliser la même version : celle référencée dans le package.json.

Lancement du serveur de développement

`npm run start` 

pour lancer la compilation continue et le serveur de développement. Par la suite on pourra lancer le démarrage du serveur directement depuis Studio Code : menu Terminal > Run task (on peut affecter une touche de raccourci à cette commande).

Cette commande lance le script start que l'on trouve dans la partie scripts de notre package.json.

### Lancer l'application

- Supprimer du package.json la dépendance @angular/cli, évite d'avoir plusieurs versions d'angular-cli en fonction des devs
- Sans ng CLI -> `npm run start` ==> task/script définie par défaut dans le package.json

### Build
- Terminal > Run task > `npm: build`
- Build is available in folder dist/app-todo
- Note: to build for production, edit the package.json to add `--prod` in the line `"build": "ng build --prod"` 

### Try on development http server
- /!\ **Build before!**
- `npx npm install --save-dev http-server`
- Rajouter dans le package.json le script `"http": "ng http-server dist/app-todo/` pour servir http-server depuis le dossier dist/
- Run http task Terminal > Run task

### Ensure refresh works on deployment
- !! Use hash strategy instead of location one
- `{provide: LocationStrategy, useClass: HashLocationStrategy},` in AppModule ou `{ useHash: true}` dans le RouterModule (eg: `RouterModule.forRoot(routes, { useHash: true})`)
- see https://stackoverflow.com/questions/43535048/angular-2-routing-does-not-work-when-deployed-to-http-server?rq=1
- see also to keep paths: https://angular.io/api/common/PathLocationStrategy 

### Upgrade to a new version of Angular
- `npm run ng update --all`
- va mettre les dépendances et le code à jour automatiquement! /!\ faire un commit avant et tester après...

## Outils
### npx: node package executor
- télécharge la dernière version en cache mais ne l'installe pas en global
- évite d'avoir des version en dur dans le gestionnaire de dépendances

### ng: node generate
- `ng config` -> Retrieves or sets Angular configuration values in the angular.json file for the workspace.
- `ng generate` -> generates a new class/component/module/service...
- with npx: `npx ng generate component todo-list --module app`

### SCSS: outil pour générer du CSS facilement
- preprocesseur qui permet d'avoir des variables, des fonctions, faire des boucles, des if...
- génère du CSS ensuite

## Pour information
### Compilateur
- webpack.js => invoqué à chaque modification d'un fichier sur le disque, tire le graphe de deps et génère l'application minifiée
- websocket mis en place entre la page et le code de développement pour recharger la page dynamiquement à chaque edit (après recompilation)

### Web server for chrome
- extension Chrome qui permet de rajouter un mini webserver dans Chrome pour servir des applis de test en prod

### Deploy on Github pages
- https://alligator.io/angular/deploying-angular-app-github-pages/
- `npm run ng build -- --prod --base-href "https://jerk31.github.io/angular6-training-todo/"`
- `npx -p angular-cli-ghpages ngh --dir dist/todo-app/`
- Servir la branche gh-pages depuis Github

### Outils
- Webstorm: version de Intellij IDE pour le JS et TS
- Postman: outil pour tester des API REST en déroulant des scénarii
- revealjs: lib pour présenter du Markdown dans un navigateur

### Useful links
#### Typescript / Javascript
- http://typescriptlang.org => informations on the Typescript language
- MDN {keyword} => recherche sur Mozilla Developers Network le keyword donné (très bonne doc de l'API javascript)
- https://caniuse.com/ => compatibilités navigateurs avec les fonctions de Javascript

#### Angular Material
- https://stackblitz.com/ => web IDE + compilateur Angular
- http://material.io => site Material de Google qui indique comment faire des interface graphiques avec DO et DONT
- https://material.angular.io/ => implémentation de Material avec Angular
- http://materialpalette.com => tests de couleurs pour du Material design, montre une preview des composants en fonction des couleurs primaire / secondaire choisies

#### Web API
- https://jsonplaceholder.typicode.com/ => API REST pour des tests
- http://todomvc.com/ => comparatif de l'appli TODO dans différents framework

#### Reactive (rx)
- http://rxmarbles.com/ => marble diagrams pour présenter les opérateurs rx
- https://www.learnrxjs.io/ => apprendre la programmation réactive