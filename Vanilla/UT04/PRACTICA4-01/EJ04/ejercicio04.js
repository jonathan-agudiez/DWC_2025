"use strict";

/*
Ejercicio 4 - Creando funciones DOM
Aunque parezca mentira, no existe ningún método para añadir un elemento después de otro
como sí lo hace insertBefore. Crea una función que reciba como parámetros dos elementos
(el primero debe ser nuevo en el DOM) y coloque el primero después del segundo. La llamada
se realizará de este modo:
function insertAfter(nuevoElemento, existenteElemento); 
*/

let existenteElemento = document.createElement("div");
document.body.appendChild(existenteElemento);

let nuevoElemento = document.createElement("p");
nuevoElemento.textContent = "Holi.";

const insertAfter = (nuevoElemento, existenteElemento) => {
   
    const padre = existenteElemento.parentNode;

    // Si tiene hermanos colocamos el elemento antes de hermano.
    if (existenteElemento.nextSibling){
        padre.insertBefore(nuevoElemento, existenteElemento.nextSibling);
    } else {
        padre.appendChild(nuevoElemento);
    }
}

insertAfter(nuevoElemento, existenteElemento);