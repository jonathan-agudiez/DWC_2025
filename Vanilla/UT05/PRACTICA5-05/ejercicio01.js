"use strict";

let idDisco = 0;

// Validadores
const validarNombre = (valor) =>
  /^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ0-9][A-Za-zÁÉÍÓÚÜáéíóúüÑñ0-9\s\-\.'’&/]{2,}$/.test(valor);

const validarGrupo = (valor) =>
  /^(?:[A-Za-z0-9ÁÉÍÓÚáéíóúÑñ]{3,}|[A-Za-z0-9ÁÉÍÓÚáéíóúÑñ]{2,}(?:\s+[A-Za-zÁÉÍÓÚáéíóúÑñ]{2,})+)$/.test(valor);

const validarAnio = (valor) =>
  /^[0-9]{4}$/.test(valor);

const validarSelect = (valor) =>
  valor !== "";

const validarLocalizacion = (valor) =>
  /^ES-[\d]{3}[A-Z]{2}$/.test(valor);


// Se obtiene el estado de la validación
const obtenerEstadoValidacion = (datos) => {
  return {
    nombre: validarNombre(datos.nombre),
    grupo: validarGrupo(datos.grupo),
    anio: validarAnio(datos.anio),
    genero: validarSelect(datos.genero),
    localizacion: validarLocalizacion(datos.localizacion)
  };
};

// Se valida el formulario completo, si es true, pasamos a la siguiente fase.
const validarFormulario = (estado) => {
  return (
    estado.nombre &&
    estado.grupo &&
    estado.anio &&
    estado.genero &&
    estado.localizacion
  );
};

// Si un validador es false se añade el mensaje al array mensajes.
const obtenerMensajesError = (estado) => {
  let mensajes = [];

  if (!estado.nombre) {
    mensajes = [...mensajes, "El nombre del disco debe tener al menos 5 caracteres."];
  }
  if (!estado.grupo) {
    mensajes = [...mensajes, "El grupo debe tener al menos 5 caracteres."];
  }
  if (!estado.anio) {
    mensajes = [...mensajes, "El año de publicación debe tener 4 dígitos."];
  }
  if (!estado.genero) {
    mensajes = [...mensajes, "Selecciona un tipo de música."];
  }
  if (!estado.localizacion) {
    mensajes = [...mensajes, "Formato obligatorio: ES-001AA."];
  }

  return mensajes;
};

// Se añaden los datos al JSON
const crearDisco = (datos) => {
  idDisco++;
  
  return {
    id: idDisco,
    nombre: datos.nombre,
    caratula: datos.caratula,           
    grupo: datos.grupo,
    anio: datos.anio,
    genero: datos.genero,
    localizacion: datos.localizacion,
    prestado: datos.prestado === true   
  };
};




// --- EXPORTACIÓN AGRUPADA ---

export { validarNombre, validarGrupo, validarAnio, validarSelect, validarLocalizacion, obtenerEstadoValidacion, validarFormulario, obtenerMensajesError, crearDisco };
