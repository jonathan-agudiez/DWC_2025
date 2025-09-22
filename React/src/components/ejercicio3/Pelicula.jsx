import React from "react";
import './pelicula.css';


export default function ({titulo, img, resumen, director, children}){

    return (

     <article className="pelicula">

        <img
            className="peliculaImagen"
            src={img}
            alt={`Cartel de ${titulo}`}
        />

        <div className="peliculaInfo">
            <h3 className="peliculaNombre">{titulo}</h3>
            <p className="peliculaDirector">{director}</p>
            <p className="peliculaResumen">{resumen}</p>
        </div>

        <div className="peliculaElenco">
            {children}
        </div>
    </article>
    
    );
}