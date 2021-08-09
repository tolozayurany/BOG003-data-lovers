<img src = "https://github.com/immarroquin/BOG003-data-lovers/blob/main/src/img/logopeque%C3%B1o.png" width="200px">

# Poke Fans  

## Índice

* [1. Definición del producto](#1-definición-del-producto)
* [2. Investigación UX](#2-investigación-UX)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Prototipos](#4-prototipos)
* [5. Diseño final del producto](#5-diseño-final-del-producto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Checklist](#8-checklist)

***

## 1. Definición del producto 

Esta es una aplicación web enfocada en el juego Pokemon GO para usuarios principiantes e intermedios, con el objetivo de que los usuarios puedan conocer más a los pokemones en aspectos como nombre, número, imagen, tipo, habilidad y así elegir a los mejores pokemon para sus estrategias de juego.

## 2. Investigación UX

Para conocer mejor a nuestros usuarios y sus preferencias, realizamos una investigación UX por medio de la siguiente encuesta:

<img src ="https://github.com/immarroquin/BOG003-data-lovers/blob/main/src/img/img-readme/encuesta.png" width="400px">

Los hallazgos de esta investigación fueron:  

* Los principales usuarios de nuestro producto son personas con niveles principiantes e intermedios en Pokemon Go.
* Los principales objetivos de los usuarios son conocer más a los pokemones en aspectos como nombre, número, imagen, tipo y habilidades, para elegir a los mejores pokemones en sus estrategias de juego.
* Los datos más relevantes para nuestros usuarios en un producto web de Pokemon son: nombre, número, imagen, tipo y habilidad.


## 3. Historias de usuario

* **UH-1:** Yo como usuario quiero ver una página de bienvenida con opciones de navegación para poder navegar fácilmente de acuerdo a mis intereses

* **UH-2:** Yo como usuario principiante quiero ver a los pokemos en tarjetas donde se visualice su información básica (nombre, numero, imagen) para conocer a  cada pokemon. 

* **UH-3:** Yo como usuario intermedio quiero poder tener la opción de organizar a los pokemon por nombre y numero.  quiero poder ver a los pokemon en tarjetas  con información adicional como (habilidad, tipo, peso y altura).

* **UH-4:** Yo como usuario intermedio quiero poder clasificar a los pokemon por tipo para así poder elegir a los mejores pokemon.

* **UH-5:** Yo como usuario intermedio quiero poder ver un gráfico de promedio de defensa y de ataque de los pokemon para conocer estadisticas y datos curiosos.

## 4. Prototipos

Nuestro proyecto se enfoca en el diseño del aplicativo móvil de Pokemón GO, por lo que se manejan los colores de los mapas de la aplicación dentro de toda nuestra página web. Se realizaron los sketch y diseños de la interfaz de nuestro producto para sitio web y para mobile. 

### Prototipos de baja fidelidad

#### Web

<img src ="https://github.com/tolozayurany/PokeFans/blob/main/src/img/img-readme/sketchBaja.jpeg" width="500px">

#### Mobile

<img src ="https://github.com/tolozayurany/PokeFans/blob/main/src/img/img-readme/sketchBaja.jpeg" width="500px">

### Prototipos de alta fidelidad 

EL diseño de nuestra interfaz busca acercar al usuario al juego Pokemon GO, teniendo en cuenta sus colores y los mapas usados dentro de la aplicación.

[Ver todos los prototipos de alta fidelidad](https://www.figma.com/file/GjmnidhwDYPYuv8uCjgTQh/Data-Lovers-PokeFans?node-id=0%3A1).

#### Web
<img src ="https://github.com/tolozayurany/PokeFans/blob/main/src/img/img-readme/Dise%C3%B1oWeb.PNG" width="600px">

#### Mobile

<img src ="https://github.com/tolozayurany/PokeFans/blob/main/src/img/img-readme/Dise%C3%B1oMobile.PNG" width="300px">


## 5. Diseño final del producto

El diseño final de nuestra aplicación respeta el diseño de la interfaz planteado en los prototipos y se encuentra publicada en GitHub Pages.

[Página web PokeFans](https://tolozayurany.github.io/PokeFans/src/index.html).

#### Web
 <img src ="https://github.com/tolozayurany/PokeFans/blob/main/src/img/img-readme/FinalWeb.PNG" width="600px">

#### Mobile
<img src ="https://github.com/tolozayurany/PokeFans/blob/main/src/img/img-readme/FinalMobile.PNG" width="300px">


## 6. Test de usabilidad

A continuación se presentan los problemas encontrados en los test de usabilidad:

* Los colores usados en la barra de navegación y los títulos en la página principal diferían entre sí. 
* Usar el cambio de forma en el cursor al pasar por los botones, para hacer evidente que eran botones y que se podían usar.
* En el diseño de las modales se veían los bordes muy redondeados y no contrastaban correctamente con el diseño general de la página. 
* Los nombres de los pokemones se encontraban en minúscula por lo que era mejor manejar las mayúsculas para respetar la escritura de los nombres.

Mediante los test de usabilidad pudimos encontrar varios aspectos a mejorar en nuestro producto, los cuales fueron tenidos en cuenta, por lo que se hicieron todas las mejoras correspondientes a los problemas encontrados y de esta manera hacer más amigable la interfaz de usuario.


## 7. Pruebas unitarias

Se realizaron las respectivas pruebas unitarias a todas las funciones que hacían parte del código y se alcanzó un coverage del 100%. 

 <img src ="https://github.com/tolozayurany/PokeFans/blob/main/src/img/img-readme/UnitTest-PokeFans.PNG" width="600px">

## 8. Checklist

* [x] Usa VanillaJS.
* [x] Pasa linter (`npm run pretest`)
* [x] Pasa tests (`npm test`)
* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [x] Incluye link a Zeplin en `README.md`.
* [x] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [x] UI: Permite ordenar data por uno o más campos (asc y desc).
* [x] UI: Permite filtrar data en base a una condición.
* [x] UI: Es _responsive_.
