"use strict";


/* Ejercicio 3 - Localizador
Haz un programa que, mediante eventos y el uso del objeto event, muestre en todo momento la posición actual del ratón en pantalla. Para mostrar la posición, modificaremos de forma dinámica un elemento HTML (por ejemplo un <p>) que muestre la posición actual del ratón (coordenadas x e y). Como siempre, la salida debe estar debidamente formateada. */

window.onload = function () {




document.addEventListener("mousemove",(evento)=>{


    let posicionX = document.getElementById("posicionX");
    let posicionY = document.getElementById("posicionY");

    const x = evento.clientX;
    const y = evento.clientY;

    posicionX.textContent = `Posición X: ${x}`;
    posicionY.textContent = `Posición Y: ${y}`;
},false);










}