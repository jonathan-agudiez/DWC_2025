"use strict";

/* Ejercicio 1 -
Constructor (de objetos)
Crea una función que simule ser un constructor de objetos (recuerda que es una función que devuelve un objeto) que genere objetos del tipo curso. Las propiedades de este objeto serán: nombre del curso, año, descripción y alumnado que es un array (vacío de momento). */


function simularConstructor(nombre,anyo,descripcion,alumnado = []){
    let curso = {
        nombre: nombre,
        anyo: anyo,
        descripcion: descripcion,
        alumnado: alumnado
    }
    return curso;
}
console.log("Devolviendo un objeto:");
console.log(simularConstructor("2DAW", 1989, "Curso de Programación para gente guapa.", ["John", "Agudiez", 1]));

export { simularConstructor };