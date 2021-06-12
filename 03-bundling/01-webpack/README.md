# Bundler Webpack

## Requisitos
Implementar una aplicación que:
- Tenga el bundling montado con webpack
- Muestre un logo
- Esté montado con Typescript
- Tenga el texto de "hola mundo" estilado con SASS
- Que muestre un hola mundo desarrollado con React
- Que tenga una versión de build de producción
- Que tenga una forma de medir cuando ocupa cada librería y nuestro código en el bundler

## Ejecutar

Para ejecutar, en modo desarrollo, escribir el siguiente comando en la raíz del proyecto.

```
npm start
```
También se puede ejecutar el start en modo produción:

```
npm run start:prod
```

Para crear el bundle, se puede ejecutar el comando `build` en modo desarrollo o producción: 

Modo desarrollo:
```
npm run build:dev
```

Modo producción:
```
npm run build:prod
```

Adicionalmente, para ver el tamaño que ocupan las librerías y tu propio código en el bundle, se puede ejecutar el siguiente comando: 

```
npm run build:pref
```

## Construido con

* [Webpack](https://webpack.js.org/) - Empaquetador de aplicaciones web
* [Babel](https://babeljs.io/) - Compilador JS
* [Sass](https://sass-lang.com/) - Preprocesador CSS
* [React](https://es.reactjs.org/) - Librería JS
* [Typescript](https://www.typescriptlang.org/) - Superset de JS

## Qué he aprendido

* Configurar un proyecto para trabajar con webpack siguiendo la documentación y los apuntes de [Lemoncode](https://github.com/Lemoncode/master-frontend-lemoncode/tree/master/03-bundling/01-webpack)

## Hecho por

* [Sonia Garcia Alcaraz](https://github.com/Esemega)