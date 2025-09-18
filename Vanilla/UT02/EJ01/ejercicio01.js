"use strict";

/*
-------------
Ejercicio 1:
-------------
Crea una función para realizar este ejercicio. Marcos y Juan quieren comparar su IMC (Índice
de Masa Corporal), que se calcula con la siguiente fórmula:
IMC = masa / (altura * altura)
• guarda las masas y alturas de Marcos y Juan en variables (pon los valores que quieras)
• calcula ambos IMC
• crea una variable booleana que contenga información sobre si Marcos tiene un IMC
mayor que Juan
• muestra un texto en la consola que contenga la variable del paso 3. Algo así como
¿Tiene Marcos un IMC mayor que el de Juan?: true
*/

const NOMBRE1 = "Juan";
const NOMBRE2 = "Marcos";

let masa1 = Number(prompt("Dime el peso de Juan en kg")); //  Parametros para calculo IMC
let masa2 = Number(prompt("Dime el peso de Marcos en kg"));
let altura1 = Number(prompt("Dime la altura de Juan en metros"));
let altura2 = Number(prompt("Dime la altura de Marcos en metros"));

let isGordo = false;
let isNumber = true;

function calcularIMC (masa,altura) {
    if (isNaN(masa) == true || isNaN(altura) == true) {
        console.log(`El peso o altura introducida no está en formato numérico`);
        isNumber = false;
    }   else {
            let imc = masa / (altura * altura);
            return imc;
        }
}

let imcJuan = calcularIMC(masa1,altura1);
let imcMarcos = calcularIMC(masa2,altura2);

function compararIMC(imc1, imc2, NOMBRE1, NOMBRE2){

    if(imc1 > imc2) {
        isGordo = true;
        console.log(`El IMC de ${NOMBRE1} es mayor que el de ${NOMBRE2}`);
    }   else if (imc1 < imc2) { console.log(`El IMC de ${NOMBRE2} es mayor que el de 
        ${NOMBRE1}`);
        } else console.log(`Ambos tienen el mismo IMC`)
}

if (isNumber){
    compararIMC(imcJuan,imcMarcos,NOMBRE1,NOMBRE2);
    console.log(`¿Tiene ${NOMBRE1} mayor IMC que ${NOMBRE2}?: ${isGordo}`);
} else console.log(`No se puede comparar los IMCs por parametros en formato incorrecto.`);

export {calcularIMC, compararIMC}

