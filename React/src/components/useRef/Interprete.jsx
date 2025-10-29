import React from "react";
import "./interprete.css";


function Interprete({ nombre, img, fechaNacimiento, biografia, children }) {
  return (
    <article className="interprete">
      <img
        className="interpreteImagen"
        src={img}
        alt={nombre}
      />

      <div className="interpreteTexto">
        <h3 className="interpreteNombre">{nombre}</h3>

        {/* Fecha de nacimiento */}
        <p className="interpreteFecha"> Nacimiento: {fechaNacimiento}</p>

        {/* Descripción */}
        <p className="interpreteDescr">{biografia}</p>

      </div>
    </article>
  );
}

export default Interprete;
