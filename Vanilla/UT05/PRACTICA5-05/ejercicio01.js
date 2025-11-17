"use strict";


/* Parte II. 
Hacer formulario y que guarden en JSON.

Antes de añadir el disco al objeto JSON debe ser comprobado. Crea las funciones
necesarias para validarlo teniendo en cuenta:
• nombre del disco tiene, al menos, cinco caracteres y es obligatorio,
• grupo de música o intérprete posee, al menos, cinco caracteres y es obligatorio,
• año de publicación dispone de cuatro caracteres numéricos,
• tipo de música comprobará si se ha seleccionado alguno,
• localización tiene el formato ES-001AA donde 001 es el número de la estantería y AA la
balda (combinación de dos letras mayúsculas),
• prestado y carátula no tienen comprobación.
En caso de que se produzca un error en la validación, el campo del formulario implicado será
destacado con un estilo CSS adecuado. En cuanto ese campo contenga un valor válido,
volverá a su estilo original.
Además existe un contenedor de información que, si se ha producido un error, mostrará un
mensaje informando de qué campo (o campos) es el incorrecto y cómo solucionarlo (los
insultos son opcionales). Ubícalo donde estimes oportuno y añádele el formato CSS que
necesites. */

const form = document.getElementById("formDisco");
const inputNombre = document.getElementById("nombre");
const inputCaratula = document.getElementById("caratula");
const inputGrupo = document.getElementById("grupo");
const inputAnio = document.getElementById("anio");
const selectGenero = document.getElementById("genero");
const inputLocalizacion = document.getElementById("localizacion");
const checkboxPrestado = document.getElementById("prestado");
const contErrores = document.getElementById("mensajeErrores");


const validarNombre = (inputNombre) => {
  const expNombre = /^[a-zA-Z][a-zA-Z0-9-_\.]{5,}$/;
  return expNombre.test(inputNombre);
};

const validarGrupo = (inputGrupo) => {
  const expGrupo = /^[a-zA-Z][a-zA-Z0-9-_\.]{5,}$/;
  return expGrupo.test(inputGrupo);
};

const validarAnio = (inputAnio) => {
  const expAnio = /^[0-9]{4,4}$/;
  return expAnio.test(inputAnio);
};

const validarSelect = (selectGenero) => {
  (selectGenero === "") ? false : true;
}

const validarLocalizacion = (inputLocalizacion) => {
  const expLocalizacion = /^ES-[\d]{3}[A-Z]{2}$/;
  return expLocalizacion.test(inputLocalizacion);
}

const validarFormulario = (validarNombre, validarGrupo, validarAnio, validarSelect, validarLocalizacion) => {

  const contadorErrores = 0;

  if(!validarNombre) {
    document.getElementById("mensajeErrores").innerHTML("El nombre debe tener al menos 5 caracteres.");
    contadorErrores++;
  };
  if(!validarGrupo) {
    document.getElementById("mensajeErrores").innerHTML("El grupo debe tener al menos 5 caracteres.");
    contadorErrores++;
  };
  if(!validarAnio) {
    document.getElementById("mensajeErrores").innerHTML("El año debe tener 4 dígitos.");
    contadorErrores++;
  };
  if(!validarLocalizacion) {
    document.getElementById("mensajeErrores").innerHTML("El nombre debe tener formato ES-000AA");
    contadorErrores++;
  };

  return contadorErrores;

}





marcarError(mensaje, listaErrores){
  return listaErrores.push(mensaje);
};