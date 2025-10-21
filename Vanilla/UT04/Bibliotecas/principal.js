"use strict";

const esPrimo = (numero) => {

    let primo = false;
    let cont = 0;

    for(let i = 1; i <= numero; i++){
        if(numero % i == 0) cont++;
    }

    if(cont == 2) primo = true;

    return primo;
}


export {esPrimo};

