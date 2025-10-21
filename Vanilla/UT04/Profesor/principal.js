"use strict";

/**
 * DESCARGO DE RESPONSABILIDAD
 * Todas las funciones aquí declaradas son un claro error de diseño (no debe hacerse en principal.js).
 * Deben estar en un archivo de biblioteca aparte, se es consciente de este error.
 * En lo sucesivo, y exclusivamente con fines didácticos, serán declaradas de este modo.
 * Tanto en las prácticas como en un proyecto real, no debe hacerse así (si no queremos ser devorados por la entropía).
 */

/************** Trabajando con el DOM **************/

/* Tipos de nodo en un document HTML.

  -> Element, nodo que contiene una etiqueta HTML (nodeType = 1).
  -> Attr, nodo que forma parte de un elemento HTML (nodeType = 2).
  -> Text, nodo que contiene texto y que no puede tener hijos (nodeType = 3).
  -> Existen 12 tipos de nodos.

*/

/********************************************************************************
 *  Posicionamiento relativo firstChild, lastChild, nextSibling, previousSibling.
 * */

/* const parrafo = document.body.firstChild;
const parrafo2 = document.body.firstElementChild;
console.log(parrafo);
console.log(parrafo2); */

/***************************************************
 *  Tipos de nodo Element (1), Attr (2) y Text (3).
 * */

/* console.log(parrafo.nodeType);
console.log(parrafo2.nodeType);
console.log(parrafo.nodeName);
console.log(parrafo2.nodeName); */

/*******************************************************************************************************
 *  Seleccionando elementos (recursivamente):
 *    --> getElementsByTagName,
 *    --> getElementById,
 *    --> getElementsByName y
 *    --> getElementByClassName.
 * */

/* const parrafos = document.getElementsByTagName("p"); // Parrafos es un HTMLCollection.
console.log(parrafos); // Ver la estructura del objeto (siempre es buena idea).
console.log(`Párrafos seleccionados ${parrafos.length}`);
for (let i = 0; i < parrafos.length; i++) {
  console.log(parrafos[i]);
} */

// Error. No es un array.
/* parrafos.map((p) => {
  console.log(p);
}); */

/******************************************************************************
 *  Seleccionando elementos como en CSS:
 *    --> querySelectorAll y
 *    --> querySelector.
 * */

/* const inputs = document.querySelectorAll("input"); // Inputs es un NodeList.
console.log(inputs); */


// ¡¡¡CUIDADO CON ESTO!!! -> Consultad el prototipo del objeto antes.
/* inputs.map((i) => {
  console.log(i);
}); */

/* const capa_botones = document.querySelector("#botones");
console.log(capa_botones);

const capas = document.querySelectorAll("div div");
console.log(capas);

const capas2 = document.querySelectorAll(".contenido");
console.log(capas2); */

/***********************************************
 *   ¡¡¡ATENCIÓN!!!
 *  --> Las referencias con getElementBy siempre contienen el estado actual del documento (están vivas).
 *  --> Las referencias con querySelector contienen los elementos en el momento de ejecución (no cambian).
 *
 * **********************************************/

/***************************************************************************************************************************
 * Acceso y modificacción de atributos -> 
 *    -> getAttribute(nombre), 
 *    ->setAttribute(nombre, valor) o como propiedades de elementos.
 * */

const alinearDerecha = () => {
  var derecha = document.getElementById("primero");
  console.log(derecha.getAttribute("align")); // No está definido.
  derecha.setAttribute("align", "right");
  console.log(derecha.getAttribute("align")); // Después del cambio es "right".
};

/* Usando la propiedad style pada dar formato -> elemento.style.propiedad (Mala idea). */

const pintarAzul = () => {
  const azules = document.getElementsByClassName("nuevo");
  console.log(azules);
  for (let i = 0; i < azules.length; i++) {
    azules[i].style.color = "blue";
  }
};

/** Mejor se usa CSS 
 *    -> className, es un atributo cadena de texto. Es destructivo (borra y añade). 
 *    -> classList, con métodos:
 *        -> add, añade clase de forma no destructiva.
 *        -> remove, elimina la clase indicada si existe.
 *        -> toggle, alterna la clase especificada (añade si no existe y elimina si existe).
 *        -> length, número de clases del elemento DOM.
 *        -> contains, si contiene la clase indicada (devuelve un boleano).
 *        .> replace, sustituye la primera clase pasada como parámetro por la segunda.
*/

const primero = document.getElementById("primero");
primero.classList.add("verde");

const destacarTexto = () => {
  const nuevos = document.getElementsByClassName("nuevo");
  for (var i = 0; i < nuevos.length; i++) {
    nuevos[i].classList.toggle("destacado");
  }
};

/*********************************************************************************
 * Creando objetos en el DOM: 
 *    --> document.createElement,
 *    --> y document.createTextNode.
 * 
 * Se realiza en dos acciones:
 *    --> cear el elemento a introducir (con su contenido y propiedades),
 *    --> insertar el elemento en el DOM.
 * */

/* const crearConCE = () => {
  // 1.- Se crea el elemento,
  var elemento = document.createElement("p");
  // 2.- Se crea el texto (contenido),
  var contenido = document.createTextNode(
    "Nuevo párrafo creado <strong class='nuevo'>dinámicamente</strong>"
  );
  // 3.- Se añade el contenido (texto) al elemento,
  elemento.appendChild(contenido);
  // 4.- Se añade al DOM -> appendChild(nuevo), insertBefore(nuevo,existente),  removeChild(existente), replaceChild(nuevo,existente).
  document.getElementById("botones").appendChild(elemento);
}; */

// Usando innerHTML (¡¡¡ATENCIÓN!!! -> reemplaza todo el contenido del nodo por el nuevo).

/* const crearConIH = () => {
  // 1.- Se crea el elemento,
  var ele2 = document.createElement("p");
  // 2.- Se crea el texto (contenido),
  ele2.innerHTML =
    "Nuevo párrafo creado dinámicamente con <strong class='nuevo'>innerHTML</strong>";
  // 3.- Se añade al DOM -> appendChild(nuevo), insertBefore(nuevo,existente),  removeChild(existente), replaceChild(nuevo,existente).
  document.getElementById("botones").appendChild(ele2);
}; */

// Usando insertAdjacentHTML("dondeInsertar", "contenidoAInsertar") -> respeta el contenido previo.

/* Ejemplos e uso localización. 

<!-- beforebegin -->
<p id="feo">
  <!-- afterbegin -->
  	Párrafo muy feo.
  <!-- beforeend -->
</p>
<!-- afterend --> 
*/

/* document
  .getElementById("botones")
  .insertAdjacentHTML(
    "afterbegin",
    "Nuevo párrafo creado dinámicamente con <strong>innerAdjacentHTML</strong>"
  ); */


