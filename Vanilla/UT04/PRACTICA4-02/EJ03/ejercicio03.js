"use strict";

/*
Ejercicio 3 - Ocultar DOM
Crea una web que tenga cinco elementos <p> con el mismo estilo. Programa una acción
para que cada segundo uno de los párrafos (seleccionado de forma aleatoria) cambie su
color de fondo a uno generado aleatoriamente (usa un atributo en lugar de clases para esto, pero recuerda que no es una buena práctica).
Dota de algún estilo CSS para que los párrafos sean distinguibles (altura, longitud, color y un borde).
*/

const crearParrafos = (numero) => {
    for(let i = 1; i <= numero; i++){
        const p = document.createElement("p");
        p.textContent = `Párrafo ${i}`;
        document.body.appendChild(p);
    };
};


const colorearParrafos = () => {
    let colores = ["red", "blue", "green", "yellow", "orange", "pink", "purple", "brown", "aquamarine", "lime", "skyblue"];

    // Elige color de forma aleatoria.
    let indice = (Math.floor(Math.random() * colores.length));

    return colores[indice];
};

const cambiarColorParrafos = () => {

    const parrafos = document.body.querySelectorAll("p");

    // Elige un número de índice random.
    const indice = Math.floor(Math.random() * parrafos.length);

    // Cambiamos el fondo del párrafo.
    parrafos[indice].setAttribute("style", `background-color: ${colorearParrafos()}`);
};

// Primero creamos los párrafos.
crearParrafos(5);

// Cambiamos de forma aleatoria los colores con intervalo de 1 segundo.
setInterval(cambiarColorParrafos,1000); 


export {crearParrafos, colorearParrafos, cambiarColorParrafos }












