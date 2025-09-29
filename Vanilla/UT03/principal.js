"use strict";

function sumarParametros() {
    let suma = 0;
    for(let i = 0; i < arguments.length; i++)   
            suma+= arguments[i];
        return suma;
}


function calcularMedia() {
    let suma = 0;
    for(let i= 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma / arguments.length;
}

// El metodo para pasar la primera letra de minuscula a mayuscula
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);


export { sumarParametros, calcularMedia, capitalize };