# Ejercicio 2 - Temas

## Requisitos
- Crear dos temas distintos
- Los cambios en el tema afectan a las siguientes características: color, fuente, border radius, shadow box
- Para cambiar entre temas importar un tema u otro en el fichero de estilos principal

## Ejecutar

Para ejecutar, escribir el siguiente comando en la raíz del proyecto.

```
npm start
```

Para cambiar de tema, comenta _styles.scss_ el tema que no quieres ver.

#### **`styles.scss`**
```scss
@import "_themeA.scss";
// @import "_themeB.scss";
```

## Construido con

* [Sass](https://sass-lang.com/) - Preprocesador CSS
* [Parcel](https://parceljs.org/) - Empaquetador de aplicaciones web

## Qué he aprendido

* Sass:
    - Separar los estilos de cada tema en un archivo diferente e importar el que sea necesario.
    - Seleccionar el elemento n de una lista

    Por ejemplo:

    `_themeA.scss`
    ```scss
        $fonts: 'Times New Roman', monospace;
    ```

    `styles.scss`
    ```scss
        @use "sass:list"
        //...
        .principal{
            //Para usar la familia 'Times New Roman', se indica que el elemento tiene que ser el 1.
            font-family: list.nth($fonts,1);
        }
    ```

## Posible mejora
- Que el cambio se haga mediante un input en el index.html

## Hecho por

* [Sonia Garcia Alcaraz](https://github.com/Esemega)