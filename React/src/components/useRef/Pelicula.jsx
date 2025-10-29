import React, { useRef } from "react";
import "./pelicula.css";
import { formatearEuros } from "../../bibliotecas/funciones.js";


function Pelicula({ titulo, img, resumen, director, taquilla, anyo, clasificacion, nota, children}) {

    //  Se referencia con useRef. para acceder al elemento del DOM.
    //  En este caso a los botones elenco y taquilla.
    const elencoRef = useRef(null);
    const taquillaRef = useRef(null);

    //  Se la referencia apunta a un elemento (existe), alterna la clase "oculto".
    //  El ? evita error si current es null (igual que if (referencia.current)).
    const toggle = (referencia) => {
        referencia.current?.classList.toggle("oculto");
    };

    return (
    <article className="pelicula">
        {/* Sección de la imagen */}
        <img className="peliculaImagen" src={img}/>

        {/* Sección de la info de la película */}
        <div className="peliculaInfo">
            <h3 className="peliculaNombre">{titulo}</h3>

            {/* Si anyo tiene un valor (no es null, undefined, etc) entonces muestra lo que después de && */}
            {anyo && (<p className="peliculaDirector"> <strong>Año:</strong> {anyo}</p>)}

            <p className="peliculaDirector"><strong>Director:</strong> {director}</p>

            {clasificacion && (<p className="peliculaDirector"><strong>Clasificación: </strong>{clasificacion}</p>)}

            {nota && (<p className="peliculaDirector"><strong>Nota:</strong> {nota}</p>)}

            <p className="peliculaResumen">{resumen}</p>
        </div>

        {/* Sección de botones e info de taquilla */}
        <div className="peliculaAcciones">
            {/* Columna izquierda de los botones */}
            <div className="peliculaBotones">

                <button
                    onClick={() => toggle(elencoRef)}
                    className="btnElenco"
                >
                    <span>Elenco</span>
                </button>

                <button
                    onClick={() => toggle(taquillaRef)}
                    className="btnTaquilla"
                >
                    <span>Taquilla</span>
                </button>
            </div>

            {/* Columna derecha de la info de taquilla */}
            <div ref={taquillaRef} className="peliculaTaquilla oculto">
                {/* Se usa la prop taquilla en vez de número fijo */}
                <p>{taquilla ? formatearEuros(taquilla) : "Sin datos de recaudación"}</p>
            </div>
        </div>

        {/* Sección del elenco (children = <Interprete />…) */}
        <div ref={elencoRef} className="peliculaElenco oculto">
            {children}
        </div>
    </article>
  );
}

export default Pelicula;
