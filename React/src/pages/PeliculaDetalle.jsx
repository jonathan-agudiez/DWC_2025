import React from "react";
import { useParams } from "react-router-dom";
import datos from "../components/json/peliculas.json";
import BotonVolver from "../components/useNavigate/BotonVolver.jsx";

// Importamos componentes reutilizables
import Pelicula from "../components/useRef/Pelicula.jsx";
import Interprete from "../components/useRef/Interprete.jsx";
import "./peliculaDetalle.css";

const PeliculaDetalle = () => {
    
    // Se recoge el id pasado por la ruta dinámica (react-router-dom).
    const { id } = useParams();

    // Filtramos el JSON para obtener solo la película cuyo id coincide con el de la URL.
    const peliculaFiltrada = datos.peliculas.filter((valor) => {
        return valor.id === parseInt(id); 
        //¡Ojo! La información se comparte en formato string.
    });

    // Se extraen las propiedades de la película para usarlas de forma más clara.
    const { nombre, director, clasificacion, recaudacion, nota, resumen, cartelera, anyo,
    actores } = peliculaFiltrada[0];

    return (
    <section className="peliculaDetalle">

        {/* Botón reutilizable para volver al listado de películas */}
        <BotonVolver ruta="/peliculas" />

        <Pelicula
            titulo={nombre}
            img={cartelera}
            resumen={resumen}
            director={director}
            cartela={cartelera}       
            taquilla={recaudacion}
            anyo={anyo}
            clasificacion={clasificacion}
            nota={nota}
        >
            
            {/* Se recorre el array de actores con map para generar un componente <Interprete /> por cada uno */}
            {actores.map((actor, indice) => (
                <Interprete
                    key={indice}
                    nombre={actor.nombre}
                    img={actor.imagen}
                    fechaNacimiento={actor.fechaNacimiento}
                    biografia={actor.biografia}>
                </Interprete>
            ))}
        </Pelicula>


    </section>
  );
};

export default PeliculaDetalle;
