"use strict";

// Se guarda la colección actual en localStorage
const guardarEnLocalStorage = (coleccion) => {
  localStorage.setItem("coleccionDiscos", JSON.stringify(coleccion));
};

// Se carga la colección desde localStorage si existe
const cargarDesdeLocalStorage = () => {
  const datos = localStorage.getItem("coleccionDiscos");

  if (datos) {
    return JSON.parse(datos);
  }

  return { discos: [] };
};

export { guardarEnLocalStorage, cargarDesdeLocalStorage };
