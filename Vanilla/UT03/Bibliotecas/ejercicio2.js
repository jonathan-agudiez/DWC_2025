"use strict";

/* Ejercicio 2 -
Mostrando (objetos)
Escribe una función para hacer un informe completo (que muestre toda la información que contiene) del objeto curso y que lo muestre por consola, ya sabes como: debidamente formateado.
NOTA: para recorrer el objeto utilizar la estructura for(propiedad in objeto){}; */


let curso = {
    nombre: "2ºDAW",
    anyo: 1989,
    descripcion: "Curso de Programación para gente guapa.",
    alumnado: ["John", "Alvaro", "Ruben", "Irene"]
}

let mostrarCurso = (curso) => {
    for(let clave in curso){
         // Devuelve boolean si es un array con "clave:valor".
        if (Array.isArray(curso[clave])) {
            // Añade ", " para separar cada valor del array.
            console.log(`${clave}: ${curso[clave].join(", ")}`);    
        } else {
            console.log(`${clave}: ${curso[clave]}`);
        }
    };
}


console.log("Los datos del curso son:");
mostrarCurso(curso);


export {mostrarCurso}