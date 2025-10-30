"use strict";


/* Ejercicio 2 - Colorines
Haz un programa que al hacer doble clic en la pantalla del navegador cambie el fondo a un color aleatorio. Puedes generar los colores bien en hexadecimal #5a6f12 o en RGB rgb(255,255,255).
Deberás crear una función que genere un color aleatorio válido. Si eliges colores en hexadecimal utiliza este array:
var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"]; */


window.onload = function () {

const letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];

let contadorClicks = 0;

const crearHexadecimal = () => {

    let numero = "#";

    for (let i = 0; i < 6; i++){
        numero += letras[Math.floor(Math.random() * letras.length)];
    }

    return numero;
}

const cambiarFondo = () => {
    const color = crearHexadecimal();
    document.body.style.backgroundColor = color
    contadorClicks++;
    console.log(`Número de clicks ${contadorClicks}: ${color}`);
}

document.addEventListener("dblclick",cambiarFondo, false);

}