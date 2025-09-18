"use strict";

// Casteamos a Number para que deje de ser String.
let numero = Number(prompt("Escribe un numero:"));

function enteroPositivo(numero){

    console.log(`Comprobando...`);

    let lista = "Listado: ";

    // Para saber si es entero y positivo
    if(numero > 0 && numero % 1 === 0) {
        console.log(`El número ${numero} es entero y positivo`);
        for(let i = 1; i <= numero; i++){
            if(i % 3 == 0){     // Operacion para saber si el numero es divisible entre 3
                lista += i + " ";
            }
        }
        console.log(lista)

    } else console.log(`El número ${numero} no es entero positivo, fin del programa.`);
}

enteroPositivo(numero);

export { enteroPositivo }