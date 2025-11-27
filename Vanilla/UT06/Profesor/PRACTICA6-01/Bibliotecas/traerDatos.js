"use strict";

/**
 * Función genérica para traer datos de una URL.
 * Devuelve una promesa con los datos ya parseados a JSON.
 */
export const traerDatos = async (url) => {
  try {
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error("Error en la respuesta de la API");
    }

    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error("Ha ocurrido un error al traer los datos:", error);
    throw error; // se relanza para que el código que llame decida qué hacer
  }
};

/**
 * Específico para películas.
 * Se encarga de devolver SOLO el array de películas,
 * independientemente de si viene en `results` o directamente.
 */
export const traerPeliculas = async () => {
  const urlPeliculas = "https://swapi.info/api/films";

  const datos = await traerDatos(urlPeliculas);

  // Por si cambian el formato, se intenta cubrir los casos más probables.
  let peliculas = [];

  if (Array.isArray(datos)) {
    peliculas = datos;
  } else if (Array.isArray(datos.results)) {
    peliculas = datos.results;
  } else if (Array.isArray(datos.films)) {
    peliculas = datos.films;
  } else {
    console.log("Formato de datos de películas no esperado:", datos);
  }

  // Ordenamos por episodio si la propiedad existe
  peliculas.sort((a, b) => {
    if (a.episode_id && b.episode_id) {
      return a.episode_id - b.episode_id;
    }
    return 0;
  });

  return peliculas;
};
