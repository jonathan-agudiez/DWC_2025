"use strict";
import {esPrimo} from '../../Bibliotecas/principal.js';

/*
Ejercicio 2 - Primos DOM
Escribe un programa que cree dinámicamente una tabla de 10 por 10 celdas en la carga de
la página (sin esperar los dos segundos). Cada celda de la tabla tendrá un número único que empezará en uno y se irá incrementando en uno.
Además, trancurridos dos segundos desde la carga inicial, todas las celdas de la tabla que
tengan números primos se pongan con un fondo rojo y el texto en negrita (utiliza clases para el estilo).
*/

const crearTabla = () => {

    const tabla = document.createElement("table");

    let cont = 1;

    // Creacióm de una tabla parecida a la de una tabla de multiplicar (2 bucles anidados).
    document.body.appendChild(tabla);

    for(let i = 0; i < 10; i++){
        const fila =  document.createElement("tr");
        for(let j = 0; j < 10; j++){
            const celda = document.createElement("td");
            fila.appendChild(celda);
            celda.innerHTML = cont;
            cont++;
        };
        // Cada 10 celdas se crea 1 fila
        tabla.appendChild(fila);
    };
    return tabla;
};

const tabla = crearTabla();

const seleccionarPrimos = () => {
    const celdas = tabla.querySelectorAll("td");
    celdas.forEach((celda)=> {
        const numero = celda.textContent;
        if(esPrimo(numero)) celda.classList.add("primo");
    });
};


setTimeout(seleccionarPrimos, 2000);
