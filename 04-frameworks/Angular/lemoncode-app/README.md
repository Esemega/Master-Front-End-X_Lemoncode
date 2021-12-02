# LemoncodeApp

## Requisitos

1. Obligatorio - Layout completo de una mini-app, donde se practica:
   1. CLI para crear componentes y servicios.
   2. Añadir Angular Material al proyecto.
   3. Diseño del layout completo de una aplicación.
   4. Programación de un servicio para gestionar el estado de la aplicación.
   5. Inyección de servicios.
   6. Routing.
   7. Formulario.
2. Opcional - Galería de fotos, donde se practica:
   1. Binding
   2. Directivas estructurales
   3. Utilización del directorio assets
3. Opcional - Directiva rotate, donde se practica:
   1. Creación de una directiva personalizada
   2. Parametrización de directivas con @Input
   3. Binding de eventos con @HostListener
   4. Ciclo de vida: ngOnInit()

## Ejecutar

Para ejecutar, en modo desarrollo, escribir el siguiente comando en la raíz del proyecto.

```
npm start
```

Navega a `http://localhost:4200/` para ver el resultado.

## Construido con

- [Angular](https://angular.io/) - Framework JS
- [Angular CLI](https://github.com/angular/angular-cli) - Command Line Interface de Angular
- [Sass](https://sass-lang.com/) - Preprocesador CSS
- [Typescript](https://www.typescriptlang.org/) - Superset de JS

## Qué he aprendido

- Este es mi primer proyecto con Angular, por lo tanto ha sido un primer contacto con este framework.
- He aprendido a usar el Angular CLI con los siguientes comandos:

  1. Crear nueva app

  ```bash
  ng new nombre-de-tu-app
  ```

  Este comando accepta opciones para, por ejemplo, crear una app con routing y scss configurado desde el inicio:

  ```bash
  ng new nombre-de-tu-app --routing --style=scss
  ```

  2. Añadir Angular material

  ```bash
  ng add @angular/material
  ```

  3. Crear nuevo componente

  ```bash
  ng g c nombre-de-tu-componente
  ```

  4. Crear servicio

  ```bash
  ng generate service nombre-de-tu-servicio
  ```

  5. Crear directiva

  ```bash
  ng generate directive nombre-de-tu-directiva
  ```

- También es la primera vez que me enfrento a un proyecto con material-ui. Entre otras cosas he estado indagando como utilizar un `theme` preconfigurado y utilizar su paletta de colores.

  1. El primer paso es indicar en `angular.json` que se quiere utilizar un `pre-build theme`, dentro de la propiedad `"build"` se indica la propiedad `"styles"`. Para crear el proyecto Angular CLI da la opción de configurar esta parte desde el inicio.

  ```json
    "build":{
    "styles": [
              "./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css",
              "src/styles.scss"
            ]
    }
  ```

  2. Para poder usar la paleta de colores, se debe crear un archivo scss con el siguiente contenido:

  `_variables.scss`

  ```scss
  @import "~@angular/material/theming";

  // taken from https://github.com/angular/components/blob/master/src/material/core/theming/prebuilt/deeppurple-amber.scss

  // Define a theme.
  $my-custom-primary: mat-palette($mat-deep-purple);
  $my-custom-accent: mat-palette($mat-amber, A200, A100, A400);

  $my-custom-theme: mat-light-theme(
    (
      color: (
        primary: $my-custom-primary,
        accent: $my-custom-accent,
      ),
    )
  );

  @include mat-core();
  @include angular-material-theme($my-custom-theme);

  $primary-color: mat-color(map-get($my-custom-theme, primary));
  $accent-color: mat-color(map-get($my-custom-theme, accent));
  $space: 2rem;
  ```

  3. Finalmente dentro del archivo `_menu.scss` se pueden usar estos colores para, por ejemplo, resaltar la sección seleccionada del menú:

  `_menu.scss`

  ```scss
  @import "variables";

  .menu a:not(span > a),
  .menu span {
    padding: 0 $space 0 $space;
  }

  .selected {
    color: $primary-color;
    text-decoration: underline;
  }
  ```

- Un punto a mencionar es que no te olvides de incluir el modulo de angular-material importado dentro del `app.module.ts`:

  ```ts
  import { NgModule } from '@angular/core';
  import { MatButtonModule } from '@angular/material/button';
  ...
  @NgModule({
    declarations:[],
    imports:[
      MatButtonModule,
    ]
  })
  ```

## Hecho por

- [Sonia Garcia Alcaraz](https://github.com/Esemega)
