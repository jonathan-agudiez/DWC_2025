"use strict";

import { mostrarError } from "./Bibliotecas/principal.js";
import { obtenerEstadoValidacion, manejarGuardarDisco } from "./ejercicio01.js";
import { renderizarColeccion, filtrarColeccion } from "./uiDiscos.js";

window.onload = () => {
  

  // Todas las variables del DOM.
  const form = document.getElementById("formDisco");
  const inputNombre = document.getElementById("nombre");
  const inputCaratula = document.getElementById("caratula");
  const inputGrupo = document.getElementById("grupo");
  const inputAnio = document.getElementById("anio");
  const selectGenero = document.getElementById("genero");
  const inputLocalizacion = document.getElementById("localizacion");
  const checkboxPrestado = document.getElementById("prestado");
  const contErrores = document.getElementById("mensajeErrores");
  const mensajeExito = document.querySelector(".mensaje-exito");

  const btnGuardar = document.getElementById("btn-guardar");
  const btnMostrar = document.getElementById("btn-mostrar");

  const gridDiscos = document.getElementById("grid-discos");
  const listadoVacio = document.getElementById("listado-vacio");

  const inputBuscador = document.getElementById("buscador");
  const btnBuscar = document.getElementById("btn-buscar");
  const btnLimpiar = document.getElementById("btn-limpiar");

 
  // Se crea un objeto para JSON.
  let coleccion = { discos: [] };

  // Se guarda la colección actual en localStorage.
  const guardarEnLocalStorage = () => {
    localStorage.setItem("coleccionDiscos", JSON.stringify(coleccion));
  };

  // Se carga la colección desde localStorage si existe.
  const cargarDesdeLocalStorage = () => {
    const datos = localStorage.getItem("coleccionDiscos");

    if (datos) {
      coleccion = JSON.parse(datos);
    }
  };


  // Se obtienen los datos del formulario.
  const obtenerDatosFormulario = () => {
    return {
      nombre: inputNombre.value,
      grupo: inputGrupo.value,
      anio: inputAnio.value,
      genero: selectGenero.value,
      localizacion: inputLocalizacion.value,
      caratula: inputCaratula.value,
      prestado: checkboxPrestado.checked
    };
  };

  // VALIDACIÓN
  // Se usa input para que se muestre la validación al pulsar la tecla. Salvo en selectGenero, que se usa evento change.
  inputNombre.addEventListener("input", () => {
    const estado = obtenerEstadoValidacion(obtenerDatosFormulario());
    mostrarError(inputNombre, estado.nombre);
  });

  inputGrupo.addEventListener("input", () => {
    const estado = obtenerEstadoValidacion(obtenerDatosFormulario());
    mostrarError(inputGrupo, estado.grupo);
  });

  inputAnio.addEventListener("input", () => {
    const estado = obtenerEstadoValidacion(obtenerDatosFormulario());
    mostrarError(inputAnio, estado.anio);
  });

  selectGenero.addEventListener("change", () => {
    const estado = obtenerEstadoValidacion(obtenerDatosFormulario());
    mostrarError(selectGenero, estado.genero);
  });

  inputLocalizacion.addEventListener("input", () => {
    const estado = obtenerEstadoValidacion(obtenerDatosFormulario());
    mostrarError(inputLocalizacion, estado.localizacion);
  });


  // Aquí se carga inicialmente el LocalStorage.
  cargarDesdeLocalStorage();
  renderizarColeccion(coleccion, gridDiscos, listadoVacio);


    // LISTENERS
    // Botón Guardar (se añade disco a coleccion).
    btnGuardar.addEventListener("click", (e) => {
    e.preventDefault(); // Se previene una carga de página por defecto al usar button submit.

    // Se construye el objeto de referencias que necesita manejarGuardarDisco.
    const refs = { form, inputNombre, inputGrupo, inputAnio, selectGenero,
      inputLocalizacion, inputCaratula, checkboxPrestado, contErrores, mensajeExito,
      gridDiscos, listadoVacio };

    // Se delega toda la lógica de guardado a ejercicio01.js
    coleccion = manejarGuardarDisco(coleccion, refs);
  });

  // Si se hace focus en input o select se oculta el mensaje de "Guardado correctamente".
  form.addEventListener("focusin", (e) => {
    if (e.target.matches("input, select, textarea")) {
      mensajeExito.classList.add("oculto");
    }
  });

  // Botón Mostrar: se pinta la colección completa.
  btnMostrar.addEventListener("click", () => {
    renderizarColeccion(coleccion, gridDiscos, listadoVacio);
  });

  // Botón Buscar:  se filtra por nombre o grupo.
  btnBuscar.addEventListener("click", () => {
    filtrarColeccion(inputBuscador.value, coleccion, gridDiscos);
  });

  // Al pulsar Enter en el input del buscador filtra igual que al hacer click.
  inputBuscador.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      filtrarColeccion(inputBuscador.value, coleccion, gridDiscos);
    }
  });

  // Botón Limpiar: se borra el texto y devuelve al listado original.
  btnLimpiar.addEventListener("click", () => {
    inputBuscador.value = "";
    renderizarColeccion(coleccion, gridDiscos, listadoVacio);
  });

  // Se hace click en el grid para eliminar discos.
  gridDiscos.addEventListener("click", (e) => {
    // Se obtiene el elemento sobre el que se hizo clic.
    const btn = e.target;

    if (btn.classList.contains("btn-eliminar")) {
      // Se obtiene el id del disco asociado al botón (almacenado en el atributo html data-id).
      const id = Number(btn.dataset.id);

      // Se busca dentro de la colección el disco con dicho id.
      const disco = coleccion.discos.find((d) => d.id === id);

      if (disco) {
        const confirmado = window.confirm(
          `¿Estás segur@ de que quieres eliminar "${disco.nombre}" de la colección?`
        );

        if (confirmado) {
          coleccion.discos = coleccion.discos.filter((d) => d.id !== id);
          guardarEnLocalStorage();
          renderizarColeccion(coleccion, gridDiscos, listadoVacio);
        }
      }
    }
  });
};
