"use strict";

/* Ejercicio 1 -
Mezclando objetos
Crea una array con cinco cadenas de texto que sean nombres propios (los que estimes oportunos). Con ese array:
•
muestra por consola todos los nombres en mayúscula,
•
crea un nuevo array con los nombres ordenados alfabeticamente al revés y múestralo por consola,
•
crea un nuevo array que contenga un objeto JSON por cada nombre del array. Ese objeto tendrá dos propiedades: id con el índice de cada posición y nombre con el valor de cada posición. Múestralo por consola.
Los datos deben mostrarse debidamente formateados. */



let nombres = ["John","Maria","Antonio","Sara","Sofía"];

const enMayusculas = () => nombres.map(nombre => nombre.toUpperCase());

// .join para añadir un elemento entre elementos del Array.
console.log(`Lista de nombres: ${enMayusculas().join(", ")}`);

// Se crea constante para almacenar la lista de nombres ordenados.
const nombresOrdenados = enMayusculas().sort(); // Sort() Ordena de menor a mayor.
const invertirNombres = nombresOrdenados.reverse(); // Reverse() Ordena al revés.
console.log(`Lista de nombres ordanados al revés: ${invertirNombres.join(", ")}`);


// Se crea constante para agregar a cada elemento un nombre e índice. 
// (valor, index, array (en este caso no me hace falta el tercer parámetro)).
const texto = nombres.map((nombre, i) => ({
  id: i,
  nombre
}));

console.log("Muestro el resultado del JSON:");
// Revisando MDN de JS, (valor, replacer, nº espacios indentados).
// Se mostrará el json con saltos de linea e indentado.
console.log(JSON.stringify(texto, null, 1));