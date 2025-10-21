"use strict";

/*
Ejercicio 1 - Contando elementos del DOM
Se dispone de una página web en Ejercicio01.html. Añade el código necesario en un
fichero js aparte para mostrar la siguiente información:
• el número de párrafos de la página,
• el texto del segundo párrafo,
• el número de enlaces de la página,
• la dirección del primer enlace y
• la dirección del penúltimo enlace.
El texto con la información será añadido al <div> con id=info y debe estar debidamente
formateado
*/

const mostrarNumeroParrafos = () => {
    const parrafos = document.getElementsByTagName("p");
    return `Número de párrafos: ${parrafos.length}`;
};
  
const mostrarSegundoTexto = () =>{
    const parrafos = document.getElementsByTagName("p");
    return `Texto del segundo párrafo: ${parrafos[1].innerText}`; 
};

const mostrarNumeroEnlaces = () => {
    const enlaces = document.body.getElementsByTagName("a");
    return `Número de enlaces: ${enlaces.length}`;
};


const mostrarDireccionPrimerEnlace = () => {
    const enlace = document.body.getElementsByTagName("a");
    /* const enlace2 = document.querySelector("a"); */
    return `Dirección del primer enlace: ${enlace[0].getAttribute("href")}`; 
    /* console.log(`Dirección del primer enlace: ${enlace2.href}`); */  // Forma alternativa.
};

const mostrarDireccionPenultimoEnlace = () => {
    const enlace = document.body.getElementsByTagName("a");
    /* const enlace2 = document.querySelector("a"); */
    return `Dirección del primer enlace: ${enlace[enlace.length-1].getAttribute("href")}`; 
    /* console.log(`Dirección del primer enlace: ${enlace2.href}`); */  // Forma alternativa.
};

const escribirTexto = () => {

    const texto = document.getElementById("info");

    texto.innerHTML = `
    <p>${mostrarNumeroParrafos()}</p>
    <p>${mostrarSegundoTexto()} </p>
    <p>${mostrarNumeroEnlaces()} </p>
    <p>${mostrarDireccionPrimerEnlace()}</p>`;
}

escribirTexto();


/*     mostrarNumeroParrafos();
    mostrarSegundoTexto();
    mostrarNumeroEnlaces();
    mostrarDireccionPrimerEnlace(); */
    
export { mostrarNumeroParrafos, mostrarSegundoTexto, mostrarNumeroEnlaces, mostrarDireccionPrimerEnlace, escribirTexto };


