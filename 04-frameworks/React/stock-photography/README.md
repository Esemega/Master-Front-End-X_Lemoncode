# stock-photography

## Requisitos

A) Obligatorio:

Como miembro de un portal de un banco de imagenes nos piden tener un carrito de la compra siempre visible:

- [x] El usuario tiene una area principal en la que se muestra una página con imagenes, cada imagen tiene un checkbox que permite seleccionarlo y añadirlo al carrito de la compra.
- [x] Al derecha mostramos un carrito de la compra. Cada vez que el usuario selecciona una imagen en una de las páginas se añade al carrito.
- [x] Si un usuario borra la imagen del carrito se deselecciona de la página (en caso de que esté activa).

B) Ideas opcionales:

- [x] Haz que el carrito se puede ocultar.
- [x] Añade una opcíon de vaciar carrito.
- [ ] Implementa una página de "checkout" para hacer el pedido.
- [ ] Estilalo con material UI.

## Ejecutar

Para ejecutar, en modo desarrollo, escribir el siguiente comando en la raíz del proyecto.

```
npm start
```

Navega a `http://localhost:8080/` para ver el resultado.

## Construido con

- [React](https://es.reactjs.org/) - Framework JS
- [Typescript](https://www.typescriptlang.org/) - Superset de JS
- [Proyecto de inicio](https://github.com/Lemoncode/master-frontend-lemoncode/tree/master/04-frameworks/01-react/05-arquitectura/00-boilerplate) - Boilerplate del que se parte

## Qué he aprendido

- En este proyecto he aplicado la arquitectura de pods y me he podido a enfrentar a ella en un proyecto desde el inicio.

      |-src
        |-app.tsx
        |-common
        |-core
          |-providers
        |-layouts
        |-pods
          |-cart
          |-cats
          |-monkeys
        |-roter
        |-scenes

- Breve explicación por carpetas:
  - En `common` podemos encontrar el componente `Picture` que ha sido promocionado al usarse en más de un pod.
  - En `core`, se encuentra el provider del `cart`, en el que comparte la lista de id que hay en el carrito.
  - En `layout` se puede encontrar la estructura que van a tener las `scenes` compuesta por un header, un footer y el main donde irá el pod correpondiente (`cats` o `monkeys`) y un aside con el pod cart (el carrito).
  - En `pods` hay tres pods, los pods `cats` y `monkeys`, se encargan de obtener de la api las fotos y su información y mostrarla en una lista. El pod `cart`, lee del contacto los ids que hay en el carrito y pide a la api información para mostrarla.
  - En `scenes` hay una escena para mostrar las fotos de los gatos y otra de los monos.

## Hecho por

- [Sonia Garcia Alcaraz](https://github.com/Esemega)
