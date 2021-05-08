# Ejercicio 1 - Paleta de colores dinámica

## Requisitos
- Usar SASS
- A partir de un color base, generar cuatro colores más oscuros y cuatro más claros

## Ejecutar

Para ejecutar, escribir el siguiente comando en la raíz del proyecto.

```
npm start
```

Puedes cambiar los colores base en _styles.scss_.

#### **`styles.scss`**
```scss
$base-colors: #ff0000, #0000ff, #008000;
```

## Construido con

* [Sass](https://sass-lang.com/) - Preprocesador CSS
* [Parcel](https://parceljs.org/) - Empaquetador de aplicaciones web

## Qué he aprendido

* Sass:
    - Fundamentos de Sass: variables, reglas y propiedades anidadas, operaciones, funciones, gestión de flujo.
    - Crear un mixin en un archivo a parte e importarlo

    `_text-contrast.scss`
    ```scss
        @mixin text-contrast($n) {
            //propiedades de css
        }
    ```

    `styles.scss`
    ```scss
        @import "_text-contrast.scss";
        //...
        .color-box-text{
            @include text-contrast($color);
        }
    ```
    - Listas en Sass
    Como crear una lista en Sass e iterar por ella para aplicarle los estilos.

    Para esto se puede usar el `@each $element in $list` y el `@for $i from 1 through 4`.

    Ejemplo de `@each`:
    ```scss
    @each $color in $base-colors{
        // Estilos a aplicar en cada elemento de la lista
    }
    ```

    Ejemplo de `@for`:
    ```scss
    @for $i from 1 through 4 {
        // Estilos a aplicar en cada elemento de la lista
    }
    ```
* JS:

    Javascript se usa en este caso para poder copiar en el portapapeles el valor de la propiedad `content` de los pseudoelementos.
    
    - Como obtener los estilos de un pseudoelemento: `window.getComputedStyle(element,':after')`
    - Como acceder a la propiedad content del pseudoelemento: `window.getComputedStyle(element,':after')['content']`
    - Como quitar las comillas de un texto seleccionado: `string.replace(/['"]+/g, '')`

    Ejemplo de código:
    ```javascript
    let text = window.getComputedStyle(element,':after')['content'].replace(/['"]+/g, '');
    ``` 
    - Copiar un texto concreto en el portapapeles

    ```javascript
    navigator.clipboard.writeText(text);
    ```
## Hecho por

* [Sonia Garcia Alcaraz](https://github.com/Esemega)