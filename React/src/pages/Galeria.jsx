import React from "react";
import { Link, Outlet } from "react-router-dom";
import datosPeliculas from "../components/json/peliculas.json";
import "./galeria.css";

function Galeria() {

  const listaPeliculas = datosPeliculas.peliculas;

  return (
    <section className="galeria">
      <h1 className="galeriaTitulo">Galería</h1>

      {/* Submenú */}
      <nav className="galeriaNav">
        <ul>
          <li><Link to="titulo" className="galeriaLink">Por título</Link></li>
          <li><Link to="interprete" className="galeriaLink">Por intérprete</Link></li>
          <li><Link to="director" className="galeriaLink">Por director</Link></li>
        </ul>
      </nav>

      {/* Se muestra aquí el contenido de la subruta */}
      <div className="galeriaContenido">
        <Outlet />
      </div>

      {/* Galería de carteles */}
      <div className="galeriaContenido">
        <div className="galeriaGrid">
          {listaPeliculas.map((pelicula) => {
            return (
              <figure className="galeriaItem" key={pelicula.id}>
                <img  className="galeriaImagen" src={pelicula.cartelera}/>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Galeria;
