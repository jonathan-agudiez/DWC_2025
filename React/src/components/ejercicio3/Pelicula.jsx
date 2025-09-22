import React from "react";
import './pelicula.css';


function Pelicula({titulo, img, resumen, director, cartela, children}){

    
    return (

     <article className="pelicula">

        {/* Sección de la imagen*/}
        <img
            className="peliculaImagen"
            src={img}
            alt={`Cartel de ${titulo}`}
        />

         {/* Sección de la info de la película*/}
        <div className="peliculaInfo">
            <h3 className="peliculaNombre">{titulo}</h3>
            <p className="peliculaDirector">{director}</p>
            <a className="peliculaCartela" href={`${cartela}`}>{cartela}</a>
            <p className="peliculaResumen">{resumen}</p>
        </div>
        
         {/* Sección de los interpretes pasado por children */}
        <div className="peliculaElenco">
            {children}
        </div>
    </article>
    
    );
}

export default Pelicula;