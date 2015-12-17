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

# Outils

IDE compatible avec Typescript :

 * Webstorm >=v11
 * Atom (atom-typescript module)
 * Virtual studio (PC only)
 * SublimeText 3 (T3S module) [Link](https://www.airpair.com/typescript/posts/typescript-development-with-gulp-and-sublime-text)

# Do not forget

## Export/Import
 * Ne pas oublier d'ajouter les ``` export default X ``` pour classe/interface/abstract et ``` export = X ``` pour les objets JS.
 * ``` import X from Y; ``` pour Typescript import et ``` var X = require('X'); ``` pour un module Javascript

# Questions

## Peux ton avoir un fichier .d.ts pour les modules back et un autre pour les modules front ?

# Liens importants 

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
 