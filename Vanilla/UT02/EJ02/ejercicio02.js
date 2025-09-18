"use strict"
/*
-------------
Ejercicio 2:
-------------
Juan y Miguel juegan al baloncesto en equipos diferentes. En los últimos tres partidos el equipo de Juan consiguió 89,120 y 103 puntos, mientras que el de Miguel consiguió 116, 94 y 123.

Diseña y programa funciones para que realicen las siguientes tareas:
• Una para calcular la puntuación media de cada equipo (los equipos se pasan como
parámetros.
• Otra para mostrar qué equipo tiene mejor media de puntuación e imprime el ganador
en la consola. Incluye en la salida también la media de puntuación del equipo. No
olvides tener en cuenta el posible caso de un empate (misma puntuación media).
María también juega al baloncesto y su equipo consiguió 97, 134 y 105 puntos. Rediseña las
funciones anteriores para que acepten también a María.
*/

const EQUIPO1 = "CB Salesianos";
const EQUIPO2 = "CB Santa Teresa";
const NOMBRE1 = "Juan";
const NOMBRE2 = "Miguel";

function media() {
  let total = 0;
  let media = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  media = total / arguments.length;
  return media;
}

let mediaJuan = media(89,120,103);
let mediaMiguel = media(116,94,123);


function anunciarGanador(media1, media2){
    if(media1 > media2){
        console.log(`${NOMBRE1} ha ganado: ${media1} puntos de media.`);
    } else console.log(`${NOMBRE2} ha ganado: ${media2} puntos de media.`);
}

anunciarGanador(mediaJuan,mediaMiguel);


export { media }
