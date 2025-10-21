import React, { useRef } from "react";
import './pelicula.css';
import {formatearEuros} from '../../bibliotecas/funciones.js';


function Pelicula({titulo, img, resumen, director, cartela, children, taquilla=125215}){

    
    const elencoRef = useRef(null);
    const taquillaRef = useRef(null);

    const toggle = (referencia) => {
        referencia.current?.classList.toggle("oculto");
    };


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
        

        {/* NUEVA SECCIÓN DE BOTONES E INFO */}
        <div className="peliculaAcciones">
            
            {/* Columna izquierda → los botones */}
            <div className="peliculaBotones">
            <button onClick={() => toggle(elencoRef)} className="btnElenco"><span>Elenco</span></button>

            <button onClick={() => toggle(taquillaRef)} className="btnTaquilla"><span>Taquilla</span></button>
            </div>

            {/* Columna derecha → info de taquilla (aún por hacer) */}
            <div ref={taquillaRef} className="peliculaTaquilla oculto">
            <p>{formatearEuros(taquilla)}</p>
            </div>
        </div>

         {/* Sección de los interpretes pasado por children */}
        <div ref={elencoRef} className="peliculaElenco oculto">
            {children}
        </div>
    </article>
    
    );
}

export default Pelicula;
