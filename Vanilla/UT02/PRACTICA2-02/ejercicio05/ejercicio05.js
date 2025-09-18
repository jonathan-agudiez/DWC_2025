"use strict";


function media(num1,num2) {
    let total = 0;
    let media = 0;

    // Comprobamos si son enteros positivos
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > 0 && arguments[i] % 1 === 0 ){
            
            console.log(`${arguments[i]} es entero positivo.`);
        } else console.log(`${arguments[i]} no es entero positivo.`)
    }

    // Realizamos la media
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    media = total / arguments.length;
    return media;

}

console.log(`La media es: ${media(10,35)}`);

export {media}