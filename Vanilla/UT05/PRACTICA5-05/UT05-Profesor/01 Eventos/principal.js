"use strict";

import {
  saludar,
  saludarNombre,
  decirAdios,
} from "./bibliotecas/biblioteca.js";

/** ****************************************************
 *  Eventos en Javascript
 *
 *******************************************************/

// Esperar a la carga del DOM...
/* 
document.addEventListener("DOMContentLoaded", () => {
  // Todo el código JavaScript aquí.
});
 */

// ...o esperara a todo el objeto window (es preferible utilizar esta opción por si es necesario interactuar con otros objetos que no sean del DOM).
window.onload = () => {
  const elemento = document.getElementById("feo");
  const boton = document.getElementById("boton");

  /** ************** Asignación de eventos **** Cómo NO HACERLO a partir de ahora *********************************
  //-------------------------------------------------------------------------------------
  <input type="button" value="Boton Hola Feo" onClick="alert('Hola Feo');alert('Adios Feo');" />
  <input type="button" value="Botón miFuncion" onClick="miFuncion('parametroFeo');" />
  //-------------------------------------------------------------------------------------
  // Tampoco usando en atributo onClick del objeto con setatribute.
  elemento.onclick = "saludar"; // Asigna la función "saludar" como manejador.
  elemento.onclick = "saludar()"; // Asigna el resultado de la función "saludar" al manejador.
  elemento.setAttribute("onClick", "saludar();");
  //-------------------------------------------------------------------------------------
  // Ni con el pseudoelemento this
  <div
    id='contenidos'
    style='width:150px; height:60px; border:thin solid silver' // ¡¡NUNCA USAR ESTILO EN LÍNEA!!
    onmouseover="this.style.borderColor='black';" // ¡¡NUNCA USAR ESTILO EN LÍNEA!!
    onmouseout="this.style.borderColor='red';" // ¡¡NUNCA USAR ESTILO EN LÍNEA!!
  >
    Contenidos
  </div>; 
  ******************************************************************************************************************/

  /** ************ Cómo hacerlo a partir de ahora -> addEventListener() *********************************
   * addEventListener(
   *   -> Nombre del evento,
   *   -> Función declaración a utilizar (cuidado con las funciones anónimas o flecha),
   *   -> Flujo de eventos (false -> event bubblig (recomendado), true -> event capture),
   *   -> Opciones de ejecución -> objeto con las opciones {capture: true, once: true, passive: true, signal: true}
   * );
   *    */

  /* elemento.addEventListener("click", saludar, false); */

  // Añadir varias funciones al evento.

  /* elemento.addEventListener("click", decirAdios, false); */

  // Funciones con parámetros a través de una función flecha.

  /*  elemento.addEventListener(
    "click",
    () => {
      saludarNombre("Feo");
      decirAdios();
    },
    false
  ); */

  // ************** Como eliminar un evento -> removeEventListener() *********************************

  /** Si se ha añadido un evento a través de una función declaración es posible eliminar ese método. */
  /** Si se ha añadido a través de una función anónima o flecha no se podrá eliminar el evento (aunque sí el elemento). */

  /* elemento.addEventListener("click", decirAdios);
  boton.addEventListener("click", () => {
    elemento.removeEventListener("click", decirAdios);
  }); */

  // **************** Objeto event *********************************

  /* elemento.addEventListener(
    "click",
    (evento) => {
      console.log(evento);
    },
    false
  ); */

  // **************** Flujo de eventos *********************************
  // ¿Cómo se resuleve si se producen dos eventos al mismo tiempo?
  /** event bubbling (burbujeo)   --> de abajo a arriba (false) (desde el objeto que lo provocó hasta window). */
  /** event capturing (captura)   --> de arriba a abajo (true) (desde window hasta el objeto que lo provocó y de vuelta hacia window). */

  /** Por defecto el valor del tercer parámetro es false (burbujeo). */

  /* let c = 0;
  let j = 0;
  // Añadir un evento a todo el documento.
  document.addEventListener(
    "click",
    () => {
      c++;
      console.log(`Pulsado document ${c} veces`);
    },
    false
  );
  // Jugando con la propagación de eventos.
  elemento.addEventListener(
    "click",
    () => {
      j++;
      console.log(`Pulsado feo ${j} veces`);
    },
    false
  ); */
}; // Fin del window.onload.
