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

export { sumarParametros, calcularMedia };

