import React from "react";
import datosPeliculas from "../components/json/peliculas.json";
import "./interpretes.css";

function Interpretes() {

  // Se almacena en variable las películas del JSON.
  let peliculas = datosPeliculas.peliculas;

  // Se crea un array vacío donde se meterán todos los actores.
  let todosLosActores = [];

  // Se recorre todas las películas.
  for (let i = 0; i < peliculas.length; i++) {
    // Se añaden los actores de cada película usando el Spread (...).
    todosLosActores = [...todosLosActores, ...peliculas[i].actores];
  }

  // Se crea un nuevo array sin actores repetidos.
  let actores = [];

  // Se recorren todos los actores y solo se añade si no está repetido.
  for (let i = 0; i < todosLosActores.length; i++) {
    let actorActual = todosLosActores[i];

    // Se comprueba si ya existe con el mismo nombre.
    let existe = false;
    for (let j = 0; j < actores.length; j++) {
      if (actores[j].nombre === actorActual.nombre) {
        existe = true;
      }
    }

    // Si no existe, se añade.
    if (!existe) {
      actores = [...actores, actorActual];
    }
  }

  // Ahora el array "actores" no tiene actores repetidos.

  return (
    <section className="interpretesPagina">
      <h1 className="interpretesTitulo">Intérpretes</h1>

      <div className="interpretesGrid">
        {/* Se recorre el array de actores y se genera una tarjeta por cada uno */}
        {actores.map((actor, indice) => (
          <article className="interpreteCard" key={indice}>
            <div className="interpreteCardImagenWrapper">
              <img
                className="interpreteCardImagen"
                src={actor.imagen}
                alt={actor.nombre}
              />
            </div>

            <div className="interpreteCardTexto">
              <h3 className="interpreteCardNombre">{actor.nombre}</h3>
              <p className="interpreteCardFecha"> Nacimiento: {actor.fechaNacimiento} </p>
              <p className="interpreteCardBio">{actor.biografia}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Interpretes;
