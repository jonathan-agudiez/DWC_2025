"use strict";

import { validarFormulario } from "./bibliotecas/biblioteca.js";

window.onload = () => {
  /************************************************************
   * Acceso a un formulario.
   *
   ***********************************************************/

  //Mediante el atributo name.
  const formulario = document.forms.formCliente;

  //console.log(document.forms);
  /* console.log(formulario);
  console.log(formulario.nombre);
  console.log(formulario.correo.value); */

  //Mediante el atributo id.
  const formuId = document.getElementById("frmClnt");
  const correoId = document.getElementById("email");

  /************************************************************
   * Elementos de un formulario.
   *
   * ***********************************************************/

  // Text (se accede a su valor a través del ctributo value).
  /**
   *  Hay varios tipos, entre ellos:
   *    type="search"   -> para búsquedas
   *    type="url"      -> para direcciones de internet
   *    type="email"    -> para correos electrçonicos
   *    type="password" -> para contraseñas
   *    type="hidden"   -> oculto al usuario (no al programador)
   *
   *  Si es necesario un texto multilínea o largo se utiliza <textarea>.
   *  */

  // Radio (única selección).
  // El atributo name permite agrupar elementos.
  const radioButton = document.getElementById("radioBoton");
  radioButton.addEventListener(
    "change",
    (evento) => {
      let radio = document.getElementsByName("pregunta");
      // Se recorren todos los elementos agrupados.
      for (let i = 0; i < radio.length; i++) {
        // Se comprueba cuál ha sido marcado a través de su propiedad "checked".
        if (radio[i].checked === true)
          console.log(`Valor del elemento marcado ${radio[i].value}.`);
      }
    },
    false
  );

  // CheckBox (múltiple selección).
  const checkBox = document.getElementById("cajaBoton");
  checkBox.addEventListener(
    "change",
    (evento) => {
      // Se seleccionan todos los elementos agrupados.
      let checkBox = document.getElementsByName("preguntaC");
      // Variable para los elementos seleccionados.
      var marcados = "";
      for (let i = 0; i < checkBox.length; i++) {
        // Si está marcado lo añado a la variable.
        if (checkBox[i].checked === true) {
          marcados += `${checkBox[i].value} `;
        }
      }
      console.log(`Valores del elemento marcados ${marcados}.`);
    },
    false
  );

  // Select (única selección).
  // La propiedad selectedIndex contiene la posición del array <options> seleccionada o -1 si no hay seleccionada ninguna.
  const seleccion = document.getElementById("selectAprobar");
  // Cada <select> contiene un HTMLCollection con los <option> que contiene.
  //console.log(seleccion.options);
  seleccion.addEventListener(
    "change",
    (evento) => {
      console.log(evento.target);
      console.log(
        `El select tiene ${evento.target.options.length} opciones disponibles.`
      );
      // Se guarda en la variable "seleccionado" el índice de la opción seleccionada para poder acceder al array de sus valores.
      let seleccionado = evento.target.selectedIndex;
      // Dentro de cada options, value almacena el valor y text el texto mostrado en pantalla (no tienen que ser iguales).
      console.log(
        `El valor de la opción seleccionada es ${evento.target.options[seleccionado].value} y el texto asociado es ${evento.target.options[seleccionado].text}.`
      );
      //e.target.selectedIndex = 0; // Se cambia el índice seleccionado.
    },
    false
  );

  // Select (múltiple selección).
  const seleccionMultiple = document.getElementById("selectFrutas");

  seleccionMultiple.addEventListener(
    "change",
    (evento) => {
      // selectedOptions es un HTMLCollection con las etiquetas <option> seleccionadas.
      console.log(evento.target.selectedOptions);
    },
    false
  );

  // ************** Validar un formulario con onSubmit. ************** */

  // <form onSubmit="return validarFormulario();" action='web_procesa_datos.php'> -> Evitar a toda costa.

  const boton = document.getElementById("aceptar");
  boton.addEventListener(
    "click",
    (evento) => {
      validarFormulario();
    },
    false
  );
}; //fin windows.onload.
