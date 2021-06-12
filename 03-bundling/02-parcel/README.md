# Bundler Parcel

## Requisitos
Implementar una aplicación que:
- Tenga el bundling montado con parcel
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

Para crear el bundle, se puede ejecutar el comando `build` en modo desarrollo o producción: 

Modo desarrollo:
```
npm run build
```

Modo producción:
```
npm run build:prod
```

Al ejecutar este comando, el plugin `parcel-plugin-bundle-visualiser`, crea un visualización donde puedes ver el tamaño que ocupan las librerías y tu propio código en el bundle. Para ver esta visualización, abrir el archivo `report.html` que se habrá creado en la carpeta de salida, `dist` en este caso.

## Construido con

* [Parcel](https://parceljs.org/) - Empaquetador de aplicaciones web
* [Babel](https://babeljs.io/) - Compilador JS
* [Sass](https://sass-lang.com/) - Preprocesador CSS
* [PostCSS](https://postcss.org/) - Framework CSS
* [React](https://es.reactjs.org/) - Librería JS
* [Typescript](https://www.typescriptlang.org/) - Superset de JS

## Qué he aprendido

* Configurar un proyecto para trabajar con parcel siguiendo la documentación y los apuntes de [Lemoncode](https://github.com/Lemoncode/master-frontend-lemoncode/tree/master/03-bundling/02-parcel)

## Hecho por

* [Sonia Garcia Alcaraz](https://github.com/Esemega)