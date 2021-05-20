# Reto - Warner Live

## Requisitos
- Dado el HTML, crear el layout indicado para desktop, tablet y mobile.
- Usar la fuente [Jost](https://fonts.google.com/specimen/Jost?preview.text=warner%20live&preview.text_type=custom)
- Color de fondo: #141414

## Ejecutar

Para ejecutar, escribir el siguiente comando en la raíz del proyecto.

```
npm start
```

Haz la ventana más ancha o más estrecha para comprovar que el diseño es responsivo.

## Construido con

* [Sass](https://sass-lang.com/) - Preprocesador CSS
* [Parcel](https://parceljs.org/) - Empaquetador de aplicaciones web

## Qué he aprendido

* Reproducir el diseño de una aplicación partiendo del diseño y el HTML.
* Elegir diplay flex o grid dependiendo del layout deseado.
* Modificar el contenido de un elemento, dependiendo del ancho del dispositivo, con ayuda de sus pseudoelementos.

    `styles.scss`
    ```scss
    .section-title{
        #top-text::before{
            //Aquí se le da valor a la propiedad content, del pseudo-elemento before
            content:"5";
        }
    }

    @media screen and (max-width: 1280px) {
        .section-title{
            #top-text{
                &::before{
                    //Primero se esconde el content del pseudo-elemento before.
                    display: none;
                }
                &::after{
                    //Finalmente se le da el nuevo valor a la propiedad content,
                    // pero dentro del pseudo-elemento after.
                    content:"3";
                }
            }
        }
    }
    ```

## Hecho por

* [Sonia Garcia Alcaraz](https://github.com/Esemega)