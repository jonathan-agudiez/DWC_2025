"use strict";

import { dibujarPlanetas } from "./manipularDOM.js";

// Función para consumir promesas específica.
const traerPlanetas = () => {
  // La API fetch siempre devolverá un objeto Promise que habrá que consumir.
  return fetch("https://swapi.info/api/planets")
    .then((respuesta) => {
      return respuesta.json(); // Se transforma el resultado a un objeto JSON.
    })
    .then((datos) => {
      return datos;
    })
    .catch((error) => {
      return `Se ha producido un error: ${error.message}`; // Por si se produce un error.
    });
};

// Función para consumir promesas generalista.
const traerDatos = (url) => {
  // Obtiene datos de una API y los transforma a JSON.
  return (
    fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        return datos;
      })
      // Si se produce un error se devuelve un mensaje.
      .catch((error) => {
        return `Se ha producido un error: ${error.message}`;
      })
  );
};

export { traerPlanetas, traerDatos };
