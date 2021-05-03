# Ejercicio 4 - Elemento tipo card con Grid CSS

## Requisitos
- Conjunto de cards alineadas con Grid CSS

## Ejecutar

Abre el archivo index.html en un navegador.

Haz la ventana más ancha o más estrecha para comprovar que el diseño es responsivo.

## Construido con

* HTML y CSS

## Qué he aprendido

* Desarrollar un diseño en forma de cuadrícula, donde las cards se van distibuyendo en filas según el ancho de la ventana.

`style.css`
```css
.container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

## Hecho por

* [Sonia Garcia Alcaraz](https://github.com/Esemega)