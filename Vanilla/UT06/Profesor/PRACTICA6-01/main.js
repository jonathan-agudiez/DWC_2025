"use strict";

import {
  dibujarPeliculas,
  rellenarFichaPelicula,
} from "./Bibliotecas/manipularDOM.js";
import { traerPeliculas } from "./Bibliotecas/traerDatos.js";

window.onload = () => {
  /********* Se seleccionan los elementos del DOM. ***********/

  const listaPeliculas = document.getElementById("film-list");

  // Nos guardamos la referencia a las películas en memoria
  // para poder acceder a ellas al hacer clic en el listado.
  let peliculasCargadas = [];

  /********* Obtención inicial de los datos. ***********/

  // Al cargar la aplicación se traen las películas y se pinta el listado.
  // Ojo: no hacemos el onload asíncrono (recomendación del profe),
  // así que usamos una función asíncrona aparte.
  const iniciarAplicacion = async () => {
    try {
      peliculasCargadas = await traerPeliculas();
      listaPeliculas.innerHTML = dibujarPeliculas(peliculasCargadas);

      // Si queremos, seleccionamos automáticamente la primera película
      if (peliculasCargadas.length > 0) {
        seleccionarPeliculaPorIndice(0);
      }
    } catch (error) {
      // Si algo ha fallado al traer los datos, lo dejamos anotado.
      listaPeliculas.innerHTML =
        "<li>No se han podido cargar las películas 😢</li>";
    }
  };

  iniciarAplicacion();

  /*************************************************************
   * Gestión de eventos: selección de película.
   *
   * Usamos delegación de eventos: escuchamos en el <ul> y
   * comprobamos si el usuario ha hecho clic en un .film-item.
   *************************************************************/

  listaPeliculas.addEventListener("click", (evento) => {
    // Busca el <li> más cercano con la clase .film-item
    const elementoPulsado = evento.target.closest(".film-item");

    if (!elementoPulsado) {
      return; // Se ha hecho clic en otra cosa dentro del UL
    }

    const indice = parseInt(elementoPulsado.dataset.index, 10);

    if (Number.isNaN(indice) || !peliculasCargadas[indice]) {
      return;
    }

    seleccionarPeliculaPorIndice(indice);
  });

  /*************************************************************
   * Funciones auxiliares
   *************************************************************/

  /**
   * Marca visualmente el elemento seleccionado y actualiza los datos
   * de la ficha.
   */
  const seleccionarPeliculaPorIndice = (indice) => {
    const peliculaSeleccionada = peliculasCargadas[indice];

    // Actualizar ficha de la derecha
    rellenarFichaPelicula(peliculaSeleccionada);

    // Quitar la clase activa de todos los elementos
    const items = listaPeliculas.querySelectorAll(".film-item");
    items.forEach((item) => item.classList.remove("film-item--active"));

    // Añadir la clase activa al elemento seleccionado
    const itemActivo = listaPeliculas.querySelector(
      `.film-item[data-index="${indice}"]`
    );
    if (itemActivo) {
      itemActivo.classList.add("film-item--active");
    }
  };
}; // Fin del window.onload.
