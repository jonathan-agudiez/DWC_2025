"use strict";

const mostrarError = (elemento, esValido) => {
  if (esValido) {
    elemento.classList.remove("campo-error");
  } else {
    elemento.classList.add("campo-error");
  }
};



export { mostrarError };
