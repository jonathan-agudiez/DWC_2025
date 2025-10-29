import React from "react";
import { Link } from "react-router-dom";
import peliculasJSON from "../components/json/peliculas.json";
import "./peliculas.css";

function Peliculas() {

  // Se guarda el listado de películas del JSON.
  const listaPeliculas = peliculasJSON.peliculas;

  return (
    <section className="peliculasListado">
      <h1 className="peliculasTitulo">Películas</h1>

      {/* Se recorre la lista con map para renderizar cada pelicula */}
      <div className="peliculasGrid">
        {listaPeliculas.map((pelicula) => {
          return (
            <div className="peliculasCard" key={pelicula.id}>
              {/* Cada tarjeta enlaza con su id */}
              <Link to={`/peliculas/${pelicula.id}`} className="peliculasLink">

                {/* Imagen del cartel */}
                <img  className="peliculasCardImagen" src={pelicula.cartelera}/>

                {/* Título */}
                <h3 className="peliculasCardTitulo">{pelicula.nombre}</h3>

                {/* Año */}
                <p className="peliculasCardAnyo">Año: {pelicula.anyo}</p>

              </Link>
            </div>
          );
        })}
      </div>

    </section>
  );
}

export default Peliculas;
