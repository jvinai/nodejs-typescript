

# Integrer un module externe JS

## Quand importer un module Javascript (npm) ou Typescript (tsd)

Utilisez tsd si : 

* vous avez besoin du typage que peut apporter la librairie Typescript
* la version sous tsd est la version que vous recherchez (tsd est souvent en retard, [definitelytyped.org/tsd](http://definitelytyped.org/tsd/))

Sinon utilisez la version Javascript via npm et un fichier de définition écrit à la main 

```
declare module 'module-name' {
  var _:any;
  export default _;
}
```

Le ``` module-name ``` doit être le même que celui sous NPM.

# Export/Import

## Export
 * ``` export default X ``` pour classe/interface/abstract.
 * ``` export = X ``` pour les objets JS.

## Import
 * ``` import X from 'Y'; ```
 
