"use strict";

// ----------------------------------------------------
// Aplicación: Gestión de colección de discos
// Estructura:
// - validacion.js: lógica de validación de los campos
// - modeloDisco.js: se crean los objetos disco con id
// - almacenamiento.js: se carga/guarda en localStorage
// - uiDiscos.js: se pintan las tarjetas y los filtros
// - ejercicio01.js: se dirige la lógica
// - main.js: referencias al DOM y registro de eventos 
// ----------------------------------------------------

import { mostrarError } from "./Bibliotecas/principal.js";
import { obtenerEstadoValidacion, validarFormulario, obtenerMensajesError } 
from "./validacion.js";
import { crearDisco } from "./modeloDisco.js";
import { guardarEnLocalStorage } from "./almacenamiento.js";
import { actualizarMensajeVacio } from "./uiDiscos.js";



// Se obtienen los datos del formulario a partir de las referencias (desestructuración de objetos, razón: hace más claro cada módulo).
const obtenerDatosDesdeRefs = (refs) => {
  const { inputNombre, inputGrupo, inputAnio, selectGenero, inputLocalizacion,
inputCaratula, checkboxPrestado } = refs;

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

// Se muestran los errores de cada campo usando mostrarError.
const mostrarErroresCampos = (refs, estado) => {
  const { inputNombre, inputGrupo, inputAnio, selectGenero, inputLocalizacion } = refs;

  mostrarError(inputNombre, estado.nombre);
  mostrarError(inputGrupo, estado.grupo);
  mostrarError(inputAnio, estado.anio);
  mostrarError(selectGenero, estado.genero);
  mostrarError(inputLocalizacion, estado.localizacion);
};

// Se imprimen los mensajes de error en el contenedor del formulario.
const actualizarMensajesErrores = (mensajes, contErrores) => {
  if (mensajes.length > 0) {
    let texto = "";
    for (let i = 0; i < mensajes.length; i++) {
      texto += mensajes[i] + "<br>";
    }
    contErrores.innerHTML = texto;
    contErrores.classList.add("activo");
  } else {
    contErrores.innerHTML = "";
    contErrores.classList.remove("activo");
  }
};

// Se limpia el formulario, los estilos de error y los mensajes tras un guardado correcto.
const limpiarFormularioYErrores = (refs, form, contErrores) => {
  const { inputNombre, inputGrupo, inputAnio, selectGenero, inputLocalizacion } = refs;

  form.reset();
  inputNombre.classList.remove("campo-error");
  inputGrupo.classList.remove("campo-error");
  inputAnio.classList.remove("campo-error");
  selectGenero.classList.remove("campo-error");
  inputLocalizacion.classList.remove("campo-error");

  contErrores.innerHTML = "";
  contErrores.classList.remove("activo");
};


// Esta función dirige toda la lógica de "guardar disco"
const manejarGuardarDisco = (coleccion, refs) => {
  const { form, contErrores, mensajeExito, gridDiscos, listadoVacio } = refs;

  // Se obtienen los datos del formulario.
  const datos = obtenerDatosDesdeRefs(refs);

  // Se valida el formulario.
  const estado = obtenerEstadoValidacion(datos);
  const esValido = validarFormulario(estado);

  // Se muestran los errores de cada input.
  mostrarErroresCampos(refs, estado);

  // Se imprimen los mensajes de error con formato correcto.
  const mensajes = obtenerMensajesError(estado);
  actualizarMensajesErrores(mensajes, contErrores);

  // Solo si el formulario es válido, se guarda y se limpia el form.
  if (esValido) {
    const nuevoDisco = crearDisco(datos);

    // Se calcula el siguiente id del disco y se pasa al id del nuevo disco.
    // Se usa Math.max para sacar el id del último disco y posteriormente se le suma 1.
    const siguienteId =
      coleccion.discos.length > 0
        ? Math.max(...coleccion.discos.map((d) => d.id || 0)) + 1
        : 1;

    nuevoDisco.id = siguienteId;

    const nuevaColeccion = {
      discos: [...coleccion.discos, nuevoDisco]
    };

    guardarEnLocalStorage(nuevaColeccion);

    // Se limpia el formulario y estilos de error.
    limpiarFormularioYErrores(refs, form, contErrores);

    // Se actualiza el mensaje "no hay discos" y se vuelve a pintar la colección.
    actualizarMensajeVacio(nuevaColeccion, listadoVacio);

    // Se muestra el mensaje de éxito.
    mensajeExito.classList.remove("oculto");

    // Se devuelve la nueva colección para que main.js pueda actualizar su estado.
    return nuevaColeccion;
  }

  // Si no es válido, se asegura que el mensaje de éxito no se muestre.
  mensajeExito.classList.add("oculto");
  return coleccion;
};




export { manejarGuardarDisco, crearDisco, obtenerEstadoValidacion, obtenerMensajesError,
validarFormulario };
