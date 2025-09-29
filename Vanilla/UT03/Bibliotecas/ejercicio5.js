"use strict";

/* Ejercicio 5 - Mostrando II (objetos)
Diseña una función que permita imprimir por consola cualquier objeto pasado como
parámetro. Se deberá comprobar el tipo de dato de cada propiedad del objeto y actuar en
consecuencia dependiendo si es un número, cadena, array, objeto o función (método).
La salida debe estar, como es tradicional, debidamente formateada e indicando el tipo de
dato que contiene cada clave del objeto. */


let curso = {
    nombre: "Curso de JS",
    anyo: 1989,
    descripcion: "El curso más dificil de Formación Profesional.",
    alumnado: ["John","María","Vicente"],
    notas: {        // Objeto
        primera:7,
        segunda:8,
        tercera:5 
    },
    matricular: function (nuevoDiscente) {  // Forma de incrementar el array con spread
        this.alumnado = [...this.alumnado, nuevoDiscente];
        console.log(`El alumno ${nuevoDiscente.nombre} se ha matriculado en el ${this.nombre}.`);
    }
}

// Función que comprueba el tipo de dato y imprime su valor
// Importante: Se utiliza recursividad cuando comprueba si es un array o un objeto, para imprimir los valores de su interior.
let analizar = function (objeto) {
    for (let clave in objeto) {

        let valor = objeto[clave];

        if (typeof valor === "string") {
            console.log(`La clave ${clave} es de tipo string y tiene valor: ${valor}`);

        } else if (typeof valor === "number") {
            console.log(`La clave ${clave} es de tipo number y tiene valor: ${valor}`);

        } else if (Array.isArray(valor)) {
            console.log(`La clave ${clave} es de tipo array y tiene por valor:`);
            analizar(valor); // Se recorre índices del array con recursividad.

        } else if (typeof valor === "object") {
            console.log(`La clave ${clave} es de tipo object:`);
            analizar(valor); // Se recorre las propiedades del objeto con recursividad.

        } else if (typeof valor === "function") {
            console.log(`La clave ${clave} es de tipo function.`);
        }
    }
}


analizar(curso);