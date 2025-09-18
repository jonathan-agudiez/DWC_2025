"use strict";

// Operaciones de calculo
function suma(num1,num2){
    return num1+num2;
}

function resta(num1,num2){
    return num1-num2;
}

function multi(num1,num2){
    return num1*num2;
}

function division(num1,num2){
    return num1/num2;
}

function modulo(num1,num2){
    return num1%num2;
}


function calcular(num1,num2,signo){

    if(num1 % 1 == 0 && num2 % 1 == 0){

        switch(signo){
            case "+": return console.log(`${num1} + ${num2} = ${suma(num1,num2)}`);
                break;
            case "-": return console.log(`${num1} - ${num2} = ${resta(num1,num2)}`);
                break;
            case "*": return console.log(`${num1} * ${num2} = ${multi(num1,num2)}`);
                break;
            case "/":   if (num2 === 0) {   // num1 / 0 = Error
                            console.log(`No se puede dividir entre 0.`);    
                            return;
                        }
                        return console.log(`${num1} / ${num2} = ${division(num1,num2)}`);
                        break;
            case "%":   if (num2 === 0){    // num1 % 0 = Error
                            console.log(`No se puede hacer modulo por cero.`);
                            return;
                        }
                        return console.log(`${num1} % ${num2} = ${modulo(num1,num2)}`);
                        break;
            default: console.log(`No ha colocado signo de operación correctamente.`);
        }

    } else console.log(`El número introducido no es entero. Fin de programa.`);
}

// Los 3 parametros de la operación: num1, num2, signo de la operación entre ""
calcular(10,20,"*");


export { calcular, suma, resta, division, multi, modulo }