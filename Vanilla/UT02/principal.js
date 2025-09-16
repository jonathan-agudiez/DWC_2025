"use strict"; // Siempre primera línea (ni siquiera un comentario).

/**
 * DESCARGO DE RESPONSABILIDAD
 * Todas las funciones aquí declaradas son un claro error de diseño (no debe hacerse en principal.js).
 * Deben estar en un archivo de biblioteca aparte, se es consciente de este error.
 * En lo sucesivo, y exclusivamente con fines didácticos, serán declaradas de este modo.
 * Tanto en las prácticas como en un proyecto real, no debe hacerse así (si no queremos ser devorados por la entropía).
 */

/******* FUNCIONES *******/

/*** Declaración de funciones declaración */

function doblar(num1) {
  var res = num1 * 2;
  return `El resultado es ${res}`;
}

console.log(doblar(151));

/*** Parámetros predeterminados */

function saludar(persona = "Amigo") {
  return `¡Hola ${persona}!`;
}

console.log(saludar());

/*** Funciones como parámetro */

function alpha(num, fun) {
  return fun(num);
}

console.log(alpha(50, doblar));

/*** Hoisting en funciones */

//Existe pero no es recomedable utilizarlo.

/*** Funciones anónimas (expresión) */

const feo = function (num1, num2) {
  return num1 + num2;
};
console.log(typeof feo);
console.log(feo);
console.log(feo(5, 5));

//Se usan en la definición de métodos de los objetos.

//Otro uso de la funciones anónimas (como parámetros)

var beta = alpha(5, function (num) {
  return num * 2;
});

console.log(`El valor de beta es ${beta}`);

/*** Constructor de funciones con funciones anónimas*/

/*** Funciones flecha (usadas como callbacks, no como métodos) */

const potencia = (num) => {
  return num ** 3;
};

/*** El pseudoarray (objeto iterable) arguments */

function sumarB() {
  let total = 0;
  let arrayFeo = [4, 5, 4, 7];
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  /* console.log(arrayFeo);
  console.log(arguments); */
  return total;
}

console.log(sumarB(4, 5, 4, 7, 12, 13, 34, 56));
