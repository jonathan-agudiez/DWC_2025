"use strict";

/**************************************************************
 * Funciones para pintar contenido en el DOM
 **************************************************************/

/**
 * Recibe un array de películas y devuelve el HTML
 * para el listado (<li>...) que irá dentro de #film-list.
 */
const dibujarPeliculas = (peliculas) => {
  let html = "";

  peliculas.forEach((pelicula, indice) => {
    const idVisible = pelicula.episode_id || indice + 1;

    html += `
      <li class="film-item" data-index="${indice}">
        <span class="film-item__id">Ep. ${idVisible}</span>
        <span class="film-item__title">${pelicula.title}</span>
      </li>
    `;
  });

  return html;
};

/**
 * Pinta la ficha de la película seleccionada.
 * Devuelve true si se pudo rellenar, false si no.
 */
const rellenarFichaPelicula = (pelicula) => {
  const elementoTitulo = document.getElementById("film-title");
  const elementoSinopsis = document.getElementById("film-opening");
  const elementoDirector = document.getElementById("film-director");
  const elementoProductor = document.getElementById("film-producer");
  const elementoFecha = document.getElementById("film-release-date");

  const existe = Boolean(pelicula);

  if (!existe) {
    elementoTitulo.textContent = "No se ha encontrado la película";
    elementoSinopsis.textContent = "";
    elementoDirector.textContent = "—";
    elementoProductor.textContent = "—";
    elementoFecha.textContent = "—";
    return false; 
  }

  elementoTitulo.textContent = pelicula.title;
  elementoSinopsis.textContent = pelicula.opening_crawl;
  elementoDirector.textContent = pelicula.director;
  elementoProductor.textContent = pelicula.producer;
  elementoFecha.textContent = formatearFechaEuropea(pelicula.release_date);

  return true; 
};

/**
 * Convierte "YYYY-MM-DD" a "DD/MM/YYYY".
 * Devuelve siempre un string.
 */
const formatearFechaEuropea = (fechaISO) => {
  if (!fechaISO || typeof fechaISO !== "string") {
    return "Fecha no disponible";
  }

  const partes = fechaISO.split("-");

  if (partes.length !== 3) {
    return fechaISO;
  }

  const [anio, mes, dia] = partes;

  return `${dia}/${mes}/${anio}`;
};

export { dibujarPeliculas, rellenarFichaPelicula };
