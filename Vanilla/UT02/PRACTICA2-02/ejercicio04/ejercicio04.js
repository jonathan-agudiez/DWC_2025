"use strict";

let base;
let exponente;

function calcularPotencia(base, exponente){

    if (isNaN(base) || base < 0 || base % 1 !== 0 || isNaN(exponente) || exponente < 0 || exponente % 1 !== 0 ){
        console.log(`No has introducido 2 numeros enteros positivos.`);
        return;
        
    } else {
        
            let i = 1;
            let res = 1;
            while (i <= exponente){
                res *= base;
                i++;
            }
            return `La potendia de ${base} elevando a ${exponente} es ${res}.`;
        }

}

console.log(calcularPotencia(2,4)); 

export {calcularPotencia}