"use strict"

// Realizo Casting Number para pasar el Prompt de String a Number.
let numero = Number(prompt(`Escriba un numero del 1 al 12:`)); 

// Creo Array
let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];


// Utilizo !isNaN para comprobar si numero correspone a un numero (es boolean)
function numeroMes(numero, meses){
    if (!isNaN(numero)) {
        if(numero < 0 || numero > 12) {
            console.log(`El número está fuera del rango deseado (Entre 1 y 12).`); 
        } else {
            console.log(`El número ${numero} corresponde al mes de ${meses[numero-1]}`);
        }
    } else console.log("No has introducido un número.");
}

numeroMes(numero, meses);

export { numeroMes }