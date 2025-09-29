"user strict";

/* Ejercicio 2 -
Filtrando objetos.
Genera tres array de diez números (del 1 al 10) generados de forma aleatoria (crea o reutiliza una función para esta tarea). Con esos array, crea uno nuevo con los números que sean mayor a cinco y múestralo por consola debidamente formateado. */



// funciton Math.random -> Genera numeros random
// function Math.floor -> Los transforma a numeros enteros
// Para determinar el rango de números: Math.random() * max + min;
function generarArray(array = []){
    for (let i = 0; i < 10; i++){
       array = [...array, Math.floor(Math.random() * 10 + 1)];
   } 
   return array;
}

let array1 = generarArray();
let array2 = generarArray();
let array3 = generarArray();


// Función filtro boolean.
const valorCorrecto = (valor) => valor > 5;

// Añadimos los arrays que cumplen la condición valor > 5.
let nuevoArray = [...array1.filter(valorCorrecto),...array2.filter(valorCorrecto),...array3.filter(valorCorrecto)];

console.log(`Lista los números superiores a 5: ${nuevoArray}`);



