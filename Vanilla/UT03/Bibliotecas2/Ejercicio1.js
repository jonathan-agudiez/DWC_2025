"use strict";
import { sumarParametros } from '../principal.js'

/* 
--------------------
EJERCICIO 1
-------------------- 
Crea una función que permita sumar todos los números pasados como parámetros.
Deberá seguir estas premisas:
• Comprobará si son de tipo numérico antes de realizar la operación, si no lo es,
lanzará un mensaje de error por consola y detendrá la ejecución del programa.
• Debe tener como mínimo dos parámetros o no se ejecutará. Debe insultar informar
al usuario.
• La salida debe estar debidamente formateada.
Usas psudoarray: arguments
*/

let ejecutando = true; 
let valido = false; 
let  numeros = [];

do {
    let numero;
    
    // Casting Number porque sino typeof numero = string
    numero = Number(prompt("Escribe el número del 1 al 10. Escribe 0 para salir.")); 

    if (isNaN(numero)){         // Si no es un número... se sale del bucle
        ejecutando = false;
        console.log(`Error: Has introducido algún parametro no numérico.`);
        } else if (numero === 0) {      
                if(numeros.length < 2){
                    console.log(`¡Debe introducir más números!`);
                    } else {
                        ejecutando = false;
                        valido = true;              // Listo para sumar
                        }
                } else numeros.push(numero);    // numero se añade al array
    
} while (ejecutando) 

    
if(valido) console.log(`El resultado de la suma de ${numeros} es ${sumarParametros(...numeros)}`); 
else console.log("Fin de programa.");


