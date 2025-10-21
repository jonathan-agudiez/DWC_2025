"use strict";

/*
Ejercicio 2 - Números DOM
Crea una página web que tenga un listado de tipo <ul> con un <li> de muestra y el texto
“Soy una muestra fea” (o algo similar). Cada dos segundos (con setInterval()) se añadirá un nuevo elemento <li> con un número aleatorio entre 1 y 1000.
*/


const escribirFrase = () => {
    const lista = document.getElementsByTagName("ul")[0];

    lista.insertAdjacentHTML("beforeend","<li>Holi</li>")
    
};

setInterval(escribirFrase, 1000);

