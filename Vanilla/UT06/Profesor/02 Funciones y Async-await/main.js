"use strict";

import { dibujarGentuza, dibujarPlanetas } from "./bibliotecas/manipularDOM.js";
import { traerPlanetas, traerDatos } from "./bibliotecas/traerDatos.js";

window.onload = () => {
  /********* Se seleccionan los elementos del DOM. ***********/

  const botonPlanetas = document.getElementById("botonPlanetas");
  const botonGentuza = document.getElementById("botonGentuza");
  const contenedorPlanetas = document.getElementById("planetas");
  const contenedorGentuza = document.getElementById("gentuza");

  /********* Origen de los datos. ***********************/

  const urlPlanetas = "https://swapi.info/api/planets";
  const urlGentuza = "https://swapi.info/api/people";

  /*************************************************************
   * Obtención y pintado de los datos. */

  //  console.log(traerPlanetas());

  /*************************************************************
   * Trabajando con eventos.
   *
   * Se pueden crear funciones para la obtención de los datos
   * y añadirlas a un evento con addEventListener.
   *
   */

  /* traerPlanetas().then((planetas) => {
      contenedorPlanetas.innerHTML = dibujarPlanetas(planetas);
    }); */

  botonPlanetas.addEventListener("click", async (evento) => {
    const planetas = await traerPlanetas();
    contenedorPlanetas.innerHTML = dibujarPlanetas(planetas);
  });

  /*************************************************************
   *  Async / Await
   *
   * ¿Y si se vuelve al sistema síncrono?
   *
   * Consumir promesas de forma "síncrona":
   *  - async, establece un ámbito asíncrono para el intérprete del código.
   *  - await, obliga al intérprete a "esperar" la ejecución del código asíncrono.
   *
   * Para utilizarlo hay que crear un ámbito y declararlo como asíncrono.
   * Lo idea es hacerlo en una función ya que es un ámbito pequeño y
   * controlable.
   *
   *
   */

  /* botonPlanetas.addEventListener("click", async (evento) => {
    let datos = await traerDatos(urlPlanetas);
    contenedorPlanetas.innerHTML = dibujarPlanetas(datos);
  }); */

  /**
   * ¡¡¡ATENCION!!! Evitar el modo "soyunprogramadorguayquenecesitareafirmacion"
   */
  /* const dibujarPlanetasModoGuay = async (url) => {
    let esperoEntendereloDentroDeUnMes = await (await fetch(url)).json();
    console.log(esperoEntendereloDentroDeUnMes);
  }; */

  //Nunca hacer asíncrono el window.load() -> ¿Por qué?
}; // Fin del window.load.
