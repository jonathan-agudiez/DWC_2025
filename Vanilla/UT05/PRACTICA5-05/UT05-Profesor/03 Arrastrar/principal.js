"use strict";

window.onload = () => {
  /*****************************************************************************************
   * Un evento especial: arrastrar y soltar.
   *****************************************************************************************/

  /** Eventos a tener en cuenta:
   *    - dragstart   --> comienza el evento de arrastrar,
   *    - dragover    --> mientras el elemento arrastrado esté encima del soltable,
   *    - drop        --> cuando se suleta el elemento arrastrado sobre el soltable.
   *
   * De modo opcional también se dispone de:
   *    - dragenter   --> cuando el elemento arrastrado entra sobre el soltable,
   *    - dragleave   --> cuando el elemento arrastrado sale del elemento soltable,
   *    - dragend     --> cuando se termina el evento (después del drop).
   *
   *    Se utilizan, entre otras cosas, para aplicar diseño al evento a través de clases.
   */

  // Asignar propiedad "dragable" a los objetos arrastables.

  const elementos_arrastables = document.getElementsByClassName("arrastrable");
  for (let i = 0; i < elementos_arrastables.length; i++) {
    elementos_arrastables[i].setAttribute("draggable", true);
  }

  /*****************************************************************************************
   * Datos del evento.
   *
   *  DataTransfer es un objeto temporal para guardar información que se produce al empezar el arrastre de un elemento.
   *
   *  Posee los siguiente métodos (entre otros):
   *    - setData()   --> configura un par clave-valor durante el proceso de arrastre.
   *    - getData()   --> obtienen el valor de la clave especificada como parámetro.
   *    - clearData() --> borra el contenido del objeto si no se le especifica parámetro.
   *
   *****************************************************************************************/

  /*****************************************************************************************
   * Hacerlo con variables globales, es decir, mal.
   *****************************************************************************************/
  //let elementoArrastrado; // Elemento que va a ser arrastarado.

  // Se añade el evento cuando se inicie el proceso de arrastrar.
  document.getElementById("zona_con_arrastrar").addEventListener(
    "dragstart",
    (evento) => {
      // Se muestra por consola el objeto event.
      console.log(evento);
      // Se añade una nueva entrada en dataTransfer.
      evento.dataTransfer.setData("identificador", evento.target.id);
      evento.dataTransfer.setData("nombre", evento.target.localName);
      // Se muestran los datos por consola.
      console.log(evento.dataTransfer.getData("identificador"));
      console.log(evento.dataTransfer.getData("nombre"));

      // Forma de hacerlo con objeto completo (recuerda, opción mala).
      //elementoArrastrado = evento.target;
    },
    false
  );

  document.getElementById("zona_con_arrastrar").addEventListener(
    "dragover",
    (evento) => {
      evento.preventDefault(); // ¡¡IMPORTANTE!! -> previene el funcionamiento por defecto.
    },
    false
  );

  document.getElementById("zona_con_arrastrar").addEventListener(
    "drop",
    (evento) => {
      evento.preventDefault(); // ¡¡IMPORTANTE!! -> previene el funcionamiento por defecto (sólo es necesario en versiones antiguas).
      if (
        evento.target.classList.contains("soltable") ||
        evento.target.classList.contains("feo")
      ) {
        console.log(`Soltado en ${evento.target.className}`);

        evento.target.appendChild(
          document.getElementById(evento.dataTransfer.getData("identificador"))
          //elementoArrastrado // Se añade el elemento que está siendo arrastrado.
        );
      }
    },
    false
  );

document.getElementById("zona_sin_arrastrar").addEventListener(
  "dragstart",
  (evento) => {
    // Se muestra por consola el objeto event.
    console.log(evento);
    // Se añade una nueva entrada en dataTransfer.
    evento.dataTransfer.setData("identificador", evento.target.id);
    evento.dataTransfer.setData("nombre", evento.target.localName);
    // Se muestran los datos por consola.
    console.log(evento.dataTransfer.getData("identificador"));
    console.log(evento.dataTransfer.getData("nombre"));

    // Forma de hacerlo con objeto completo (recuerda, opción mala).
    //elementoArrastrado = evento.target;
  },
  false
);



}; // Fin del window.onload.
