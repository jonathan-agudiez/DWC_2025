import React from "react";
import "./interprete.css";

export default function Interprete({ nombre, img, children }) {
  return (
    <article className="interprete">
      <img
        className="interpreteImagen"      
        src={img}
        alt={`Foto de ${nombre}`}
      />
      <div className="interpreteTexto">
        <h3 className="interpreteNombre">{nombre}</h3>
        <p className="interpreteDescr">{children}</p>
      </div>
    </article>
  );
}
