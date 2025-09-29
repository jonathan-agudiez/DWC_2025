"use strict";
import { calcularMedia, capitalize } from "../principal.js";

/* Ejercicio 3 -
Recorriendo (objetos)
Crea un objeto JSON denominado discente que tenga las siguientes propiedades: id, nombre, apellidos, aficiones (que será un array de string) y notas (que será un objeto JSON con las propiedades primera, segunda y tercera con las notas de cada evaluación).
Añade los siguientes métodos:
•   calcularMedia, que calculará la nota media de las tres evaluaciones,
•   imprimirAficiones, que imprimirá pos consola las aficiones del alumnado e
•   imprimirInforme, que imprime por consola un informe completo.
Las impresiones deben hacerse debidamente formateadas. */


 export let discente = {
    id:1,
    nombre:"John",
    apellidos:"Agudiez Alfaro",
    aficiones:[     // Array
        "Gimnasio",
        "Fotografía",
        "Correr"],
    notas: {        // Objeto
        primera:7,
        segunda:8,
        tercera:5 },

    
        // Métodos
    calcularMedia: function() {     //  Función importada.
        return calcularMedia(this.notas.primera,this.notas.segunda,this.notas.tercera).toLocaleString("es-ES");
    },
    imprimirAficiones: function() {
        for(let clave in this.aficiones){
            console.log(this.aficiones[clave]);
        }
    },
    imprimirInforme: function () {
        console.log("Informe del discente:");

        for(let clave in this){     // Recorre cada clave : valor del Objeto discente.

            // Solo procesar si no es una función
            if (typeof this[clave] !== "function") {

                // Devuelve boolean si es un array con "clave:valor".
                if (Array.isArray(this[clave])) {
                    // Añade ", " para separar cada valor del array.
                    console.log(`${capitalize(clave)}: ${this[clave].join(", ")}`);

                // Si la clave es un objeto, imprime clave : subclave con for in.
                } else if (this[clave] && typeof this[clave] === "object") {
                    console.log(`Notas:`);

                    // El método capitalize importado, pasa primera letra a mayúscula
                    for(let subclave in this[clave]){
                        console.log(`${capitalize(subclave)} evaluación: ${this[clave][subclave]}`);
                    }

                // Si clave no es ni un array, ni un objeto, imprime clave : valor.
                } else {
                    console.log(`${capitalize(clave)}: ${this[clave]}`);
                }
            }
        };

        console.log(`La nota media es: ${this.calcularMedia()}`);
    }
}

discente.imprimirInforme(); 

/*
Importante recordar:
Array.isArray(array) para determinar si es o no un array.
Método ".join(", ")" para separar los arrays con los elementos deseados.
Método de principal.js "capitalize(string)" para pasar la primera letra a mayuscula.

*/


