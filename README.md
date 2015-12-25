# nodejs-typescript

# Pré-requis

NPM is require.

* ``` npm install -g typescript ```
* ``` npm install ``` 
* ``` tsd install ```

# GULP/NPM

## Lancer le serveur

``` gulp serve ``` ou ``` npm start ```

## Lancer le serveur de mock pour l'oauth2

``` gulp oauth ``` 

# Utiliser le générateur de définition file pour Typescript

Il suffit de lancer le script dts.generator.js via la commande ```node ``` dans le dossier /tools et d'ajouter en argument les nouvelles dépendances JS installées dont vous voulez générer les fichiers d.ts par defaut.

Exemple : ```node dts.generator.js express passport winston```

# Utiliser l'outil de mise à jour du fichier tsconfig.json pour les paths des fichiers .ts

Il suffit de lancer le script updateTSConfig.js via la commande ``` node ``` dans le dossier /tools.

# Importants

[PROTIPS page](PROTIPS.md)

# Outils

IDE compatible avec Typescript :

 * Webstorm >=v11
 * Atom (atom-typescript module)
 * Virtual studio (PC only)
 * SublimeText 3 (T3S module) [Link](https://www.airpair.com/typescript/posts/typescript-development-with-gulp-and-sublime-text)

# Liens 

## Prez blemoine (BBL)
 * [http://blemoine.github.io/typescript-slides/](http://blemoine.github.io/typescript-slides/)

## Setup de projet
 * [https://pontifex.azurewebsites.net/my-typescript-project-structure-with-gulp/](https://pontifex.azurewebsites.net/my-typescript-project-structure-with-gulp/)
 * [http://blog.geraldpereira.com/rest/crud/2015/09/10/nodejs-express-typescript.html](http://blog.geraldpereira.com/rest/crud/2015/09/10/nodejs-express-typescript.html)

## Handbook / Cheat sheet
 * [http://www.typescriptlang.org/Handbook](http://www.typescriptlang.org/Handbook)
 * [https://www.sitepen.com/blog/2013/12/31/typescript-cheat-sheet/](https://www.sitepen.com/blog/2013/12/31/typescript-cheat-sheet/) (maybe outdated)
 * [https://www.sitepen.com/blog/2013/12/31/definitive-guide-to-typescript/](https://www.sitepen.com/blog/2013/12/31/definitive-guide-to-typescript/) (maybe outdated)

## Tuto
 * [http://www.codeproject.com/Articles/871622/Writing-a-chat-server-using-Node-js-TypeScript-and](http://www.codeproject.com/Articles/871622/Writing-a-chat-server-using-Node-js-TypeScript-and)
 * [https://github.com/Microsoft/TypeScriptSamples/tree/master/imageboard](https://github.com/Microsoft/TypeScriptSamples/tree/master/imageboard)
 * [https://www.youtube.com/watch?v=KBLE4muNhE8](https://www.youtube.com/watch?v=KBLE4muNhE8) (NodeJS with Typescript from scratch)
 