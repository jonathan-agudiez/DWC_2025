"use strict";

/*
Ejercicio 1 - El censor DOM
Crear una función que recorra el DOM desde la etiqueta <body> del fichero Ejercicio01.html
y si encuentra la palabra "sexo" elimine el texto y la sustituya por "Contenido Bloqueado"
poniendo el texto en rojo, negrita y cursiva (utiliza clases para el estilo). 
*/


const PALABRA = "Contenido Bloqueado";

let cambiarTexto = () => {
    let parrafos = document.body.getElementsByTagName("p");
    for (let i = 0; i < parrafos.length; i++){
        if(parrafos[i].textContent.includes("sexo")){

            // replace() no cambia el texto original del párrafo.
            // Devuelve una nueva cadena con el cambio, por eso la reasignamos a textContent o innerHTML (prefiero innerHTML para respetar formato).
            parrafos[i].innerHTML = parrafos[i].innerHTML.replace(
                "sexo", 
                `<span class="bloqueado">${PALABRA}</span>`);
        };
    };
};
setTimeout(cambiarTexto, 1000);


