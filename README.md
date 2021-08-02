# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Historias de usuario](#3-Historias de usuario)
* [4. Test de usabilidad](#4-Test de usabilidad)


***

## 1. Preámbulo

Studio Ghibli es un estudio de animación japonés, conocido por sus largometrajes
animados como **Mi vecino Totoro**, **El viaje de Chihiro** o
**El castillo ambulante**, entre otros grandes éxitos.

Las animaciones tienen gran acogida a nivel mundial y algunas han recibido
varias nominaciones y premios.

Por ser una temática de gran acogida se decidió trabajar con la data disponible 
acerca de este tema.

## 2. Resumen del proyecto

Es una aplicación web que permite al usuario navegar entre diferentes categorías
relacionadas con Studio Ghibli, conocer sobre sus películas, directores y personajes.
Un aspecto importante es que la aplicación fue pensada para ser utilizada en diferentes 
dispositivos (celular, tablet y PC), por lo tanto debe ser responsive, se proyectó Mobile First.

La aplicación se realizó pensando en el fanático de estas películas y se incluyeron 
aspectos gráficos e íconos muy propios de las producciones de Studio Ghibli; inicialmente
se desarrollo prototipo de baja fidelidad en Balsamiq, para ser posteriormente desarrollado 
a profundidad en Figma.
<img src="https://github.com/LuValcke/BOG003-data-lovers/blob/main/src/imagesGhibli/DataLoversLanding.png"></img>
Link a Figma: https://www.figma.com/file/ecSL78vucT3TyITyxXaja0/DataLovers?node-id=0%3A1

## 3. Historias de usuario

**Historia de usuario 1:**

  Yo como: Usuario
  Quiero: Ver una landing page que me permita saber de que va la página y qué voy a poder encontrar
  Para: Saber si quiero seguir navegando en ella

Criterios de aceptación:

  Debe ser responsive para pc y celular
  Debe tener diseño visual alusivo a Studio Ghibli
  Sugiere que se podrá navegar entre las películas, los directores y los personajes

Definición de terminado: 

  HTML semántico
  Todo el código está en la rama main de GitHub
  Test de usabilidad al menos 3 personas con fallas corregidas
  Usar flexbox CSS
  Respetar el diseño en figma
  Diseñar la aplicación pensando en y entendiendo al usuario
  Crear prototipos para obtener feedback e iterar
  Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
  Planear y ejecutar tests de usabilidad

**Historia de usuario 2:**

  Yo como: Usuario
  Quiero: Filtrar las películas por su director
  Para: Poder definir cuáles fueron dirigidas por Hayao Miyasaki

Criterios de aceptación:

  Que se muestre una lista de directores
  Al elegir algún director se despliegue una lista de las películas del mismo
  Debe tener un botón para regresar al landing page

Definición de terminado

  Uso de js para filtrar por directores
  Uso de js para calcular porcentajes de producciones por cada director
  Funcionalidad de botón home por medio js
  Hacer y pasar prueba unitaria

**Historia de usuario 3:**

  Yo como: Usuario
  Quiero: Ordenar cronológicamente las películas 
  Para: Conocer cuáles son las producciones más nuevas y las más antiguas

Criterios de aceptación:

  Mostrar lista de películas con sus años de lanzamiento
  Debe tener un botón para ordenar cronológicamente en orden ascendente o descendente
  Debe tener un botón para regresar al home

Definición de terminado:

  Uso de js (map y sort) para mostrar y ordenar cronológicamente las películas
  Funcionalidad del botón para home
  Estilos CSS
  Maquetación de esta página en HTML
  Debe estar subido todo el código en GitHub
  Hacer y pasar prueba unitaria

**Historia de usuario 4:**

  Yo como: Usuario
  Quiero: Saber cuántos personajes femeninos, masculinos y otros géneros hay en las películas de Studio Ghibli
  Para: Conocer si existe algún sesgo con respecto al género en las películas de Studio Ghibli

Criterios de aceptación:

  Mostrar los personajes de Ghibli con sus imágenes y nombres.
  Un botón que permita elegir mostrar personajes segun la categoría de género.
  Que al mostrar los personajes según su género, haya un escrito que diga cuántos son y que porcentaje represaentan de los personajes de Ghibli.
  Botón que lleve al home.

Definición de terminado: 

  Utilizar función js para conocer cuántos personajes hay entre todas las películas.
  Funcionalidad del Select para escoger género.
  Hacer cálculos de porcentaje de cada género.
  Funcionalidad botón home.
  Estilos CSS
  Todo el código debe estar en GitHub
  Hacer y pasar prueba unitaria

## 4. Test de usabilidad

La aplicación web fue puesta a prueba por diferentes usuarios potenciales en cada Historia de usuario y se 
observó que siempre fue muy intuitiva y fácil de utilizar.
