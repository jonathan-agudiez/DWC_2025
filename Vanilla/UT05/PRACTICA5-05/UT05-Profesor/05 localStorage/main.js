"use strict";

import {
  pintarUsuariosJSON,
  borrarUsuario,
  limpiarFormulario,
} from "./bibliotecas/biblioteca.js";

window.onload = () => {
  // Se guardan referencias que se usarán varias veces.
  const formulario = document.getElementById("formulario");
  const datos = document.getElementById("datos");

  /*********************************************************************
   *
   * La API localStorage / sessionStorage
   *
   *********************************************************************/

  // setItem    --> crear una entrada en la base de datos.
  // getItem    --> obtener una entrada en la base de datos.
  // removeItem --> indica que valor hay que eliminar (recibe un key como parámetro).
  // key(n)     --> devuelve la clave enésima posición de la base de datos.
  // clear()    --> borrar la base de datos.

  // ¡¡¡IMPORTANTE!!! Comprobar si el navegador lo soporta.
  if (typeof Storage !== "undefined") {
    // Mirar el prototipo del objeto para ver qué puedo hacer.
    console.log(localStorage);

    // Se define la clave "nombre" con el valor "Guapo".
    localStorage.setItem("nombre", "Guapo");
    // Se sobrescribe la clave "nombre".
    localStorage.setItem("nombre", "Feo");
    // Se añaden nuevas claves.
    localStorage.setItem("apellidos", "De Verdad");
    localStorage.setItem("fecha", "1954");
    // Se muestran las claves.
    console.log(
      `${localStorage.getItem("nombre")} ${localStorage.getItem("apellidos")}`
    );
    // Mostrar toda la información de la base de datos.
    /* console.log("**** Contenido de la base de datos localStorage ****");
    for (let i = localStorage.length - 1; i >= 0; i--) {
      console.log(
        `${localStorage.key(i)} : ${localStorage.getItem(localStorage.key(i))}`
      );
    }
    console.log("****************************************************");
 */
    // Borrar el contenido (todo).

    /* localStorage.clear();
    console.log(localStorage); */

    /*********************************************************************
     *
     * Usando JSON.
     *
     *********************************************************************/

    // parse      --> genera un objeto JSON a partir de un string.
    // stringify  --> genera un string a partir de un JSON.

    const feos = [
      {
        id: "69bc3ffd-3a9d-4e03-bdd1-0029e595f128",
        nombre: "Juan",
        fecha: 1958,
        apellido: "García",
      },
      {
        id: "5f80f6bd-650d-45d6-98bf-d76c1fcb2698",
        nombre: "Antonio",
        fecha: 1987,
        apellido: "López",
      },
    ];

    localStorage.setItem("usuarios", JSON.stringify(feos));
    //console.log(localStorage);

    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    // Se lleva la lógica de pintado a una función (principio de modularidad).
    datos.innerHTML = pintarUsuariosJSON(usuarios);

    /*********************************************************************
     * Guardando información.
     *********************************************************************/

    document.getElementById("guardar").addEventListener(
      "click",
      () => {
        // Se crea el objeto con los datos del formulario.
        let nuevo_usuario = {
          id: crypto.randomUUID(),
          // Datos sin comprobar: chufa máxima.
          /* nombre: document.getElementById("nombre").value,
          apellido: document.getElementById("apellido").value,
          fecha: document.getElementById("fecha").value, */
          nombre: document.forms.feoForm.nombre.value,
          apellido: document.forms.feoForm.apellido.value,
          fecha: document.forms.feoForm.fecha.value,
        };
        // Se introduce el usuario en el objeto JSON.
        usuarios = [...usuarios, nuevo_usuario];
        // Se guarda el usuario en la base de datos.
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        // Se imprimen los datos en el DOM (imitando a la reactividad).
        datos.innerHTML = pintarUsuariosJSON(usuarios);
        // Se vacía el formulario (buena práctica tras una acción exitosa).
        limpiarFormulario(formulario);
      },
      false
    );

    /*********************************************************************
     * Borrando información.
     *********************************************************************/
    document.getElementById("datos").addEventListener(
      "click",
      (evento) => {
        if (evento.target.classList.contains("borrar")) {
          if (confirm("¿Desea borrar este registro?")) {
            usuarios = borrarUsuario(usuarios, evento.target.id);
            localStorage.setItem("usuarios", usuarios);
            datos.innerHTML = pintarUsuariosJSON(usuarios);
          }
        }
      },
      false
    );

    /*********************************************************************
     * Limpiando el formulario.
     *********************************************************************/

    document.getElementById("limpiar").addEventListener(
      "click",
      (evento) => {
        limpiarFormulario(formulario);
      },
      false
    );

    // Si no se dispone de esta tecnología.
  } else {
    console.error("Este navegador no soporta la API localStorage.");
  }
}; // Fin window.load.
