"use strict"

let numero = prompt("Escriba un numero:");

//Funcion que comprueba si es némero o no.
function isNumber(numero){ 

if(!isNaN(numero)) {
    console.log(`${numero} es un número`);
} else console.log(`${numero} no es un número.`); }


function isPar (numero){
    if(numero % 2 == 0){
        console.log(`${numero} es par.`);
    } else console.log(`${numero} es impar.`);
}

function isPositivo (numero){
    if(numero > 0 ) {
        console.log(`El número ${numero} es positivo`);
    } else if (numero < 0) console.log(`El número ${numero} es negativo`);
        else console.log(`El número es 0, es neutro.`);
}


// Un numero primo solo se puede dividir entre 1 y por sí mismo. Usamos un contador cada vez que el módulo es igual a 0 para determinar si es o no primo.
function isPrimo (numero){
    let contador = 0;
    for(let i = 1; i <= numero; i++){
        if(numero % i == 0){
            contador++
        }
    }
    if(contador == 2) console.log(`El número ${numero} es primo.`);
    else console.log(`El ${numero} no es primo.`);
}


function analisisNumerico(numero){

    // Si dejan vacio el inputbox, le damos feedback al usuario.
    if(numero == "") return console.log('No has puesto nada en el prompt.');;

    isNumber(numero);
    if(isNaN(numero)) return;  // Pongo esta condición para cortar el análisis, ya que no es un número y no tiene sentido seguir analizando si una letra es par, entero, primo.

    isPar(numero);
    isPositivo(numero);
    isPrimo(numero);
    
}

analisisNumerico(numero);

export { isPar, isNumber, isPositivo, isPrimo, analisisNumerico }