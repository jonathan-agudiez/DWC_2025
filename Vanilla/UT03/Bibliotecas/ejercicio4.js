"use strict";

import { discente } from "./ejercicio3.js";

/* Ejercicio 4 -
Modificando (objetos)
Añade, al objeto "curso", un método denominado "matricular" que recibe un objeto "discente" (creado en el ejercicio anterior) y que los añade a la propiedad "alumnado" del objeto curso.
NOTA: usa los objetos creados en prácticas anteriores para ahorrar tiempo. */


let curso = {
    nombre: "Curso de JS",
    anyo: 1989,
    descripcion: "El curso más dificil de Formación Profesional.",
    alumnado: [],
    matricular: function (nuevoDiscente) {
        this.alumnado = [...this.alumnado, nuevoDiscente];
        console.log(`El alumno ${nuevoDiscente.nombre} se ha matriculado en el curso de ${this.nombre}.`);
    } 
}

curso.matricular(discente);
console.log(curso.alumnado);


