# Ejercicio extra - Lemoncoders webapp

## Requisitos
- El layout contendrá:
    - Header: toolbar (input texto + nombre usuario) y barra con nombre de la app
    - Nav: titulo + menú con opciones
    - Main con el contenido
    - Footer con el texto de la compañía
- Al hacer scroll no se pierde la barra de navegación
- En resoluciones pequeñas se oculta el toolbar y el título del menú
- Diseño responsivo

## Ejecutar

Abre el archivo index.html en un navegador.

Haz la ventana más ancha o más estrecha para comprovar que el diseño es responsivo.

## Construido con

* HTML y CSS

## Qué he aprendido

* Reproducir el diseño de una aplicación partiendo del diseño y el HTML
* Hacer que el menú de navegación sea visible aunque se haga scroll, esto se consigue dandole el valor `sticky` a la propiedad `position`.

`style.css`
```css
nav{
    position: sticky;
    position: -webkit-sticky; /*Para Safari*/ 
    top: 0; /*Indica a que distancia del top se fija*/ 
}
```
* Hacer una imagen redondeada

`style.css`
```css
img{
    border-radius: 50%;
}
```

* Crear un layout con grid areas

`style.css`
```css
.container{
        display: grid;
        grid-template-columns: .25fr 1fr;
        grid-template-rows: 2fr auto 1fr;
        grid-template-areas:
            "header header"
            "nav main"
            "footer footer";
}
header{
    grid-area: header
}
nav{
    grid-area: nav;
}
footer{
    grid-area: footer;
}
```

## Hecho por

* [Sonia Garcia Alcaraz](https://github.com/Esemega)