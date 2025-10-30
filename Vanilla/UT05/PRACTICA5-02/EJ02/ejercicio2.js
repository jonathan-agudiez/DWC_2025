"use strict";

/* Ejercicio 2 - Pestañas
Realiza un sistema de pestañas compuesto por dos <div>:
• El primero contendrá las pestañas (mínimo tres) que mostrarán un nombre (elige la etiqueta HTML que prefieras para ello).
• El segundo contendrá la información de cada pestaña (elige la etiqueta HTML que prefieras para esta tarea).

Al pulsar sobre cada pestaña del primer <div> se mostrará la información relacionada del segundo <div>. Su relación será secuencial: la primera pestaña mostrará el primer contenido, la segunda pestaña el segundo contenido… No se podrá utilizar el atributo id de los elementos HTML.

Aplica un poco de tu estilo a las pestañas a través de CSS. */


window.onload = function(){

    const pestanas = document.getElementsByClassName("pestana");
    const contenidos = document.getElementsByClassName("contenedor-contenido");

    //Contenido visible por defecto
    pestanas[0].classList.add("activa");
    contenidos[0].classList.add("visible");
    
    let indice = 0;

    // Función que activa y desactiva estilos según su indice.
    const activo = (indice) =>{
        // Se borra la clase activa/visible primero.
        for(let i = 0; i < pestanas.length; i++){
            pestanas[i].classList.remove("activa");
            contenidos[i].classList.remove("visible");
        }

        // Se añade la clase activa/visible según su índice.
        if(pestanas[indice]) pestanas[indice].classList.add("activa");
        if(contenidos[indice]) contenidos[indice].classList.add("visible");
    }
    

    document.addEventListener("click", (evento)=>{
        // El bucle recorre todas las pestañas para localizar cuál ha sido clicada.
        for(let i = 0; i < pestanas.length; i++){
            if(pestanas[i] === evento.target){
                indice = i;
            }
        };

        activo(indice);

    }, false)




}